import { When, Then } from "cucumber";
import { formComponent, heroContent } from '../page_objects';
import * as data from '../mock_data';

When(/^the user submits the form$/, () => {
    formComponent.fillForm(data.userInfo);
    formComponent.submit();
});

Then(/^a verification message is displayed$/, () => {
    browser.waitUntil(() => {
        return browser.getUrl().includes(data.submittedForm.url)
    }, 5000, "The reCAPTCHA was prompted, the form was not submitted");
    heroContent.title.waitForDisplayed();
    expect(heroContent.title.getText())
        .to.equal(data.submittedForm.heroContent.title);
});
