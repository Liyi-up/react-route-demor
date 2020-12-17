import React, {Component} from "react";

class News extends Component {
    state = {
        newsArr: [
            '第一条news',
            '第二条news',
            '第三条news',
        ]
    };
    static propTypes = {};

    render() {
        const {newsArr} = this.state;
        return (
            <ul>
                {
                    newsArr.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        )
    }
}

export default News;
