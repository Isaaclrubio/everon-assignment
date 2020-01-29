import { Page } from './main.page';

class HeroContent extends Page {

    get title() { return $$('.hero-content__title').find(title => title.isDisplayed()); }
    get buttons() { return $$(`.hero-content__buttons > a`); }

    /**
     * Method to click on a button that is within the HeroContent component
     *
     * @param {string} button Text display on the page
     */
    clickOn(button) {        
        const buttonElement = this.buttons.find((element) => {
            return element.isClickable() && element.getText() === button;
        });
        buttonElement.click();
    }

}

export default new HeroContent();
