import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    background:red;
`;

interface ButtonContentProps {
    isClicked?: boolean
}
const buttonHeight = 50;
const buttonWidth = 150;
export const ButtonContent = styled.button`
    position:fixed;
    bottom:50px;
    right:50px;
    border:none;
    border-radius:${(props:ButtonContentProps) => props.isClicked ? "0 0 4px 4px" :  "4px"};
    padding:10px;
    background:#166649;
    color:#ffffff;
    font-size:16px;
    text-align:center;
    width:${buttonWidth}px;
    height: ${buttonHeight}px;
	box-shadow: 2px 2px 3px #999;
`;

const listPosition = buttonHeight + 50;
export const ListContent = styled.div`
    background-color:#f2f2f2;
    position:fixed;
    bottom:${listPosition}px;
    width:${buttonWidth}px;
    right:50px;
    border:none;
    border-radius:4px 4px 0 0;
    box-shadow: 2px 2px 3px #999;
    
   

`;
