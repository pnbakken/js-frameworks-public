import ContactForm from "../../components/forms/contact-form";
import Heading from "../../components/global/typography/heading";
import GeneralLayout from "../../components/layout/general-layout";

function Contact() {
  return (
    <GeneralLayout title="Contact">
      <Heading>Contact</Heading>
      <ContactForm />
    </GeneralLayout>
  );
}

export default Contact;
