const fs = require('fs');
const path = require('path');
const exif = require('exif-parser');


function getExifData(imagePath: string) {
  const buffer = fs.readFileSync(imagePath);
  const parser = exif.create(buffer);
  const result = parser.parse();
  return result.tags; // Contains aperture, ISO, shutter speed, etc.
}

function formatShutterSpeed(exposureTime: number): string {
  if (exposureTime >= 1) {
    return `${exposureTime.toFixed(1)}s`;
  } else if (exposureTime > 0) {
    const denominator = Math.round(1 / exposureTime);
    return `1/${denominator}s`;
  } else {
    return 'Unknown';
  }
}

function generateGallery() {
  // loop though each stories forlder inside in images/stories
  const imagesDir = path.join(__dirname, '..', 'images', 'stories');
  const collections = fs.readdirSync(imagesDir).filter((file: string) => fs.statSync(path.join(imagesDir, file)).isDirectory());

  console.log(`Found collections: ${collections.join(', ')}`);
  console.log('...........................')

  const imageList: Record<string, { info?: string, cover?: string, images: string[] }> = {};

  collections.forEach((collection: any) => {
    console.log(`Checking collection: ${collection}`);
    const coverImage = `cover.jpg`;
    const infoFile = `_info.json`;
    const collectionDir = path.join(imagesDir, collection);
    const files = fs.readdirSync(collectionDir);
    imageList[collection] = { images: [] };

    if (files.length === 0) {
      const warning = `No files found in collection ${collection}`;
      console.error(`⚠️  ${warning}`);
      process.exit(1);
    }

    // Check if cover _info.json exists
    if (!files.includes(infoFile)) {
      const error = `Missing _info.json in collection ${collection}`;
      console.error(`❌ ${error}`);
      process.exit(1);
    } else {
      console.log(`✅ _info.json found in collection ${collection}`);
      // and save the data from the json into a variable
      const infoPath = path.join(collectionDir, infoFile);
      imageList[collection].info = JSON.parse(fs.readFileSync(infoPath, 'utf-8'));
    }
    
    // Check if cover image exists
    if (!files.includes(coverImage)) {
      const error = `Missing cover image in collection ${collection}`;
      console.error(`❌ ${error}`);
      process.exit(1);
    } else {
      console.log(`✅ Cover image found in collection ${collection}`);
      const coverImagePath = path.join(collectionDir, coverImage);
      imageList[collection].cover = coverImagePath;
    }

    // check the rest of the images, be sure that they are only images
    const imageFiles = files.filter((file: string) => file !== coverImage && /\.(jpe?g|png|gif|webp)$/i.test(file));
    if (imageFiles.length === 0) {
      const warning = `No images found in collection ${collection}`;
      console.error(`⚠️  ${warning}`);
      process.exit(1);
    } else {
      imageFiles.forEach((imageFile: string) => {
        const imagePath = path.join(collectionDir, imageFile);
        imageList[collection].images.push(imagePath);

        const meta = getExifData(imagePath);
        console.log(meta)
        // Make // fabricant
        // Model
        // LensModel
        // ISO
        // FocalLength (mm)
        // FNumber
        // ExposureTime (s)
        console.log(` Metadata for ${imageFile}:`);
        console.log(`  - Camera: ${meta.Make || 'Unknown'} ${meta.Model || ''}`);
        console.log(`  - Lens: ${meta.LensModel || 'Unknown'}`);
        console.log(`  - ISO: ${meta.ISO || 'Unknown'}`);
        console.log(`  - Focal Length: ${meta.FocalLength ? meta.FocalLength + 'mm' : 'Unknown'}`);
        console.log(`  - Aperture: ${meta.FNumber ? 'f/' + meta.FNumber : 'Unknown'}`);
        console.log(`  - Shutter Speed: ${meta.ExposureTime ? formatShutterSpeed(meta.ExposureTime) : 'Unknown'}`);
        console.log('-------------------------');

      });
      console.log(`✅ Found ${imageFiles.length} images in collection ${collection}`);
    }

  });
  console.log('\nImage validation completed successfully.');
  console.log(imageList)
} 


// Run the validation
generateGallery()
