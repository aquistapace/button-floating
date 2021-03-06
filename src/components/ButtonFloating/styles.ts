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
export const PrimaryListContent = styled.div`
    background-color:#f2f2f2;
    position:fixed;
    bottom:${listPosition}px;
    width:${buttonWidth}px;
    right:50px;
    border:none;
    border-radius:4px 4px 0 0;
    box-shadow: 2px 2px 3px #999;

    
    ul{
        list-style: none;
        margin:0;
        padding:0;
        
    }
        li{
            padding:0;
            
            
        }
        li:hover{
            background-color:#d9d9d9;
        }
        
        button{
            padding:10px;
            width:100%;
            border:none;
            color:#000;
            
        }
        button:hover{
            background-color:#d9d9d9;
        }
        

`;
const secondListPosition = buttonWidth + 50;
export const SecondListContent = styled.div`
    background-color:#f2f2f2;
    position:fixed;
    bottom:${listPosition}px;
    width:${buttonWidth}px;
    right:${secondListPosition}px;
    border:none;
    border-radius:4px 4px 0 0;
    box-shadow: 2px 2px 3px #999;
    
    ul{
        list-style: none;
        margin:0;
        padding:0;
        
    }
        li{
            padding:0;
            
        }
        li:hover{
            background-color:#d9d9d9;
        }
        
        button{
            padding:10px;
            width:100%;
            border:none;
            color:#000;
        }
        button:hover{
            background-color:#d9d9d9;
        }
        button:active{
            border:none;
        }
        

`;

