const init = () => {
    const slides = new Slideshow(
        document.getElementById('prevButton'),
        document.getElementById('nextButton'),
        document.querySelector('.slides .slide-item-resource-content'),
        document.querySelector('.slides .resource.is-active')
    );
    slides.ready();
};

window.addEventListener('load', init);