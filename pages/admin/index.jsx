import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import GeneralLayout from "../../components/layout/general-layout";
import AuthContext from "../../context/auth-context";
import Heading from "../../components/global/typography/heading";

function Admin() {
  const [auth, setAuth] = useContext(AuthContext);
  const router = useRouter();
  const [adminPage, setAdminPage] = useState("");

  useEffect(() => {
    if (!auth) {
      router.push("/");
      setAdminPage("");
    } else {
      setAdminPage("Admin Page");
    }
  }, [auth]);

  return (
    <>
      <GeneralLayout title="Admin">
        <Heading>Admin</Heading>
        {adminPage}
      </GeneralLayout>
    </>
  );
}

export default Admin;
