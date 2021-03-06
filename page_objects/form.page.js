class FormComponent {

    get firstName() { return $('input[name="firstname"]'); }
    get lastName() { return $('input[name="lastname"]'); }
    get email() { return $('input[name="email"]'); }
    get postalCode() { return $('input[name="zip"]'); }
    get city() { return $('input[name="city"]'); }
    get country() { return $('select[name="country"]'); }
    get message() { return $('textarea[name="message"]'); }
    get send() { return $('input[value="Send"]'); }

    fillForm(info) {
        this.firstName.setValue(info.firstName);
        this.lastName.setValue(info.lastName);
        this.email.setValue(info.email);
        this.postalCode.setValue(info.postalCode);
        this.city.setValue(info.city);
        this.country.selectByAttribute('value', info.country);
        this.message.setValue(info.message);
    }

    submit() {
        this.send.click();
    }

}

export default new FormComponent();
