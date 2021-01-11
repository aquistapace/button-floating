import React from 'react';
import { FiXCircle } from 'react-icons/fi';
import { Container, Content, Header, Main, Footer } from './styles';

interface ModalContainerProps {
  onConfirm?: () => void;
  onCancel?: () => void;
  titulo?: string;
  mensagem?: string;
  show: boolean;
}

const Modal: React.FC<ModalContainerProps> = ({
  show,
  titulo,
  mensagem,
  onConfirm,
  onCancel,
}) => {

  if (show) {
    return (
      <>
        <Container>
          <Content>
            <Header>
              <div>
                <h1>{titulo}</h1>
              </div>
              <div>
                <button onClick={(onCancel)} type="button">
                  <FiXCircle size={22} />
                </button>
              </div>
            </Header>
            <Main>
              <p>{mensagem}</p>
              <ul>
              <li>Conteúdo</li>
              <li>Conteúdo</li>
              <li>Conteúdo</li>
              <li>Conteúdo</li>
            </ul>
            </Main>
            <Footer>

            </Footer>
          </Content>
        </Container>
      </>
    );
  }
  return <></>;
};

export default Modal;
