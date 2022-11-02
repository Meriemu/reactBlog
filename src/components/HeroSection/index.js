import React, { useState, useContext } from "react";
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import { 
HeroContainer,
HeroBg,
VideoBg,
HeroContent,
HeroH1,
HeroP,
HeroBtnWrapper,
ArrowForward,
ArrowRight
} from "./HeroElements";

import { UserContext } from '../../context/userContext';

const HeroSection = () => {
	const { currentUser } = useContext(UserContext);

	console.log(currentUser)
	const [hover, setHover] = useState(false);
	const handleHover = () => {
		setHover(!hover);
	}
  return (
	<HeroContainer id="home">
		<HeroBg>
			<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
		</HeroBg>
		<HeroContent>
			{currentUser ? <HeroH1> Ohayo <span className="red-text">{currentUser.email}</span>  </HeroH1> : <HeroH1> Welcome to my fantastic world ! </HeroH1>}
			<HeroP>
				Sign up for a new account today and receive 0$ :D
			</HeroP>
			<HeroBtnWrapper>
				<Button to="signup" 
					onMouseEnter={handleHover} 
					onMouseLeave={handleHover}
					primary='true' 
					darkcolorbtn="true"					
					smooth={true}
					duration={500}
					spy={true}
					exact='true'
					offset={-80}
				>
					 Get started { hover ? <ArrowForward /> : <ArrowRight /> }
				</Button>
			</HeroBtnWrapper>
		</HeroContent>
	</HeroContainer>
  );
};

export default HeroSection;
