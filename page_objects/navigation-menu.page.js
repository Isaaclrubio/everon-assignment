import { Page } from './main.page';

class NavigationMenu extends Page {

    get products() { return this._menuItem(1); }
    get partners() { return this._menuItem(2); }
    get about() { return this._menuItem(3); }
    get resources() { return this._menuItem(4); }
    get requestAQuote() { return this._menuItem(5); }

    /**
     * The function displays the dropdown of the nav menu items
     * and then clicks on one of the list items from the dropdown
     * in order to navigate to that page.
     *
     * @param {string} page it's the list item from the dropdown option
     * @param {string} tab it's the item from the nav menu
     */
    goTo(page, tab) {
        this[tab].moveTo();
        const item = this[tab].$$('li').find((item) => {
            return item.getText() === page;
        });
        item.waitForClickable();
        item.click();
    }

    /**
     * Returns the element in the nav menu that is indicated by an index,
     * the index 1 is the first element on the left, and it can be up to 5.
     *
     * Note: using `_` to idicate that is a private function.
     *
     * @param {int} index of the element in the list starting from 1 and limited to 5.
     */
    _menuItem(index) {
        return $(`.navigation-menu > li:nth-child(${index})`);
    }

}

export default new NavigationMenu();
