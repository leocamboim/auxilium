import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Card, Container } from './styles';

const Explore: React.FC = () => {
    const [cards, setCards] = useState([] as JSX.Element[]);
    
    useEffect(() => {
        if (!cards.length) {
            getCards();
        }
    });
    
    const getCards = async () => {
        const metas = [
            {
                id: 1,
                nome: "ESPM",
                local: "São Paulo - SP",
                tel: "(11) 12345-6789",
                arrecadacao: 9999.99
            },
            {
                id: 2,
                nome: "ESPM 2",
                local: "São Paulo - SP 2",
                tel: "(11) 12345-6789",
                arrecadacao: 9998.99
            }
        ];

        const cards = [] as JSX.Element[];

        for (let i = 0; i < metas.length; i++) {
            const meta = metas[i] as any;
            cards.push(<Card href={'/inst/' + meta.id}>
                <h1>{meta.nome}</h1>
                <p>
                    <span>{meta.local}</span>
                    <strong>{meta.tel}</strong>
                    <span>Arrecadado: <strong>{meta.arrecadacao.toFixed(2).replace('.', ',')}</strong> R$</span>
                </p>
            </Card>);
        }
        setCards(cards);
    };

    return (
        <>            
            <Navbar />
            <Container>
                {cards}
            </Container>
        </>
    )
};

export default Explore;
