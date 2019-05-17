/* Left to right slider component */

class Slider {
    constructor(sliderElement) {        
        this.sliderElement = sliderElement;
        this.items = this.sliderElement.querySelectorAll('.slider-slide');
        this.forwardArrow = this.sliderElement.querySelector('.forward-arrow');
        this.previousArrow = this.sliderElement.querySelector('.previous-arrow');
        this.activeSlide = 1;
        this.numOfSlides = this.items.length;

        
        this.forwardArrow.addEventListener('click', () => {
            this.slide('forward');
        });

        this.previousArrow.addEventListener('click', () => {
            this.slide('previous');
        });
        // don't need the object array atm but might later
        this.itemObjects = Array.from(this.items).map(item => new SliderItem(item));  
    }

    getNextSlideNumber(direction) {
        if (direction === 'forward') {
            if (this.activeSlide == this.numOfSlides) { // If at the last slide, go to the first slide
                return 1; 
            } else {    // If not at the last slide, go to the next slide like normal
                return this.activeSlide + 1;
            }
        } 
        if (direction === 'previous') {
            if (this.activeSlide == 1) {    // If at the first slide, go to the last slide
                return this.numOfSlides;
            } else {                        // If not at the first slide, go to the previous slide like normal
                return this.activeSlide -1;
            }
        } 
    }

    slide (direction) {
        $(document).ready( () => {
            let nextSlide;
            let oldSlide;

            if(direction === 'forward') {
                nextSlide = this.sliderElement.querySelector(`.slider-slide[data-number="${this.getNextSlideNumber(direction)}"]`)
                oldSlide = this.sliderElement.querySelector(`.slider-slide[data-number="${this.activeSlide}"]`);
                
                // jQuery animation
                let slideWidth = $(oldSlide).width();
                console.log(slideWidth);
                $(oldSlide).animate({
                    right: - slideWidth
                    // opacity: .5
                    }, 800, function (){
                        console.log('animate!');
                        nextSlide.classList.remove('hide-slide'); 
                        oldSlide.classList.add('hide-slide');                                                                                               
                        // $(oldSlide).css('left', '');                                
                });
                
                
                

                // oldSlide.classList.add('hide-slide');
                // nextSlide.classList.remove('hide-slide');

                this.activeSlide = this.getNextSlideNumber(direction);
            } else if (direction === 'previous') {
                nextSlide = this.sliderElement.querySelector(`.slider-slide[data-number="${this.getNextSlideNumber(direction)}"]`)
                oldSlide = this.sliderElement.querySelector(`.slider-slide[data-number="${this.activeSlide}"]`);

                oldSlide.classList.add('hide-slide');
                nextSlide.classList.remove('hide-slide');

                this.activeSlide = this.getNextSlideNumber(direction);
            } else {
                console.log('Error: unrecognized slide direction!');
            }          
        });  
    }
}

class SliderItem {
    constructor(item) {
        this.item = item;
        this.data = this.item.dataset.number;
    }
}

function initializeSliders(){
    let sliders = document.querySelectorAll('.slider-component');
    sliders.forEach(slider => {
        new Slider(slider);
    })
}