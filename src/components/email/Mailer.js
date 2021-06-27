import React, { useState } from "react";
import Navbar from "../Navbar";
import emailjs from "emailjs-com";
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #677381, #82a0aa);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;
const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

const StyledButton = styled.button`
  display: block;
  background-color: #677381;
  color: #fff;
  font-size: 0.9rem;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const initialState = {
  name: "",
  company_name: "",
  email: "",
  message: "",
};

const Mailer = () => {
  // const classes = useStyles();
  const [state, setstate] = useState(initialState);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted!");
    // console.log(state);

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }
    setError("");
    emailjs
      .sendForm(
        "service_aljty7e",
        "template_2yg91es",
        e.target,
        "user_oPXRcA8MtynW5YbaDfPTn"
      )
      .then((res) => {
        console.log(res);
        setstate({
          name: '',
          company_name: '',
          email: '',
          message: '',
        });
        alert('Thank you for your message!');
      })
      .catch((err) => console.log(err));
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setstate((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <br />
      <Navbar />
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Contact form</h2>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="company_name">Company name</label>
          <StyledInput
            type="text"
            name="company_name"
            value={state.company_name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            // pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/"
            value={state.email}
            onChange={handleInput}
          />
          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            value={state.message}
            onChange={handleInput}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">Send message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default Mailer;
