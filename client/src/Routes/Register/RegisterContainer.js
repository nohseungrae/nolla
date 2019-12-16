import React, { useState } from "react";
import RegisterPresenter from "./RegisterPresenter";

const RegisterContainer = props => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      //서버에서 보내주는 Error 표출(action을 취할 것)
    } else {
      //다 오케이 되면 등록!
    }
  };
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <RegisterPresenter
      {...formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
export default RegisterContainer;
