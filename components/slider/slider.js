/* Sliding carosel component
TO-DO:
-Add options for animation such as enable/disable opacity, animation speed, and direction

 */

class Slider {
    constructor(sliderElement) {        
        this.sliderElement = sliderElement;
        this.items = this.sliderElement.querySelectorAll('.slider-slide');
        this.forwardArrow = this.sliderElement.querySelector('.forward-arrow');
        this.previousArrow = this.sliderElement.querySelector('.previous-arrow');
        this.activeSlide = 1;
        this.numOfSlides = this.items.length;

        this.forwardArrow.addEventListener('click', (event) => {
            this.slide('forward', this.activeSlide, this.numOfSlides);
        });

        this.previousArrow.addEventListener('click', (event) => {
            this.slide('previous', this.activeSlide, this.numOfSlides);
        });
        // don't need the object array atm but might later
        this.itemObjects = Array.from(this.items).map(item => new SliderItem(item));  
    }   

    slide (direction, activeSlide, numOfSlides) {
        $(document).ready( () => {
            let nextSlide;
            let oldSlide;
            let slideWidth;

            if(direction === 'forward') {
                nextSlide = this.sliderElement.querySelector(`.slider-slide[data-number="${getNextSlideNumber(direction)}"]`)
                oldSlide = this.sliderElement.querySelector(`.slider-slide[data-number="${this.activeSlide}"]`);
                this.activeSlide = slideForward();                

            } else if (direction === 'previous') {
                nextSlide = this.sliderElement.querySelector(`.slider-slide[data-number="${getNextSlideNumber(direction)}"]`)
                oldSlide = this.sliderElement.querySelector(`.slider-slide[data-number="${this.activeSlide}"]`);
                this.activeSlide = slidePrevious();
                
            } else {
                console.log('Error: unrecognized slide direction. Use forward or previous.');
            }

            function slideForward () {
                // jQuery animation
                slideWidth = $(oldSlide).width();
                $(oldSlide).animate({
                    right: - slideWidth,
                    opacity: .5
                    }, 600, function() {
                        nextSlide.classList.remove('hide-slide');
                        oldSlide.classList.add('hide-slide'); 
                        $(oldSlide).css('right', '');
                        $(oldSlide).css('opacity', '1');
                    });              
                return getNextSlideNumber(direction);
            }

            function slidePrevious () {
                // jQuery animation
                slideWidth = $(oldSlide).width();
                $(oldSlide).animate({
                    right: + slideWidth,
                    opacity: .5
                    }, 600, function() {
                        nextSlide.classList.remove('hide-slide');
                        oldSlide.classList.add('hide-slide'); 
                        $(oldSlide).css('right', '');
                        $(oldSlide).css('opacity', '1');
                    });
                return getNextSlideNumber(direction);
            }

            function getNextSlideNumber(direction) {
                if (direction === 'forward') {
                    if (activeSlide == numOfSlides) { // If at the last slide, go to the first slide
                        return 1; 
                    } else {    // If not at the last slide, go to the next slide like normal
                        return activeSlide + 1;
                    }
                } 
                if (direction === 'previous') {
                    if (activeSlide == 1) {    // If at the first slide, go to the last slide
                        return numOfSlides;
                    } else {                        // If not at the first slide, go to the previous slide like normal
                        return activeSlide -1;
                    }
                } 
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