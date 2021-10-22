
import { CardInfoPerfil, Container, Input, Button } from './styles';

const SenhaPerfil: React.FC = () => {
    
    return(
        <>
            <CardInfoPerfil>
                <Container>
                    <Input 
                        type="text"
                        placeholder="Insira sua nova senha:"
                        // value={name}
                    />
                    <Input 
                    type="text"
                    placeholder="Repita sua nova senha:"
                    />
                </Container>
                <Button>
                    Confirmar!
                </Button>
            </CardInfoPerfil>
        </>
    )
}
export default SenhaPerfil;