import React, {Component} from "react";
import MyNavLink from "../components/my-nav-link";
import {Switch, Route, Redirect} from 'react-router-dom'
import News from "./news";
import Message from "./message";

class Home extends Component {
    state = {};
    static propTypes = {};

    render() {
        return (
            <div className="container">
                <h2>Home route component</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to='/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/message'>Message</MyNavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route path='/home/news' component={News}/>
                        <Route path='/home/message' component={Message}/>
                        <Redirect to='/home/news'/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Home;
