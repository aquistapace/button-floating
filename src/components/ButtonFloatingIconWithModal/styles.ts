import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    position: relative;
    background:red;
`;

interface ButtonContentProps {
    isClicked?: boolean
}
interface ButtonContentProps {
    isClicked?: boolean
}
const buttonHeight = 50;
const buttonWidth = 50;
export const ButtonContent = styled.button`
    position:fixed;
    bottom:50px;
    right:50px;
    border:none;
    border-radius:${(props:ButtonContentProps) => props.isClicked ? "4px" :  "4px"};
    background:#166649;
    color:#ffffff;
    font-size:16px;
    text-align:center;
    width:${buttonWidth}px;
    height: ${buttonHeight}px;
    box-shadow: 4px 4px 5px #999;
`;

const listPosition = buttonHeight + 50;

export const PrimaryListContent = styled.div`
    position:fixed;
    bottom:${listPosition}px;
    width:${buttonWidth}px;
    right:50px;
    border:none;
    transition: 0.3s ease-in-out;
    
    ul{
        list-style: none;
        margin:0;
        padding:0;
        width:100%;
        
    }
    
    li{
        padding:0;
        margin: 10px 0;
    }
    button{
        width: 100%;
        height: 50px;
        border: 1px solid transparent;
        border-radius:4px;
        color:#fff;
        box-shadow: 2px 2px 3px #999;
        background-color:#166649;
        
    }
    button:hover{
        background:${shade(0.2, '#166649')}
    }

    button .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black;
      }
      
      .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        
        /* Position the tooltip */
        position: absolute;
        z-index: 1;
        right: 105%;
      }

      .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 100%;
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent transparent black;
      }
      
      .tooltip:hover .tooltiptext {
        visibility: visible;
      }
`;
