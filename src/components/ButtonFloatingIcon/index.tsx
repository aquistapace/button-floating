import React, { useState } from 'react';
import { Container, ButtonContent, PrimaryListContent, SecondListContent } from './styles';
import { AiOutlineFileUnknown, AiOutlinePlus, AiOutlineFileMarkdown } from "react-icons/ai";


interface ButtonFloatingProps {
  onClick?: () => void;
  content?: string;
}

const ButtonFloatingIcon = ({
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

          <AiOutlinePlus size={20} />
        </ButtonContent>
        {showList ?
          <PrimaryListContent >
            <ul>
              <li><button onClick={handleFirstItem} className="tooltip">
              <span className="tooltiptext">Manuais</span>
                <AiOutlineFileMarkdown size={20} />
              </button></li>
              <li><button onClick={handleSecondItem} className="tooltip">
              <span className="tooltiptext">FAQ</span>
                <AiOutlineFileUnknown size={20} />
              </button></li>
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

export default ButtonFloatingIcon;
