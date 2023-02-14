import { Switch, Route } from 'react-router-dom'
import Cadastro from '../Pages/Cadastro'
import Home from '../Pages/Home'
import Login from '../Pages/Login'

export default function RouterApp() {
   return (
      <Switch>
         <Route exact path={'/'} component={Home}></Route>
         <Route exact path={'/cadastro'} component={Cadastro}></Route>
         <Route exact path={'/login'} component={Login}></Route>
      </Switch>
   )
}