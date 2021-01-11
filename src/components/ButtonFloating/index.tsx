import React, { useState } from 'react';
import { Container, ButtonContent, PrimaryListContent, SecondListContent } from './styles';


interface ButtonFloatingProps {
  onClick?: () => void;
  content?: string;
}

const ButtonFloating = ({
  content,
  onClick,
  ...rest
}: ButtonFloatingProps) => {

  const [showList, setShowList] = useState<boolean>(false)

  const handleClick = () => {
    setShowList(!showList)

    if (showList) {
      setShowSecondItem(false)
      setShowFirstItem(false)
    }
  }


  const [showFirstItem, setShowFirstItem] = useState<boolean>(false)

  const handleFirstItem = () => {
    setShowFirstItem(!showFirstItem)
    if (!showFirstItem && showSecondItem) {
      setShowSecondItem(false)
    }
  }

  const [showSecondItem, setShowSecondItem] = useState<boolean>(false)

  const handleSecondItem = () => {
    setShowSecondItem(!showSecondItem)
    if (!showSecondItem && showFirstItem) {
      setShowFirstItem(false)
    }
  }

  return (

    <div>
      <Container>
        <ButtonContent isClicked={showList} onClick={handleClick} type="button">
          {content}
        </ButtonContent>
        {showList ?
          <PrimaryListContent >
            <ul>
              <li><button onClick={handleFirstItem} >Manuais</button></li>
              <li><button onClick={handleSecondItem} >Faq</button></li>
            </ul>
          </PrimaryListContent>
          : ""
        }


        {showFirstItem ?
          <SecondListContent >
            <ul>
              <li><button >Manuais</button></li>
              <li><button >Manuais</button></li>
              <li><button >Manuais</button></li>
              <li><button >Manuais</button></li>
            </ul>
          </SecondListContent>
          : ""
        }
        {showSecondItem ?
          <SecondListContent >
            <ul>
              <li><button >Faq</button></li>
              <li><button >Faq</button></li>
              <li><button >Faq</button></li>
              <li><button >Faq</button></li>
            </ul>
          </SecondListContent>
          : ""
        }




      </Container>
    </div >

  );
};

export default ButtonFloating;
