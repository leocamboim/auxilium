
import { CardInfoPerfil, Facebook, Instagram, Input, Container, Button } from './styles';

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
                    <Instagram />
                    <Input
                        type="text"
                        placeholder="@leo__camboim"
                    />
                </Container>
                <Button>
                    Confirmar!
                </Button>
            </CardInfoPerfil>
        </>
    )
}
export default RedeSocialPerfil;