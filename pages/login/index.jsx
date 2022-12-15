import { useContext, useEffect, useState } from "react";
import LogoutButton from "../../components/buttons/logout-button";
import LoginForm from "../../components/forms/login-form";
import Heading from "../../components/global/typography/heading";
import GeneralLayout from "../../components/layout/general-layout";
import AuthContext from "../../context/auth-context";

function Login() {
  const [auth, setAuth] = useContext(AuthContext);
  const [loginDisplay, setLoginDisplay] = useState(<LoginForm />);

  useEffect(() => {
    if (auth) {
      setLoginDisplay(<LogoutButton />);
    } else {
      setLoginDisplay(
        <>
          <Heading>Log In</Heading>
          <LoginForm />
        </>
      );
    }
  }, [auth]);

  return <GeneralLayout title="Log In">{loginDisplay}</GeneralLayout>;
}

export default Login;
