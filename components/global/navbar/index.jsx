import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "./nav-link";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/auth-context";
import NavbarUser from "./navbar-user";

function GlobalNavbar() {
  const [auth, setAuth] = useContext(AuthContext);
  const [authLink, setAuthLink] = useState(null);
  const [navUser, setNavUser] = useState(null);

  useEffect(() => {
    if (auth) {
      setAuthLink(<NavLink href="/admin">Admin</NavLink>);
      setNavUser(<NavbarUser />);
    } else {
      setAuthLink(<NavLink href="/login">Log In</NavLink>);
      setNavUser(null);
    }
  }, [auth]);

  return (
    <Navbar expand="lg" className="top-level-indent">
      <Link href="/">
        <a className="navbar-brand">Things that are Good</a>
      </Link>
      <Navbar.Toggle aria-controls="nav-menu" />
      <Navbar.Collapse id="nav-menu">
        <Nav>
          <NavLink href="/" exact={true}>
            Home
          </NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/favourites">Favourites</NavLink>
          {authLink}
        </Nav>

        {navUser}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default GlobalNavbar;
