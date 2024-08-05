import React from "react";
import Footer from '../Footer/Footer';
import {ContactSection, ContactTitle, Span, Form, FormInput, 
        InputText, InputMail, InputExp, TextArea ,InputSub} from "./Contactt.js"

const Contact = () =>  {
    return (
      <>
      <ContactSection>
        <div class="container">
          <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
          <Form action="">
            <FormInput>
              <InputText type="text" placeholder="Your Name"/>
              <InputMail type="email" placeholder="Your Email"/>
            </FormInput>
            <InputExp type="text" class="sub" placeholder="Your Subject"/>
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <InputSub type="submit" value="Send Message"/>
          </Form>
        </div>
      </ContactSection>
      <Footer />
      </>
    );
}
export default Contact;