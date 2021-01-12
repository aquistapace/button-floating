import { shade } from 'polished';
import styled from 'styled-components';

const backgroundColor = "#fff";
const primaryColor = "#166649";


export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  transition: all 0.5s 0.5s ease-in-out;

`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background:${backgroundColor};
  margin: 50px auto;
  max-width: 360px;
  height: 40%;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  transition: all 0.5s 0.5s ease-in-out;
`;

export const Header = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: baseline;
  padding: 0 15px 15px 15px;
  color: ${primaryColor};
  h1 {
    font-size: 1em;
    font-weight: bold;
    color: #004b35;
  }
  button {
    border:none;
    background: ${backgroundColor};
    color: #ccc;
  }

  button:hover {
    color: #d9d9d9;
  }
`;
export const ButtonClose = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;

  button {
    background:${backgroundColor};
    color: ${props => props.theme.lightGrey};
  }

  button:hover {
    color: ${props => props.theme.textColor};
  }
`;
export const Main = styled.div`
  color: ${props => props.theme.textColor};
  box-sizing:border-box;
  width:100%;
  font-size: 1.25em;
  ul{
    list-style: none;
    margin:0;
    padding:0;
    
}
    li{
        padding:0px 10px;
        
    }
    li:hover{
        background-color:#d9d9d9;
    }
    
    
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  button {
    margin: 10px;
  }

  .confirm{
    background:  ${primaryColor};
  }
  .confirm:hover{
    background:${shade(0.2, '#004431')};
  }

  .cancel {
    background:${backgroundColor};
    color: ${primaryColor};
    border:1px solid  ${primaryColor};
  }
  .cancel:hover {
      color: ${primaryColor};
      opacity: 0.5;
`;
