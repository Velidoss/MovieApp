import React from "react";
import {Field, Form} from "react-final-form";
import ContactForm from "./ContactForm";
import style from "./ContactForm.module.scss";

class ContactFormContainer extends React.Component {

    onSubmit(values){
        alert(JSON.stringify(values, 0 , 2));
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}  component={ContactForm} />
        );
    }
}

export default ContactFormContainer;