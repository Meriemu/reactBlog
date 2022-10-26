import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #0D0D0D;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all .3s ease-in-out;
  /* opacity: ${({isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({isOpen }) => (isOpen ? '0' : '-100%')}; */
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