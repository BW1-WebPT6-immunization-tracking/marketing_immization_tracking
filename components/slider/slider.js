/* Left to right slider component */

class Slider {
    constructor(items) {
        this.items = items;
        this.forwardArrow;
        this.previousArrow;
        this.data;

        // Array.from(this.items).forEach(function(item) {
        //     console.log('yo')
        // });

        this.items.forEach(item => {
            new SliderItem(item);
        });
        
    }

    slide (direction) {

    }
}

class SliderItem {
    constructor(item) {
        this.item = item;
    }
}

function initializeSliders(){
    let items = document.querySelectorAll('.slider-slide');
    let slider = new Slider(items);
}



