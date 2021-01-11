import React, {useState} from 'react';
import { Container, ButtonContent, ListContent} from './styles';


interface ButtonFloatingProps {
  onClick?: () => void;
  content?: string;
}

const ButtonFloating=({
  content,
  onClick,
  ...rest
}: ButtonFloatingProps) => {

  const [showList,setShowList]=useState<boolean>(false)

 const handleClick =()=>{
   setShowList(!showList)
 }
  return(
  
    <div>
     <Container>
       <ButtonContent  isClicked={showList} onClick={handleClick} type="button">
        {content}
       </ButtonContent>
       {showList ?
        <ListContent >
        <ul>
          <li><a href="#">Manuais</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </ListContent>
      :""
      }
      
     </Container>
    </div>

  );
};

export default ButtonFloating;
