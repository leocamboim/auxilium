import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './styles';
import Auxilium from '../../assets/auxilium.svg';

import { Container } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo>
            <img src={Auxilium} />
      </Logo>
      <ul>
        <li>
          <Link to="/" className="LinkNav">
            Início
          </Link>
        </li>
        <li>
          <Link to="/quemsomos" className="LinkNav">
            Quem somos?
          </Link>
        </li>
        <li>
          <Link to="/segmentos" className="LinkNav">
            Segmentos
          </Link>
        </li>
        <li>
          <Link to="/criancas" className="LinkNav">
            Crianças
          </Link>
        </li>
        <li>
          <Link to="/desejos" className="LinkNav">
            Desejos
          </Link>
        </li>
        <li>
          <Link to="/cadastro" className="LinkNav">
            Cadastro
          </Link>
        </li>
        <li>
          <Link to="/login" className="LinkNav">

          <FontAwesomeIcon className="option-icon" icon={faUser}/>
         </Link>
        </li>
      </ul>    
    </Container>
  );
}

export default Navbar;