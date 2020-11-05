import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Row, Col, Dropdown} from 'antd';
import 'antd/dist/antd.css';
import {UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import {AuthService} from './auth_service';


const { Header } = Layout;

export default function Headers({ data }) {

    const logOutHandler = () => {
        AuthService.logout()
    }

    const menu = (
        <Menu>
            <Menu.Item>
                <Link to='/login' onClick={logOutHandler} >
                <PoweroffOutlined />&nbsp;Sign Out
                </Link>
            </Menu.Item>
        </Menu>
    );


    return (

        <Header className="header" >
            <Row >
                <Col span={20} >
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                {data.map(item => (
                    <Menu.Item key={item.key}>
                        <Link to={item.url} >{item.title}</Link>
                    </Menu.Item>
                ))}
                                   
            </Menu>
            </Col>
                
                    <Col span = {4} >
                        <Dropdown overlay={menu}>
                        <UserOutlined style={{color: '#fff'}} />
                        </Dropdown>
                     
                    </Col>
                </Row>
            
        </Header>
    );
}