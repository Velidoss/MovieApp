import React from "react";
import {Form} from "react-final-form";
import ContactForm from "./ContactForm";
import {FORM_ERROR} from "final-form";

class ContactFormContainer extends React.Component {

    onSubmit(values){
        if(values.message.length <10){
            return {[FORM_ERROR]: "Your message must be at least 10 symbols."}
        }
        alert(JSON.stringify(values, 0 , 2));

    }

    render() {
        return (
            <Form
                onSubmit={this.onSubmit}
                validate={values=>{
                    const errors={};
                    if(!values.name){
                        errors.name = 'Enter your name'
                    }
                    if(!values.email){
                        errors.email = 'Enter your email'
                    }
                    if(!values.message){
                        errors.message = 'Enter your message'
                    }
                    return errors;
                }}
                component={ContactForm} />
        );
    }
}

export default ContactFormContainer;