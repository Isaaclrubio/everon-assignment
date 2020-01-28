import { Given, When} from "cucumber";

Given(/^the POC user is on the "([^"]*)" page$/, (page) => {
    browser.url('/');
    browser.pause(5000)
});

When(/^the user navigates to the "([^"]*)" page$/, (page) => {
});
