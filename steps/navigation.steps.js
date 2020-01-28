import { Given, When} from "cucumber";
import navigationMenu from '../page_objects/navigation-menu.page';

Given(/^the POC user is on the "([^"]*)" page$/, (page) => {
    navigationMenu.open(page);
});

When(/^they go to the "([^"]*)" page from the "([^"]*)" tab$/, (page, tab) => {
    navigationMenu.goTo(page, tab);
});
