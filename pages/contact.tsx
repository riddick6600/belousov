import React from "react";
import PageBanner from "@components/Common/PageBanner";
import ContactInfo from "@components/Contact/ContactInfo";
import ContactForm from "@components/Contact/ContactForm";

const Contact = () => {
  return (
    <>
      <PageBanner pageTitle="Контакты" />

      <ContactInfo />

      <ContactForm />
    </>
  );
};

export default Contact;
