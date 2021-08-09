import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { useState, FormEvent } from 'react';
import Navbar from '../../components/Navbar';
import { Container, Form, FormControl, Input, Button } from './styles';
import { useEffect } from 'react';

const Cadastro: React.FC = () => {

    const [showForm, setShowForm] = useState(false)
    const [showType, setShowType] = useState(true)

    const [tipoPessoa, setTipoPessoa] = useState(0);
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState('');
    const [cep, setCep] = useState('');
    const [end, setEnd] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [es, setEs] = useState('');
    const [numero, setNumero] = useState('');

    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        if(tipoPessoa !== 0){
            hideForm()
        }
    },[tipoPessoa])

    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault();
        const values = [tipoPessoa, name, cpf, password, password2, email, cell, cep, end, bairro, cidade, es, numero];
        let errorMsg = '';

        const allFildsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFildsFilled) {
            const person = {
                tipoPessoa,
                name,
                cpf,
                password,
                password2,
                email,
                cell,
                cep,
                end,
                bairro,
                cidade,
                es,
                numero
            }
            console.log(person);
        } else {
            errorMsg = 'Preencha todos os campos do formulário!';
        }
        setErrorMsg(errorMsg);
    }

    function hideForm() {
        if(showForm === false && showType){
            setShowForm(true)
            setShowType(false)
        } else {
            setShowForm(false)
            setShowType(true)
        }
    }

    return (
        <>
            <Navbar />

            <Container>
                {showType && (
                <>
                <button className="option" 
                    onClick={() =>{setTipoPessoa(1)}}>
                    <FontAwesomeIcon className="option-icon" icon={faChild} />
                    <h2>Padrinho</h2>
                </button>
                <div className="border" />
                <button className="option" 
                    onClick={() =>{setTipoPessoa(2)}}>
                    <FontAwesomeIcon className="option-icon" icon={faUniversity} />
                    <h2>Instituição</h2>
                </button>
                </>)}

               {showForm  && (<Form onSubmit={handleOnSubmit}> 
                    <FormControl>
                        <Input
                            type="text"
                            placeholder="Nome"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            type="new-password"
                            placeholder="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Input
                            type="new-password"
                            placeholder="Confirme a Senha"
                            value={password2}
                            onChange={e => setPassword2(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            width="25%"
                            type="text"
                            placeholder="Celular"
                            value={cell}
                            onChange={e => setCell(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="CPF"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            width="25%"
                            type="text"
                            placeholder="CEP"
                            value={cep}
                            onChange={e => setCep(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Endereço"
                            value={end}
                            onChange={e => setEnd(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            type="text"
                            placeholder="Bairro"
                            value={bairro}
                            onChange={e => setBairro(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Cidade"
                            value={cidade}
                            onChange={e => setCidade(e.target.value)}
                        />
                        <Input
                            width="12.5%"
                            type="text"
                            placeholder="Estado"
                            value={es}
                            onChange={e => setEs(e.target.value)}
                        />
                        <Input
                            width="12.5%"
                            type="text"
                            placeholder="Número"
                            value={numero}
                            onChange={e => setNumero(e.target.value)}
                        />
                    </FormControl>
                    <Button type="submit">
                        Enviar
                    </Button>
                </Form>)}
            </Container>
        </>
    )
}
export default Cadastro;