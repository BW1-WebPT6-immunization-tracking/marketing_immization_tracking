/* Left to right slider component */

class Slider {
    constructor(items) {
        this.items = items;
        console.log('slider', this.items)
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
        console.log('hi');
    }
}

let items = document.querySelectorAll('.slider-slide');
console.log(items)
let slider = new Slider(items);




