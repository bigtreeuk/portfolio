import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import Title from './Title';
import Animation2 from "./Animation2";

const ContactForm = (props) => {

const [ error, setError ] = useState("valid")
const [ email, setEmail ] = useState("");
const [ name, setName ] = useState("");
const [ message, setMessage ] = useState("");

const [ sent, setSent ] = useState(false);

const [ disabled, setDisabled ] = useState(false);

  const onEmailChange = (e) => {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(e.target.value)) {
      setError("valid");
    } else {
      setError("invalid");
    }
    setEmail({email: e.target.value})
  };
  const onNameChange = (e) => {
    setName({ name: e.target.value });
  };
  const onMessageChange = (e) => {
    setMessage({ message: e.target.value });
  };

  const handleSubmit = (event) => {
   if(error === "invalid" || email==="" || name=== "" || message === "")   {
     event.preventDefault();
   }
   
   else { 
     event.preventDefault();
     setSent(true);
     setDisabled(true);
     emailjs
      .sendForm(
        "gmail",
        "contact_form",
        event.target,
        "user_XalpLoKKYF5vdBn6u2uK3"
      )
      .then(
        (result) => {
          console.log(result.text);

        },
        (error) => {
          console.log(error.text);
        }
      ); 
   } 


  }

  return (
    <Container>
      <Row>
        <Col>
          <Form style={styles.container} onSubmit={handleSubmit}>
            <div style={styles.title}>
              <Title text={"Contact Me"} />
            </div>
            <FormGroup style={styles.formGroup}>
              <Label className="formText thumbPortSubHead" for="email">
                Your Email:
              </Label>
              <Input
                className="thumbPortSubHead inputFields"
                type="email"
                name="email"
                id="Email"
                onChange={onEmailChange}
                invalid={error === "invalid"}
                disabled={disabled}
              />
              <FormFeedback invalid>Please type a valid email.</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label className="formText thumbPortSubHead" for="name">
                Your Name:
              </Label>
              <Input
                className="thumbPortSubHead inputFields"
                type="name"
                name="name"
                id="Name"
                onChange={onNameChange}
                disabled={disabled}
              />
            </FormGroup>
            <FormGroup>
              <Label className="formText thumbPortSubHead" for="message">
                Your Message:
              </Label>
              <Input
                className="thumbPortSubHead inputFields"
                type="textarea"
                name="message"
                id="Message"
                onChange={onMessageChange}
                disabled={disabled}
              />
            </FormGroup>
            <Button
              className="contactButton thumbPortSubHead inputFields"
              style={styles.button}
              type="submit"
              disabled={disabled}
            >
              Submit
            </Button>
            {sent ? "Thank you!" : ""}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  container: {
    paddingTop: "10%",
    paddingLeft: "4%",
    paddingRight: "4%",
    paddingBottom: "7%",
  },
  formGroup: {
    paddingTop: "2%",
  },

  title: {},
  button: {
    width: "100%",

  }
};

export default ContactForm;
