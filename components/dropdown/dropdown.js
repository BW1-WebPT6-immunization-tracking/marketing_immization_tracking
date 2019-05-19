/* Mobile dropdown menu */
$(document).ready( () => {
    class Dropdown {
        constructor(dropdownElement) {
            this.dropdownElement = dropdownElement;
            this.menuButton = this.dropdownElement.querySelector('.menu-icon');
            this.menu = this.dropdownElement.querySelector('.menu-hidden');            
            this.menuButton.addEventListener('click', () => {
                this.toggleMenu();
            });            
        }
        toggleMenu () {
            if (this.menuButton.classList.contains('fa-angle-up')) {
                $(this.menu).slideDown('fast', 'swing');
                this.menuButton.classList.replace('fa-angle-up', 'fa-angle-down');
            } else if (this.menuButton.classList.contains('fa-angle-down')) {
                $(this.menu).slideUp('fast', 'swing');
                this.menuButton.classList.replace('fa-angle-down', 'fa-angle-up');
            };
        }
    }
    const dropdowns = document.querySelectorAll('.menu-dropdown');
    dropdowns.forEach(dropdown => {new Dropdown(dropdown)});
});