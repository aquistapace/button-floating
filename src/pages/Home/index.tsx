import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  ButtonContainer,
} from './styles';


const home: React.FC = () => {
  return (
    <>
      <Container>
        <ButtonContainer>
          <Link to="/prototipo1">
            Prototipo 1
          </Link>
        </ButtonContainer>

        <ButtonContainer>
          <Link to="/prototipo2">
            Prototipo 2
          </Link>
        </ButtonContainer>

        <ButtonContainer>
          <Link to="/prototipo3">
            Prototipo 3
          </Link>
        </ButtonContainer>
      </Container>

    </>
  );
};

export default home;
