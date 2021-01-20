import React, { useRef } from 'react';
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
  return (
    <>
      {show ? (
        <Container onClick={onCancel}>
          <Content>
            <Header>
              <div>
                <button onClick={onCancel} type="button">
                  <FiXCircle size={22} />
                </button>
              </div>
            </Header>
            <Main>
              <div>
                <h1>{titulo ? titulo : 'Tem certeza disso?'}</h1>
              </div>
              <div>
                {/* <p>
                  {mensagem
                    ? mensagem
                    : 'Após remover este item, não será possível utiliza-lo novamente.'}
                </p> */}
                <ul>
                  <li>{mensagem}</li>
                  <li>{mensagem}</li>
                  <li>{mensagem}</li>
                  <li>{mensagem}</li>
                </ul>
              </div>
            </Main>
            <Footer>

            </Footer>
          </Content>
        </Container>
      ) : null}
    </>
  );
};

export default Modal;
