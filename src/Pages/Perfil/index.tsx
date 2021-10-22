import { faAt, faKey, faMapMarked, faPlusCircle, faPowerOff, faSimCard, faUser, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import CardPerfil from '../../components/CardPerfil';
import RedeSocialPerfil from '../../components/RedeSocialPerfil';
import Navbar from '../../components/Navbar';
import { Container, PerfilOptions, Wrap} from './styles';
import EnderecoPerfil from '../../components/EnderecoPerfil';
import SenhaPerfil from '../../components/SenhaPerfil';
import DashboardPerfil from '../../components/DashboardPerfil';
import InstituicaoPerfil from '../../components/InstituicaoPerfil';
// import { Container, CardPerfil, PerfilOptions, Profile, Foto, UserData, Edit, Bio, Info, Email, Tel, Data, Wrap} from './styles';

const Perfil: React.FC = () => {

    const [component, setComponent] = useState(1);

    return (
        <>
            <Navbar />
            <Wrap>
                <Container>
                    <PerfilOptions onClick={() => setComponent(1)}>
                        Meu Perfil
                        <FontAwesomeIcon className="option-icon" icon={faUser} />
                    </PerfilOptions>
                    <PerfilOptions onClick={() => setComponent(2)}>
                        Senha Secreta
                        <FontAwesomeIcon className="option-icon" icon={faKey} />
                    </PerfilOptions>
                    <PerfilOptions onClick={() => setComponent(3)}>
                        Redes Sociais
                        <FontAwesomeIcon className="option-icon" icon={faAt} />
                    </PerfilOptions>
                    <PerfilOptions onClick={() => setComponent(4)}>
                        Endereço
                        <FontAwesomeIcon className="option-icon" icon={faMapMarked} />
                    </PerfilOptions>
                    <PerfilOptions onClick={() => setComponent(5)}>
                        Dashboard
                        <FontAwesomeIcon className="option-icon" icon={faSimCard} />
                    </PerfilOptions>
                    <PerfilOptions onClick={() => setComponent(6)}>
                        Instituição
                        <FontAwesomeIcon className="option-icon" icon={faPlusCircle} />
                    </PerfilOptions>
                    <PerfilOptions background>
                        Sair do Auxilium
                        <FontAwesomeIcon className="option-icon" icon={faPowerOff} />
                    </PerfilOptions>
                </Container>
                {(() =>{
                    switch(component){
                        case 1: 
                            return <CardPerfil />
                        case 2: 
                            return <SenhaPerfil />        
                        case 3: 
                            return <RedeSocialPerfil />           
                        case 4: 
                            return <EnderecoPerfil />
                        case 5: 
                            return <DashboardPerfil />
                        case 6: 
                            return <InstituicaoPerfil />
                        default:
                            return <CardPerfil />
                            break;
                    }
                })()}
            </Wrap>
        </>
    );
} 
export default Perfil;