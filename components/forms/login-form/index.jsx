import { Button, Col, Form } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import FormError from "../form-utils/form-error";
import createAxios from "../../../functions/create-axios";
import { LOGIN_URL } from "../../../constants/login-api";
import { useContext, useState } from "react";
import AuthContext from "../../../context/auth-context";
import { useRouter } from "next/router";
import Message from "../../global/message";

const schema = yup.object().shape({
  username: yup.string().required("Please enter a username"),
  password: yup.string().required("Please enter a password"),
});

function LoginForm() {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setDisabled(true);

    try {
      const client = createAxios();
      const response = await client.post(LOGIN_URL, data);

      if (response.status === 200) {
        setAuth(response.data);
        router.push("/admin");
      }
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setDisabled(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={disabled} className="flex-column">
        <Col>
          <Form.Group className="mb-5">
            <Form.Label className="mb-3">Username</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              name="username"
              {...register("username")}
            />
            {errors.username && (
              <FormError>{errors.username.message}</FormError>
            )}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-5">
            <Form.Label className="mb-3">Password</Form.Label>
            <Form.Control
              className="mb-5"
              type="password"
              name="password"
              {...register("password")}
            />
            {errors.password && (
              <FormError>{errors.password.message}</FormError>
            )}
          </Form.Group>
        </Col>
        <Button type="submit" variant="primary">
          Log In
        </Button>
      </fieldset>
      {error && <Message type="error">{error.response.data.code}</Message>}
    </Form>
  );
}

export default LoginForm;
