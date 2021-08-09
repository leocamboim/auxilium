import React from 'react';

import { Container, SponsorLeft, Center, NotificationsRight } from './styles';

const Footer: React.FC = () => {
    return (
        <Container>
            <SponsorLeft>
                <span>Patrocinadores</span>
                {/* <Icons /> */}
                <span>Seja um patrocinador!</span>
            </SponsorLeft>
            <Center>
                <span>qualquer coisa</span>
                <span>qualquer coisa</span>
                <span>qualquer coisa</span>
            </Center>
            <NotificationsRight>
                <span>Quer receber noticias da <strong>Auxilium</strong>?</span>
                <span>Cadastre o seu e-mail</span>
                <input type="text"></input>
                <button>Enviar</button>
                <span>Siga-nos nas redes sociais</span>
            </NotificationsRight>
        </Container>
    )
}

export default Footer;