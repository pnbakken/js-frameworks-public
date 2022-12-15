import { useContext } from "react";
import { Button } from "react-bootstrap";
import AuthContext from "../../../context/auth-context";

function LogoutButton() {
  const [auth, setAuth] = useContext(AuthContext);

  function logOut() {
    setAuth(null);
  }
  return (
    <Button variant="danger" onClick={logOut}>
      Log Out
    </Button>
  );
}

export default LogoutButton;
