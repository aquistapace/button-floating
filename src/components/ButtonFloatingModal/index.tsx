import React, { useState } from 'react';
import { Container, ButtonContent, ListContent } from './styles';
import Modal from "../../components/Modal"



interface ButtonFloatingProps {
  onClick?: () => void;
  content?: string;
}

const ButtonFloatingModal = ({
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
          {content}
        </ButtonContent>
        {showList ?
          <ListContent >
            <ul>
              <li><button onClick={openModal}>Manuais</button></li>
              <li><button onClick={openModal}>Faq</button></li>
            </ul>
          </ListContent>
          : ""
        }
        <Modal
          show={showDeleteModal}
          titulo={'Título'}
          onCancel={() => closeModal()}
          mensagem={"Conteúdo"}
        />

      </Container>
    </div>

  );
};

export default ButtonFloatingModal;
