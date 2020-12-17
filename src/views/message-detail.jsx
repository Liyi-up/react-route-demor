import react from 'react'

const allMessage = [
    {id: 1, title: 'message01', content: '我是一段内容'},
    {id: 2, title: 'message02', content: '我是一段内容'},
    {id: 3, title: 'message03', content: '我是一段内容'},
];

export default function MessageDetail(props) {
    // 得到请求参数中的ID
    const {id} = props.match.params;
    console.log(id);
    // 查询到对应的数据
    const message = allMessage.find((item)=> item.id===id*1); //返回第一个条件为true的元素
    console.log(message);
    return (
        <ul>
            <li>ID：{message.id}</li>
            <li>TITLE:{message.title}</li>
            <li>CONTENT:{message.content}</li>
        </ul>
    )
};
