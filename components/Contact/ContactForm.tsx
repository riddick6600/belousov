import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import { IMaskInput } from "react-imask";

const alertContent = () => {
  MySwal.fire({
    title: "Мы скоро перезвоним!",
    // text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  number: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (value) => {
    setContact((prevState) => ({ ...prevState, number: value }));
  };

  const onSubmit = async (e) => {
    try {
      const url = `https://app2.za-it.ru/api/contact`;
      const { number } = contact;
      const payload = { number };
      await axios.post(url, payload);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Мы вам перезвоним</h2>
          <div className="bar"></div>
          <p>Просто оставьте номер</p>
        </div>

        <div className="row align-items-center">
          {/* <div className="col-lg-6 col-md-12">
            <img src="/images/contact-img.png" alt="image" />
          </div> */}

          <div className="col-lg-3"></div>

          <div className="col-lg-6">
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <IMaskInput
                      mask="+{7}(000)000-00-00"
                      unmask={true}
                      name="number"
                      placeholder="Ваш телефон"
                      className="form-control"
                      value={contact.number}
                      onAccept={handleChange}
                      required
                    />

                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      {errors.number && "Number is required."}
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-sm-12 text-center">
                  <button type="submit" className="btn btn-primary">
                    Перезвоните мне
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
