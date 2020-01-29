import { When } from "cucumber";
import heroContent from '../page_objects/hero-content.page';

When(/^click the "([^"]*)" button$/, (button) => {
    heroContent.clickOn(button);
});
