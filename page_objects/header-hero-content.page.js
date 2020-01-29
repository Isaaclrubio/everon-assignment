import { Page } from './main.page';

class HeaderHeroContent extends Page {

    get title() { return $$('.header-hero__title').find(title => title.isDisplayed()); }

}

export default new HeaderHeroContent();
