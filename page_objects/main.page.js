export class Page {

    get products() { return this._menuItem(1); }
    get partners() { return this._menuItem(2); }
    get about() { return this._menuItem(3); }
    get resources() { return this._menuItem(4); }
    get requestAQuote() { return this._menuItem(5); }

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

    /**
     * Function to open the main pages (Products, partners, about, resources, etc)
     * using the url.
     *
     * Note: Other pages may be used with this function, but the url must be correct.
     *
     * @param {string} page that is intended to be opened.
     */
    open(page) {
        page = page === 'main' ? '/' : page;
        browser.url(page);
    }
}
