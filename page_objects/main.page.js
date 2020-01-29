export class Page {

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
