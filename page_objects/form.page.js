class FormComponent {

    get firstName() { return $('input[name="firstname"]'); }
    get lastName() { return $('input[name="lastname"]'); }
    get email() { return $('input[name="email"]'); }
    get postalCode() { return $('input[name="zip"]'); }
    get city() { return $('input[name="city"]'); }
    get country() { return $('select[name="country"]'); }
    get message() { return $('textarea[name="message"]'); }

    fillForm(info) {
        this.firstName.setValue(info.firstName);
        this.lastName.setValue(info.lastName);
        this.email.setValue(info.email);
        this.postalCode.setValue(info.postalCode);
        this.city.setValue(info.city);
        this.country.selectByAttribute('value', info.country);
        this.message.setValue(info.message);
        browser.pause(10000)
    }

    submit() {

    }

}

export default new FormComponent();
