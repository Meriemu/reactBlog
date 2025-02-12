import React, { useRef, useState, useEffect, useContext } from "react";
import anime from "animejs/lib/anime.es.js";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormLinkForgot,
  FormLinkNoAccount,
} from "./SigninElements";

import { UserContext } from "../../context/userContext";

import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const btnRef = useRef(null);
  const inputs = useRef([]);

  const formRef = useRef();

  const [emailSize, setEmailSize] = useState(null);
  const [pwdSize, setPwdSize] = useState(null);
  const [btnText, setBtnText] = useState(false);

  
  const { signIn } = useContext(UserContext);
  const [validation, setValidation] = useState("");

  const navigate = useNavigate();

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const handleEmail = (e) => { 
    setEmailSize(inputs.current[0].value.length);
  }

  const handlePwd = () => {
    //  console.log("email : ",  inputs.current[0].value.length)
    setPwdSize(inputs.current[1].value.length)
    // console.log(pwdSize)
  }

  useEffect(() => {
    if (btnRef) {
      handleEmail();
      handlePwd();
      // console.log("size email: ", emailSize)
      // console.log("size pwd: ", pwdSize)
      ["mouseover"].forEach(function (e) {

        if ((emailSize || pwdSize) < 6) {
          const animateMove = (element, prop, pixels) =>
          anime({
            targets: element,
            [prop]: `${pixels}px`,
            easing: "easeOutCirc",
          });
    
          const getRandomNumber = (num) => {
            return Math.floor(Math.random() * (num + 1));
          };
          btnRef.current.addEventListener(e, function (event) {
            const top = getRandomNumber(
              this.parentElement.offsetHeight - this.offsetHeight - 1
            );
            const left = getRandomNumber(
              this.parentElement.offsetWidth - this.offsetWidth - 1
            );

            animateMove(this, "left", left).play();
            animateMove(this, "top", top).play();
          });
        }
        else if ((emailSize && pwdSize) > 6) {
          setBtnText(true)
          const animateMove = (element, prop, pixels) =>
          anime({
            targets: element,
            [prop]: `${pixels}px`,
            easing: "easeOutCirc",
          });
     
          btnRef.current.addEventListener(e, function (event) {
            const top = this.parentElement.offsetHeight  
            const left = this.parentElement.offsetWidth / 2 

            animateMove(this, "left", left).play();
            animateMove(this, "top", top).play();
          }); 
        }
      });
    }
  }, [inputs, emailSize, pwdSize]);

  
  const handleForm = async (e)=> {
    e.preventDefault();
    try {
       const cred = await signIn(
          inputs.current[0].value,
          inputs.current[1].value,
       )
       formRef.current.reset();
       setValidation("CNX DONE ! ");
       navigate("/");
      //  toggleModals("close");
    }
    catch (err) {
       // console.log(err)
       if(err.code === "auth/wrong-password") {
          setValidation("Wrong password")
       }
       if (err.code === "auth/user-not-found") {
          setValidation("Email does not exist")
       }
    }
 }

  return (
    <Container>
      <FormWrap>
        <Icon to="/"> MeryIcon</Icon>
        <FormContent>
          <Form action="#"  onSubmit={handleForm}  ref={formRef}>
            <FormH1> Sign in to your account </FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput onChange={handleEmail} ref={addInputs} type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput onChange={handlePwd} ref={addInputs} type="password" required />

            <FormButton
              id="btnEscape"
              type="submit"
              // ref={el => { console.log(el); btnRef.current = el; }}
              ref={btnRef}
              // onMouseEnter={ClickMeIfYouCan}
              style={{
                width: btnText && "100%"
              }}
            >
              {" "}
              { !btnText ? "essayes encore 🤣" : "Go !😉"}
            </FormButton>
            <FormLinkForgot href="#"> Forgot password ?</FormLinkForgot>
            <FormLinkNoAccount to="/signup"> Don't have an account ?  </FormLinkNoAccount>
            <p className="text-danger mt-1"> { validation }</p>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
