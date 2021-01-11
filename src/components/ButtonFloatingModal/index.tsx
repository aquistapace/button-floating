import React, { useState } from 'react';
import { Container, ButtonContent} from './styles';
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

  return (

    <div>
      <Container>
        <ButtonContent onClick={openModal} type="button">
          {content}
        </ButtonContent>
        <Modal
          show={showDeleteModal}
          titulo={'Manuais e FAQ'}
          onCancel={() => closeModal()}
        />

      </Container>
    </div>

  );
};

export default ButtonFloatingModal;
