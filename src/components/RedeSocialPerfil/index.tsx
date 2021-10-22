
import { CardInfoPerfil, Facebook, Instagram, Input, Container } from './styles';

const RedeSocialPerfil: React.FC = () => {
    
    return(
        <>
            <CardInfoPerfil>
                <Container>
                    <Facebook />
                    <Input
                        type="text"
                        placeholder="Leo Camboim"
                    />
                </Container>
                <Container>    
                    <Instagram />
                    <Input
                        type="text"
                        placeholder="@leo__camboim"
                    />
                </Container>
            </CardInfoPerfil>
        </>
    )
}
export default RedeSocialPerfil;