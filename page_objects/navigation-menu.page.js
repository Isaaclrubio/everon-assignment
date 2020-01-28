import { Page } from './main.page';

class NavigationMenu extends Page {

    // About Items
    get blog() { return this.about.$('li:nth-child(2)'); }
    get press() { return this.about.$('li:nth-child(3)'); }
    get events() { return this.about.$('li:nth-child(4)'); }
    get contactUs() { return this.about.$('li:nth-child(5)'); }

    /**
     * The function displays the dropdown of the nav menu items
     * and then clicks on one of the list items from the dropdown
     * in order to navigate to that page.
     *
     * @param {string} page it's the list item from the dropdown option
     * @param {string} tab it's the item from the nav menu
     */
    goTo(page, tab) {
        console.log(page, tab);
        page = page.toCamelCase();
        this[tab].moveTo();
        this[page].waitForClickable();
        this[page].click();
    }

}

export default new NavigationMenu();
