import { Given, When} from "cucumber";
import { heroContent, headerHeroContent, navigationMenu } from '../page_objects';
import * as data from '../mock_data';

Given(/^the POC user is on the "([^"]*)" page$/, (page) => {
    navigationMenu.open(page);
    if(page === 'main') {
        expect(headerHeroContent.title.getText())
            .to.equal(data[page].heroContent.title, `The ${page} was not displayed`);
    } else {
        expect(heroContent.title.getText())
            .to.equal(data[page].heroContent.title, `The ${page} was not displayed`);
    }
});

When(/^they go to the "([^"]*)" page from the "([^"]*)" tab$/, (page, tab) => {
    navigationMenu.goTo(page, tab);
    const pageData = page.toCamelCase();
    expect(heroContent.title.getText())
        .to.equal(data[pageData].heroContent.title, `The ${page} was not displayed`);
});
