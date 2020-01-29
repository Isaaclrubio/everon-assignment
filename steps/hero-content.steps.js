import { When } from "cucumber";
import { heroContent } from '../page_objects';
import * as data from '../mock_data';

When(/^click on the "([^"]*)" button$/, (button) => {
    heroContent.clickOn(button);
    const pageData = button.toCamelCase();
    expect(heroContent.title.getText())
        .to.equal(data[pageData].heroContent.title, `The ${button} was not displayed`);
});
