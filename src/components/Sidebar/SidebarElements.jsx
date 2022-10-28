import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkScroll} from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #0D0D0D;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: .3s ease-in-out;
  z-index: 999;
  opacity: ${({isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon  = styled(FaTimes)`
   color: #FFF;
`

export const Icon = styled.div`
   position: absolute;
   top: 1.2rem;
   right: 1.5rem;
   background: transparent;
   font-size: 2rem;
   outline: none;
   cursor: pointer;
`

export const SidebarWrapper = styled.div`
   color: #fff;
`
export const SidebarMenu = styled.ul`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(6, 80px);
   text-align: center;

   @media screen and (max-width: 480px) {
      grid-template-rows: repeat(6, 60px);
   }
`
export const SidebarLink = styled(LinkScroll)`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   text-decoration: none;
   list-style: none;
   transition: .2s ease-in-out;
   color: #fff;
   cursor: pointer;

   &:hover {
      color: #01bf71;
      transition: .2s ease-in-out;
   }
`
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
export const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: #01BF71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all .2s ease-in-out;
  text-decoration: none;

  &:hover {
     transition: all .2s ease-in-out;
     background: #FFF;
     color: #010606;
  }
`