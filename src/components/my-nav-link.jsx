import React, {Component} from "react";
import {NavLink} from "react-router-dom";
class MyNavLink extends Component {
    /*
     {...this.props} 将外部传递的所有属性传递给组件
     */
    render() {
        return (
            <NavLink  {...this.props} activeClassName='active-class'></NavLink>
        )
    }
}

export default MyNavLink;
