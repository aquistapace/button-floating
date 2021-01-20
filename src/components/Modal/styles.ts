import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

const modalAnim = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
`;

const modalEnter = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  animation: ${modalAnim} 0.3s ease-in-out;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  margin: auto;
  width: 450px;
  padding: 1.25rem;
  min-height: 280px;
  height: 30%;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  animation: ${modalEnter} 0.3s ease-in-out;
`;

export const Header = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-self: center;
  color: ${props => props.theme.primaryColor};

  button {
    background: #fff;
    border:none;
    color: #ccc;
  }

  button:hover {
    color: #000;
  }
`;
export const ButtonClose = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;

  button {
    background: #ccc;
    border:none;
    color: #ccc;
  }

  button:hover {
    border:none;
    color: #000;
  }
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  color: #000;
  font-size: 1.25em;
  margin: 0.9rem;
  h1 {
    font-size: 1.3em;
    font-weight: bold;
    color: #000;
    margin-bottom: 1.5rem;
    text-align: left;
  }
  ul{
    list-style-type:none;
    margin:0;
    padding:0;
  }
  li:hover{
    font-weight: bold;
    color: #ab934b;
  }

`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  button {
    margin: 0.6rem;
  }

  .confirm {
    background: ${props => props.theme.primaryColor};
  }

  .confirm:hover {
    background: ${shade(0.295, '#166649')};
  }

  .cancel {
    background: #fff;
    color: ${props => props.theme.primaryColor};
    border: 1px solid ${props => props.theme.primaryColor};
    transition: 0.3s ease-in-out;
  }

  .cancel:hover {
    color: ${props => props.theme.primaryColor};
    background: ${props => props.theme.onBackground};
  }
`;
