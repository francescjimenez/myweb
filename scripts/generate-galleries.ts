const fs = require('fs');
const path = require('path');
const exif = require('exif-parser');

type GalleryImage = {
  path: string;
  meta: {
    make: string;
    camera: string;
    lens: string;
    iso: string;
    focalLength: string;
    aperture: string;
    shutterSpeed: string;
  };
};

const imageList: Record<string, { info?: string, cover?: string, images: GalleryImage[] }> = {};

function getExifData(imagePath: string) {
  const buffer = fs.readFileSync(imagePath);
  const parser = exif.create(buffer);
  const result = parser.parse();
  return result.tags; // Contains aperture, ISO, shutter speed, etc.
}

function logAndSkip(type: "error" | "warning", message: string, id: string) {
  if (imageList[id]) {
    delete imageList[id];
  }
  const icons = { error: "❌ ", warning: "⚠️ " };
  console.error(`  ${icons[type]} ${message}`);
  console.log(' ')
  return;
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
  const imagesDir = path.join(__dirname, '..', 'images', 'stories');
  const collections = fs.readdirSync(imagesDir).filter((file: string) => fs.statSync(path.join(imagesDir, file)).isDirectory());

  // create a beter log introduction
  console.log('...........................');
  console.log('🚀 Starting gallery generation 🚀');  
  console.log(`📚 Found: 
        ${collections.join(', ')}`);
  console.log('...........................')
  console.log(' ')

  collections.forEach((collection: any) => {
    console.log(`- Checking collection: 📷 ${collection}`);
    const coverImage = `cover.jpg`;
    const infoFile = `_info.json`;
    let collectionId = '';
    const collectionDir = path.join(imagesDir, collection);
    const files = fs.readdirSync(collectionDir);

    if (files.length === 0) {
      return logAndSkip("warning", `No files found in collection ${collection}`, collection);
    }

    // Check if cover _info.json exists
    if (!files.includes(infoFile)) {
      return logAndSkip("error", `Missing _info.json in collection ${collection}`, collection);
    } else {
      const infoPath = path.join(collectionDir, infoFile);
      const infoData = JSON.parse(fs.readFileSync(infoPath, 'utf-8'));
      collectionId = infoData.id || collection;
      // Initialize the collection in imageList
      imageList[collectionId] = { images: [] };
      imageList[collectionId].info = infoData
      
    }
    
    // Check if cover image exists
    if (!files.includes(coverImage)) {
      return logAndSkip("error", `Missing cover image in collection ${collection}`, collectionId);
    } else {
      const coverImagePath = path.join(collectionDir, coverImage);
      imageList[collectionId].cover = coverImagePath;
    }

    // check the rest of the images, be sure that they are only images
    const imageFiles = files.filter((file: string) => file !== coverImage && /\.(jpe?g|png|gif|webp)$/i.test(file));
    if (imageFiles.length === 0) {
      return logAndSkip("warning", `No images found in collection ${collection}`, collectionId);
    } else {
      imageFiles.forEach((imageFile: string) => {
        const imagePath = path.join(collectionDir, imageFile);
        const meta = getExifData(imagePath);
        
        imageList[collectionId].images.push({
          path: imagePath,
          meta: {
            make: meta.Make || 'Unknown',
            camera: `${meta.Model || 'Unknown'}`,
            lens: meta.LensModel || 'Unknown',
            iso: meta.ISO || 'Unknown',
            focalLength: meta.FocalLength ? meta.FocalLength + 'mm' : 'Unknown',
            aperture: meta.FNumber ? 'f/' + meta.FNumber : 'Unknown',
            shutterSpeed: meta.ExposureTime ? formatShutterSpeed(meta.ExposureTime) : 'Unknown'
          }
        });
      });
    }
    if (imageList[collectionId]) {
      console.log(`  ✅ Collection ${collection} done, Found ${imageFiles.length} images
        `);
    }
  });

  console.log('\n 🧬 Image validation completed successfully.\n');
  // start to move images to public/images/stories/[collection] folders
  console.log('Generating public folders and moving images...');

  Object.values(imageList).forEach((stories: any) => {

    const outputDir = path.join(__dirname, '..', 'public', 'images', 'stories', stories.info.id);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    } else {
      fs.readdirSync(outputDir).forEach((file: any) => {
        fs.unlinkSync(path.join(outputDir, file));
      });
    }

    const coverFileName = path.basename(stories.cover);
    const coverDestPath = path.join(outputDir, coverFileName);
    fs.copyFileSync(stories.cover, coverDestPath);

    stories.images.forEach((image: any) => {
      let imageFileName = path.basename(image.path);
      imageFileName = imageFileName.replace(/[^a-zA-Z0-9._]/g, '_');
      const prefixedFileName = `${stories.info.id}_${imageFileName}`;
      const imageDestPath = path.join(outputDir, prefixedFileName);
      fs.copyFileSync(image.path, imageDestPath);
    });

    const infoDestPath = path.join(outputDir, '_info.json');
    // extend the info file with the number of images and the cover image name and the list of image names
    stories.info.numberOfImages = stories.images.length;
    stories.info.coverImage = coverFileName;

    stories.info.imageFiles = stories.images.map((img: any) => {
      let imageFileName = path.basename(img.path);
      imageFileName = imageFileName.replace(/[^a-zA-Z0-9._]/g, '_');
      return `${stories.info.id}_${imageFileName}`;
    });

    fs.writeFileSync(infoDestPath, JSON.stringify(stories.info, null, 2));

  });

  const galleriesIndex = Object.values(imageList).map((stories: any) => ({
    id: stories.info.id,
    title: stories.info.title,
    tags: stories.info.tags,
    slug: stories.info.slug,
    coverImage: stories.info.coverImage,
    numberOfImages: stories.info.numberOfImages,
  }));
  const indexPath = path.join(__dirname, '..', 'app', 'api', 'stories', 'index.json');
  fs.writeFileSync(indexPath, JSON.stringify(galleriesIndex, null, 2));
  console.log(' ');
  console.log(' ✅ Gallery generation completed successfully.');
  console.log(' ');
  console.log('...........................');
  console.log('     🎉 All done! 🎉');
  console.log('...........................');
  console.log(' ');
}

// Run the validation
generateGallery();
