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
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
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