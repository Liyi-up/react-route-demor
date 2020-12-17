import React, {Component} from "react";
import MyNavLink from "../components/my-nav-link";
import {Route} from  'react-router-dom'
class Message extends Component {
    state = {
        messagesArr: [

        ]
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

    render() {
        return (
            <ul>
                {
                    this.state.messagesArr.map((item, index) => {
                        return (
                            <li>
                                <MyNavLink href={`/home/message/messageDetail/${item.id}`}>{item.title}</MyNavLink>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default Message;
