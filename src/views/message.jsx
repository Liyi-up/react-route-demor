import React, {Component} from "react";
import MyNavLink from "../components/my-nav-link";
import {Route} from 'react-router-dom'
import MessageDetail from "./message-detail";

class Message extends Component {
    state = {
        messagesArr: []
    };
    static propTypes = {};

    componentDidMount() {
        // 模拟发送异步请求
        setTimeout(() => {
            const messagesArr = [
                {
                    id: 1,
                    title: 'message001'
                },
                {
                    id: 2,
                    title: 'message002'
                },
                {
                    id: 3,
                    title: 'message003'
                }
            ];
            // 更新状态
            this.setState({
                messagesArr
            })
        }, 1000)
    }

    showDetail1 = (id) => {
        this.props.history.push(`/home/message/messageDetail/${id}`)
    };
    showDetail2 = (id) => {
        this.props.history.replace(`/home/message/messageDetail/${id}`)
    };
    rollback = () => {
        this.props.history.goBack()
    };
    forward = () => {
        this.props.history.goForward()
    };
    reqPage = () => {
        // 通过js进行页面跳转
        window.location = 'http://www.baidu.com'
    };

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messagesArr.map((item, index) => {
                            return (
                                <li key={index}>
                                    <MyNavLink to={`/home/message/messageDetail/${item.id}`}>{item.title}</MyNavLink>
                                    &nbsp;
                                    <button onClick={() => this.showDetail1(item.id)}>push方式查看</button>
                                    &nbsp;
                                    <button onClick={() => this.showDetail2(item.id)}>replace方式查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <p>
                    <button onClick={this.rollback}>回退</button>
                    <button onClick={this.forward}>前进</button>
                </p>
                <p>
                    <button onClick={this.reqPage}>页面跳转</button>
                </p>
                <div className="panel">
                    <Route path='/home/message/messageDetail/:id' component={MessageDetail}/>
                </div>
            </div>
        );
    }
}

export default Message;
