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
} from "../Signin/SigninElements";

import { UserContext } from "../../context/userContext";

import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const btnRef = useRef(null);
  const inputs = useRef([]);

  const formRef = useRef();

  const [emailSize, setEmailSize] = useState(null);
  const [pwdSize, setPwdSize] = useState(null);

  
  const { signUp } = useContext(UserContext);
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
      const animateMove = (element, prop, pixels) =>
      anime({
        targets: element,
        [prop]: `${pixels}px`,
        easing: "easeOutCirc",
      });

      const getRandomNumber = (num) => {
        return Math.floor(Math.random() * (num + 1));
      };
        ["mouseover"].forEach(function (e) {

          if ((emailSize || pwdSize) < 6) {
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
          else if ((emailSize || pwdSize) > 6) {
            // console.log("dddddd", btnRef);
            // animateMove(this, "left", 0).pause();
            // animateMove(this, "top", 0).pause();

            // console.log("type :", e);
            if (e === 'mouseover') {
              animateMove(this, "left", 0).pause();
              animateMove(this, "top", 0).pause();
              return ;
            };
          }
        });
    }
  }, [inputs, emailSize, pwdSize]);

  

const handleForm = async (e)=> {
    e.preventDefault();
    if((inputs.current[1].value.length || inputs.current[2].value.length )< 6) {
       setValidation("6 chars min");
       return
    }
    else if(inputs.current[1].value !== inputs.current[2].value) {
       setValidation("pwd do not match");
       return
    }

    //21
    try {
       const cred = await signUp(
          inputs.current[0].value,
          inputs.current[1].value,
       )
       formRef.current.reset();
       setValidation("DONE");
       navigate("/");
    }
    catch (err) {
       console.log(err)
       if(err.code === "auth/invalid-email") {
          setValidation("Email format invalid")
       }
       if (err.code === "auth/email-already-in-use") {
          setValidation("Email already used")
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

            <FormLabel htmlFor="for">Repeat Password</FormLabel>
            <FormInput onChange={handlePwd} ref={addInputs} type="password" required />

            <FormButton
              id="btnEscape"
              type="submit"
              // ref={el => { console.log(el); btnRef.current = el; }}
              ref={btnRef}
              // onMouseEnter={ClickMeIfYouCan}
            >
              {" "}
              Continue
            </FormButton>
            <p className="text-danger mt-1"> { validation }</p>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignUp;
