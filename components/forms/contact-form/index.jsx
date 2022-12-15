import { Button, Container, Form } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import FormError from "../form-utils/form-error";
import Message from "../../global/message";

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required("Please enter your first name")
    .min(3, "First name must be at least 3 characters"),
  lastname: yup
    .string()
    .required("Pleaser enter your last name")
    .min(4, "Last name must be at least 4 characters"),
  email: yup
    .string()
    .required("Please enter your email adress")
    .email("Please enter a valid email"),
  subject: yup.string().required("Please pick a message subject"),
  message: yup
    .string()
    .required("Please enter a message")
    .min(10, "Message must be at least 10 characters"),
});

function ContactForm() {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  function onSubmit(data) {
    setSuccess(true);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <Container expand="lg" className="flex-column align-center">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={disabled} className="">
          <div className="flex-row collapse-tablet gap-sm">
            <Form.Group>
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                id="firstname"
                {...register("firstname")}
                className="mb-2"
              />
              {errors.firstname && (
                <FormError>{errors.firstname.message}</FormError>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                id="lastname"
                {...register("lastname")}
                className="mb-2"
              />
              {errors.lastname && (
                <FormError>{errors.lastname.message}</FormError>
              )}
            </Form.Group>
          </div>
          <div className="flex-column">
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                {...register("email")}
                className="mb-2"
              />
              {errors.email && <FormError>{errors.email.message}</FormError>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Choose subject</Form.Label>
              <Form.Select
                name="subject"
                {...register("subject")}
                className="mb-2"
                placeholder="Pick a subject"
              >
                <option></option>
                <option value="I have a problem">I have a problem</option>
                <option value="Any other subject">Any other subject</option>
              </Form.Select>
              {errors.subject && (
                <FormError>{errors.subject.message}</FormError>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                placeholder="Your message"
                {...register("message")}
                className="mb-2"
                style={{ height: "150px" }}
              />
              {errors.message && (
                <FormError>{errors.message.message}</FormError>
              )}
            </Form.Group>
            <Button type="submit" variant="primary">
              Send
            </Button>
          </div>
        </fieldset>
        {success && <Message type="success">Contact form validated!</Message>}
      </Form>
    </Container>
  );
}

export default ContactForm;
