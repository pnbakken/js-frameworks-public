import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../context/auth-context";
import LogoutButton from "../../../buttons/logout-button";
import styles from "./navbar-user.module.scss";

function NavbarUser() {
  const [auth, setAuth] = useContext(AuthContext);

  const [display, setDisplay] = useState(null);

  useEffect(() => {
    if (auth) {
      setDisplay(<div className="user-name">Hello {auth.user_nicename}</div>);
    } else {
      setDisplay(null);
    }
  }, [auth]);

  return (
    <div
      id={styles.navbarUser}
      className="flex-row align-center justify-between ms-auto"
    >
      {display}
      <LogoutButton />
    </div>
  );
}

export default NavbarUser;
