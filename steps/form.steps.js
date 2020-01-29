import { When, Then } from "cucumber";
import { formComponent } from '../page_objects';
import * as data from '../mock_data';

When(/^the user submits the form$/, () => {
    formComponent.fillForm(data.userInfo);
    formComponent.submit();
});

Then(/^a verification message is displayed$/, () => {

});
