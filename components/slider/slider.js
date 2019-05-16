/* Left to right slider component */

class Slider {
    constructor(items) {
        this.items = items;
        this.forwardArrow;
        this.previousArrow;
        this.data;

        this.items.forEach(item => {
            return new SliderItem(item);
        });
        console.log('slider created', items)
    }

    slide (direction) {

    }
}

class SliderItem {
    constructor(item) {
        this.item = item;
        console.log('slider item created');
    }
}


const items = document.querySelectorAll('.slider-slide');
const slider = new Slider(items);



