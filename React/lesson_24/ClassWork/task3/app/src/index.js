/*
 * Class Work
 *
 * ### Задача 1
 *
 * Модифицируйте код предыдущей задачи. Реализуйте следующее:
 * При переходе по пути, не указанному в конфигурации маршрутизации,
 * перенаправляйте пользователя на домашнюю страницу.
 */




import React, { Component } from 'react';

import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom';


import Home  from '../views/home.js';
import View1 from '../views/view1.js';
import View2 from '../views/view2.js';


class App extends Component{



    render(){
        return(
            <HashRouter>
                    <div>
                        <h1>React Routing</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <l1><Link to="/view1">View 1</Link></l1>
                            <l1><Link to="/view2">View 2</Link></l1>
                        </ul>


                    <hr/>

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/view1" component={View1}/>
                        <Route path="/view2" component={View2}/>

                        /<Route render={function () {
                            return <Redirect to="/" component={Home}/>
                        }}/>
                    </Switch>
                    </div>
            </HashRouter>
        )
    }
}

export default App;