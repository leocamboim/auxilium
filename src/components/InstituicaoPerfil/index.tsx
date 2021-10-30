
import { FormEvent, useState } from 'react';
import { createInst } from '../../services/InstService';
import { CardInfoPerfil, Info, Input, Button } from './styles';

const InstituicaoPerfil: React.FC = () => {

    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cep, setCep] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault();
        const values =[ 
            name,
            cnpj,
            cep,
            email,
            telefone
        ];

        const fieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if(fieldsFilled) {
            const inst = {
                nomInst: name,
                cnpInst: cnpj,
                cepInst: cep,
                emaInst: email,
                telInst: telefone
            }
            
            try {
                createInst(inst);
            } catch (error) {
                console.log(error)
            }
        }

    }
    
    return(
        <>
            <CardInfoPerfil>
                    <span>Adicionar Instituição</span>
                    <Info 
                        onSubmit={handleOnSubmit}>
                        <Input
                            type="text"
                            placeholder="Nome da Instituição"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="CNPJ da Instituição"
                            value={cnpj}
                            onChange={e => setCnpj(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="CEP da Instituição"
                            value={cep}
                            onChange={e => setCep(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Email da Instituição"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Telefone da Instituição"
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                        />
                    </Info>
                <Button>
                    Confirmar!
                </Button>
            </CardInfoPerfil>
        </>
    )
}
export default InstituicaoPerfil;