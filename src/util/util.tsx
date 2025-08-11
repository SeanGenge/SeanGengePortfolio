export function importImages(imageList) {
	let images = {};

	imageList.keys().forEach((item, index) => { images[item.replace('./', '')] = imageList(item); });

	return images
}