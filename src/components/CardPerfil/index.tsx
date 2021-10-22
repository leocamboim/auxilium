import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardInfoPerfil,  Profile, Foto, UserData, Edit, Bio, Info, Email, Tel, Data } from './styles';

const CardPerfil: React.FC = () => {
    
    return(
        <CardInfoPerfil>
            <Profile> 
                <Foto />
                <UserData>
                    <strong>
                        Leonardo Camboim
                    </strong>

                    <span>
                        @leo_camboim
                    </span>
                </UserData>
                <Edit>
                    <FontAwesomeIcon className="option-icon" icon={faUserEdit}/>
                </Edit>
            </Profile>
            <Bio> 
                <strong>
                    Biografia
                </strong>
                <span>
                    este é um texot que eue quero testar a porra da linha ate onde vai nessa buceta pq eu nao aguentoa asmdfoiuhasd
                </span>
            </Bio>
            <Info>
                <Email>
                    <strong>Email</strong>
                    <span>leozin@email.com</span>
                </Email>
                <Tel> 
                    <strong>Telefone</strong>
                    <span>Passa o zap</span>
                </Tel>
                <Data>
                    <strong>Data de Nascimento</strong>
                    <span>31/02/2024</span>
                </Data>
            </Info>                  
        </CardInfoPerfil>
    )
}
export default CardPerfil;