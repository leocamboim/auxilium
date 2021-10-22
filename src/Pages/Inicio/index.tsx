import Navbar from '../../components/Navbar';
import { Container, Opacity, Apad, Tipo, Wrap, Content, CadastroIcon, InstIcon, ApadIcon } from './styles';

const Inicio: React.FC = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Opacity>
                    <h1>Conheça Nossa Equipe</h1>
                    <button>Ajudar</button>
                </Opacity>
            </Container>

            <Apad>
                <Tipo theme={{ main: "var(--quaternary)"}}>
                    <h1>Apadrinhamento Afetivo</h1>
                    <span>
                        Quer assumir o compromisso de acompanhar, orientar e apoiar a educação de uma criança ou adolescente, criando um vínculo pessoal?
                    </span>
                </Tipo>

                <Tipo theme={{ main: "var(--tertiary)"}}>
                    <h1>Apadrinhamento Financeiro</h1>
                    <span>
                        Quer doar algum bem material ou Dinheiroque possa ser necessário a uma criança ou adolescente ou a toda uma instituição de acolhimento?
                    </span>
                </Tipo>

                <Tipo theme={{ main: "var(--secondary)"}}>
                    <h1>Apadrinhamento de Serviços</h1>
                    <span>
                        Quer colaborar com uma instituição doando um serviço que você sabe fazer bem ou repassando conhecimentos?
                        </span>
                </Tipo>
            </Apad>

            <Wrap>
                <span>Apadrinhe!</span>
                <strong>O Processo é Simples</strong>
                <Content>
                    <CadastroIcon />
                    <InstIcon />
                    <ApadIcon />
                </Content>
                <Content>
                    <span>Faça seu Cadastro.</span>
                    <span>Escolha a Instituição.</span>
                    <span>Escolha a Meta.</span>               
                </Content>
            </Wrap>
        </>
    )
}

export default Inicio;