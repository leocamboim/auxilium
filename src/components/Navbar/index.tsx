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
            Home
          </Link>
        </li>
        <li>
          <Link to="/quemsomos" className="LinkNav">
            Quem Somos
          </Link>
        </li>
        <li>
          <Link to="/explore" className="LinkNav">
            Explore 
          </Link>
        </li>
        <li>
          <Link to="/cadastro" className="LinkNav">
            Entrar <FontAwesomeIcon className="option-icon" icon={faUser}/>
         </Link>
        </li>
      </ul>    
    </Container>
  );
}

export default Navbar;