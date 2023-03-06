import { Switch, Route } from 'react-router-dom'
import Cadastro from '../Pages/Cadastro'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import PageInfoCurso from '../Pages/PageInfoCurso'
import MinhaConta from '../Pages/MinhaConta'
import Admin from '../Pages/Admin'
import CadastroCursos from '../Pages/Admin/CadastroCursos'

export default function RouterApp() {
   return (
      <Switch>
         <Route exact path={'/'} component={Home}></Route>
         <Route exact path={'/cadastro'} component={Cadastro}></Route>
         <Route exact path={'/login'} component={Login}></Route>
         <Route exact path={'/admin'} component={Admin}></Route>
         <Route exact path={'/admin/cadastrar-cursos'} component={CadastroCursos}></Route>
         <Route exact path={'/minha-conta'} component={MinhaConta}></Route>
         <Route exact path={'/curso/:id'} component={PageInfoCurso}></Route>
      </Switch>
   )
}