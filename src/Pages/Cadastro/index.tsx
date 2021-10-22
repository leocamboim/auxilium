import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { useState, FormEvent } from 'react';
import Navbar from '../../components/Navbar';
import { Container, Form, Input, Button, Title, Login, Wrap } from './styles';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { createUser } from '../../services/UserService';

const Cadastro: React.FC = () => {

    // const [showForm, setShowForm] = useState(false)
    // const [showType, setShowType] = useState(true)

    // const [tipoPessoa, setTipoPessoa] = useState(0);
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');

    const history = useHistory();
    const [errorMsg, setErrorMsg] = useState('');

    // useEffect(() => {
    //     if (tipoPessoa !== 0) {
    //         hideForm()
    //     }
    // }, [tipoPessoa])


    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault();
        const values = [
            // tipoPessoa,
             name, email, password, password2, cpf, cep];
        let errorMsg = '';

        const allFildsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        debugger;
        if (allFildsFilled) {
            const person = {
                nomUsu: name,
                cpfUsu: cpf,
                cepUsu: cep,
                emaUsu: email,
                senUsu: password
            }
            try {
                createUser(person)
            } catch (ex) {
                console.error(ex);
            }
        } else {
            errorMsg = 'Preencha todos os campos do formulário!';
        }
        history.push('/perfil');
        setErrorMsg(errorMsg);
    }

    // function hideForm() {
    //     if (showForm === false && showType) {
    //         setShowForm(true)
    //         setShowType(false)
    //     } else {
    //         setShowForm(false)
    //         setShowType(true)
    //     }
    // }

    return (
        <>
            <Navbar />

            <Container>
                {/* {showType && (
                    <>
                        <button className="option"
                            onClick={() => { setTipoPessoa(1) }}>
                            <FontAwesomeIcon className="option-icon" icon={faChild} />
                            <h2>Tutores</h2>
                        </button>
                        <div className="border" />
                        <button className="option"
                            onClick={() => { setTipoPessoa(2) }}>
                            <FontAwesomeIcon className="option-icon" icon={faUniversity} />
                            <h2>Instituição</h2>
                        </button>
                    </>)} */}

                {/* {showForm &&  */}
                (<>
                    <Wrap>
                        <Form onSubmit={handleOnSubmit}>
                            <Title>Cadastro</Title>

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


                            <Input
                                type="text"
                                placeholder="CPF"
                                value={cpf}
                                onChange={e => setCpf(e.target.value)}
                            />


                            <Input
                                type="text"
                                placeholder="CEP"
                                value={cep}
                                onChange={e => setCep(e.target.value)}
                            />

                            <Button 
                                type="submit">
                                Cadastrar
                            </Button>
                        </Form>
                        <Login>
                            <Title>
                                Entrar
                            </Title>
                            <Input
                                type="text"
                                placeholder="Email"
                                onChange={e => setCep(e.target.value)}
                            />
                            <Input
                                type="new-password"
                                placeholder="Senha"
                                onChange={e => setPassword(e.target.value)}
                            />
                            <Button 
                                type="submit">
                                Enviar
                            </Button>
                        </Login>
                    </Wrap>
                </>)
                {/* } */}
            </Container>
        </>
    )
}
export default Cadastro;