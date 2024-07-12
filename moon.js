const imageSources = [ 'img-1.jpg ', 'img-2.jpg ', 'img-3.jpg ', 'img-4.jpg ', 'img-5.jpg ', 'img-6.jpg ', 'img-7.jpg ', 'img-8.jpg ', 'img-9.jpg ', 'img-10.jpg ',];
function changeBackgroundImage() {
const randomIndex = Math.floor(Math.random() * imageSources.length);
document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
// Change the background image every 1 seconds (1000 milliseconds)
setInterval(changeBackgroundImage, 1000);
