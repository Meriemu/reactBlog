import React, { useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es.js"

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
} from "./SigninElements";

const SignIn = () => {
  const btnRef = useRef(null);

  useEffect(() => {
    // console.log("first useefect: ", btnRef);
    var el = document.getElementById("btnEscape");
    if (el) {
      // const el = document.getElementById("runaway-btn");

      const animateMove = (element, prop, pixels) =>
        anime({
          targets: element,
          [prop]: `${pixels}px`,
          easing: "easeOutCirc",
        });

      ["mouseover"].forEach(function (e) {
        el.addEventListener(e, function (event) {
          const top = getRandomNumber(this.parentElement.offsetHeight - this.offsetHeight -1);
          const left = getRandomNumber(this.parentElement.offsetWidth - this.offsetWidth -1);

          animateMove(this, "left", left).play();
          animateMove(this, "top", top).play();
        });
      });

      const getRandomNumber = (num) => {
        return Math.floor(Math.random() * (num + 1));
      };

      // el.addEventListener("mouseenter", run);
      // function run() {
      // 	//  var btn = document.getElementById("btnEscape");
      // 	// if (!el.style.left) {
      // 		// Default to 500 to start
      // 	// 	el.style.left = "500px";
      // 	// } else {
      // 	// 	var posLeft = parseInt(el.style.left); // parseInt ignores the px on the end
      // 	// 	if (posLeft >= 800) {
      // 	// 	el.style.left = "200px";
      // 	// 	} else if (posLeft > 450) {
      // 	// 	posLeft += 150;
      // 	// 	el.style.left = posLeft + 150 + "px";
      // 	// 	}

      // 	var nextX = Math.floor(Math.random() * (el.parentElement.clientWidth - el.offsetWidth - 1) + 1),
      // 	nextY = Math.floor(Math.random() * (el.parentElement.clientHeight  - el.offsetHeight - 1) + 1);
      // 	el.animate({ left: nextX + 'px', top: nextY + 'px' });

      // 	// console.log("first width: ", el.parentElement.clientWidth)
      // 	// console.log("first hei: ", el.parentElement.clientHeight)
      // 	// }
      // }
    } else {
      // el.addEventListener("mouseenter", console.log("first :: ", el));
    }
  }, []);

  return (
    <Container>
      <FormWrap>
        <Icon to="/"> MeryIcon</Icon>
        <FormContent>
          <Form action="#">
            <FormH1> Sign in to your account </FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />

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
            <FormLinkForgot href="#"> Forgot password ?</FormLinkForgot>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
