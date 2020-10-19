import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu} from 'antd';
import 'antd/dist/antd.css';


const { Header } = Layout;

export default function Headers({ data }) {
    return (

        <Header className="header" >

            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                {data.map(item => (
                    <Menu.Item key={item.key}>
                        <Link to={item.url} >{item.title}</Link>
                    </Menu.Item>
                ))}
                                   
            </Menu>

        </Header>
    );
}