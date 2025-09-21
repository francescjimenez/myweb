export function getImages(): { [key: string]: string } {
    const images: { [key: string]: string } = {};
    images['home_main1'] = "https://picsum.photos/955/198";
    images['home_main2'] = "https://picsum.photos/307/140";
    images['home_main3'] = "https://picsum.photos/470/82";
    images['home_main4'] = "https://picsum.photos/470/82";
    images['home_main5'] = "https://picsum.photos/307/140";

    images['home_main'] = "https://picsum.photos/584/500";

    images['home_secundary1'] = "https://picsum.photos/500/500";
    images['home_secundary2'] = "https://picsum.photos/500/500";
    images['home_secundary3'] = "https://picsum.photos/500/500";
    images['home_secundary4'] = "https://picsum.photos/500/500";

    return images;
}
