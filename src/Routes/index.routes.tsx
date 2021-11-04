import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cadastro from '../Pages/Cadastro';
import Inicio from '../Pages/Inicio';
import Explore from '../Pages/Explore';
import Perfil from '../Pages/Perfil';
import QuemSomos from '../Pages/QuemSomos';
import Instituicao from '../Pages/Instituicao';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Inicio} />
                <Route path='/explore' component={Explore} />
                <Route path='/quemsomos' component={QuemSomos} />
                <Route path='/cadastro' component={Cadastro} />
                <Route path='/perfil' component={Perfil} />
                <Route path='/inst/:id' component={Instituicao} />
            </Switch>
        </BrowserRouter>
    )
}