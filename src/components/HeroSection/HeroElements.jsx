
import styled from 'styled-components';
import { Link  as LinkRouter} from 'react-router-dom'
import { Link as LinkScroll} from 'react-scroll'

export const HeroContainer = styled.div` 
   background: #0C0C0C;
   display: flex;
   justify-content: center;
   align-items : center;
   padding: 0 30px;
   height: 800px;
   position: relative;
   z-index: 1;
/* Add :before styles */
`
export const HeroBg = styled.div` 
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: hidden;
`
export const VideoBg = styled.video`
   -o-object-fit: cover;
   object-fit: cover;
   background: #232A34;
   width: 100%;
   height: 100%;
`