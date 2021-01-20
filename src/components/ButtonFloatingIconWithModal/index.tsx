import React, { useLayoutEffect, useState } from 'react';
import { Container, ButtonContent, PrimaryListContent} from './styles';
import { AiOutlineFileUnknown, AiOutlinePlus, AiOutlineFileMarkdown } from "react-icons/ai";
import Modal from "../Modal"



interface ButtonFloatingProps {
  onClick?: () => void;
  content?: string;
}

const ButtonFloatingIconModal = ({
  content,
  onClick,
  ...rest
}: ButtonFloatingProps) => {

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openModal = () => {
    setShowDeleteModal(true);
  };

  const closeModal = () => {
    setShowDeleteModal(false);
  };

  const [showList, setShowList] = useState<boolean>(false)

  const handleClick = () => {
    setShowList(!showList)
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
              <li><button onClick={openModal} className="tooltip">
              <span className="tooltiptext">Manuais</span>
                <AiOutlineFileMarkdown size={20} />
              </button></li>
              <li><button onClick={openModal} className="tooltip">
              <span className="tooltiptext">FAQ</span>
                <AiOutlineFileUnknown size={20} />
              </button></li>
            </ul>
          </PrimaryListContent>
          : ""
        }

        <Modal
          show={showDeleteModal}
          titulo={'Título'}
          onCancel={() => closeModal()}
          mensagem={'Conteudo'}
        />

      </Container>
    </div>

  );
};

export default ButtonFloatingIconModal;
