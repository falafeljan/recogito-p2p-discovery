import styled from 'styled-components'
import {headerGray} from '../layout/colors'

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`

export const Modal = styled.div`
  display: flex;
  flex-flow: column;

  max-width: 700px;
  min-width: 500px;
  overflow: hidden;

  border-radius: 15px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`

export const Header = styled.header`
  display: flex;
  flex-flow: row;

  box-sizing: border-box;
  border-bottom: 2px solid ${headerGray};
  padding: 20px 25px;

  background: rgba(230, 230, 230);
  font: 20px/100% 'Inter', sans-serif;
  font-weight: 500;
`

export const Main = styled.main`
  min-height: 250px;
  font: 20px/100% 'Inter', sans-serif;
  font-weight: 400;
`

export const Footer = styled(Header)`
  border-top: 0 none;
  border-bottom: 2px solid rgba(245, 245, 245);
`
