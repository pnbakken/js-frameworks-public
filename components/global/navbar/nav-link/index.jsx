import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

function NavLink({ href, exact = false, children }) {
  const { pathname } = useRouter();
  const isActive = () => {
    return exact ? pathname === href : pathname.startsWith(href);
  };
  const active = isActive() ? "active" : "";

  return (
    <Link href={href}>
      <a className={`nav-link ${active}`}>{children}</a>
    </Link>
  );
}

export default NavLink;

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
