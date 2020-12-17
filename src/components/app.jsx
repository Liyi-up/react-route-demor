import React, {Component} from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import About from "../views/about";
import Home from "../views/home";
import MyNavLink from "./my-nav-link";

class App extends Component {
    state = {};
    static propTypes = {};

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavLink className='list-group-item' to='/about'>About</MyNavLink>
                            <MyNavLink className='list-group-item' to='/home'>Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path='/about' component={About} className="list-group-item "/>
                                    <Route path='/home' component={Home} className="list-group-item "/>
                                    <Redirect to='/about'/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
