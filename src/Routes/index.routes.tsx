import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cadastro from '../Pages/Cadastro';
import Criancas from '../Pages/Criancas';
import Desejos from '../Pages/Desejos';
import Fodasse from '../Pages/Inicio';
import Login from '../Pages/Login';
import QuemSomos from '../Pages/QuemSomos';
import Segmentos from '../Pages/Segmentos';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Fodasse} />
                <Route path='/login' component={Login} />
                <Route path='/desejos' component={Desejos} />
                <Route path='/segmentos' component={Segmentos} />
                <Route path='/criancas' component={Criancas} />
                <Route path='/quemsomos' component={QuemSomos} />
                <Route path='/cadastro' component={Cadastro} />
            </Switch>
        </BrowserRouter>
    )
}