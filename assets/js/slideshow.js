class Slideshow {
    classIsActive = 'is-active';

    constructor(prevButton, nextButton, slideList, slideCurrent) {
        this.prevButton = prevButton;
        this.nextButton = nextButton;
        this.slideList = slideList;
        this.slideCurrent = slideCurrent;
    }

    setEventButtonSlides = () => {
        this.prevButton.addEventListener('click', () => this.handleSlideButtonClick('prev'));
        this.nextButton.addEventListener('click', () => this.handleSlideButtonClick());
    };

    handleSlideButtonClick = (direction = 'next') => {
        this.slideCurrent.classList.remove(this.classIsActive);
        console.log('direction: ' + direction);
        if(direction === 'next') {

            this.slideCurrent = this.slideCurrent.nextElementSibling
                ? this.slideCurrent.nextElementSibling
                : this.slideList.firstElementChild;
        }
        else {
            this.slideCurrent = this.slideCurrent.previousElementSibling
                ? this.slideCurrent.previousElementSibling
                : this.slideList.lastElementChild;
        }
        this.slideCurrent.classList.add(this.classIsActive);
    };

    ready = () => {
        this.setEventButtonSlides();
    }

}