import Navbar from '../../components/Navbar';
import { Container, ImgInst, Nome, About, Apad, Tipo } from './styles';

export default function QuemSomos() {
    return (
        <>
            <Navbar />
            <Container>
                <ImgInst>
                    <Nome>ESPM</Nome>
                    <About>
                        <h1>SOBRE A INSTITUIÇÃO</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </About>
                </ImgInst>
            </Container>

            <Apad>
                <Tipo theme={{ main: "var(--quaternary)" }}>
                    <h1>Apadrinhamento Afetivo</h1>
                    <span>
                        Quer assumir o compromisso de acompanhar, orientar e apoiar a educação de uma criança ou adolescente, criando um vínculo pessoal?
                    </span>
                    <form action="https://pagseguro.uol.com.br/checkout/v2/donation.html" method="post">
                        <input type="hidden" name="currency" value="BRL" />
                        <input type="hidden" name="receiverEmail" value="leomestrex@gmail.com" />
                        <input type="hidden" name="iot" value="button" />
                        <input type="image" src="https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/120x53-doar-azul.gif" name="submit" alt="Pague com PagSeguro - é rápido, grátis e seguro!" />
                    </form>
                </Tipo>

                <Tipo theme={{ main: "var(--tertiary)" }}>
                    <h1>Apadrinhamento Financeiro</h1>
                    <span>
                        Quer doar algum bem material ou Dinheiroque possa ser necessário a uma criança ou adolescente ou a toda uma instituição de acolhimento?
                    </span>
                    <form action="https://pagseguro.uol.com.br/checkout/v2/donation.html" method="post">
                        <input type="hidden" name="currency" value="BRL" />
                        <input type="hidden" name="receiverEmail" value="leomestrex@gmail.com" />
                        <input type="hidden" name="iot" value="button" />
                        <input type="image" src="https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/209x48-doar-azul-assina.gif" name="submit" alt="Pague com PagSeguro - é rápido, grátis e seguro!" />
                    </form>
                </Tipo>

                <Tipo theme={{ main: "var(--secondary)" }}>
                    <h1>Apadrinhamento de Serviços</h1>
                    <span>
                        Quer colaborar com uma instituição doando um serviço que você sabe fazer bem ou repassando conhecimentos?
                    </span>
                    <form action="https://pagseguro.uol.com.br/checkout/v2/donation.html" method="post">
                        <input type="hidden" name="currency" value="BRL" />
                        <input type="hidden" name="receiverEmail" value="leomestrex@gmail.com" />
                        <input type="hidden" name="iot" value="button" />
                        <input type="image" src="https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/209x48-doar-azul-assina.gif" name="submit" alt="Pague com PagSeguro - é rápido, grátis e seguro!" />
                    </form>
                </Tipo>
            </Apad>
        </>
    )
}