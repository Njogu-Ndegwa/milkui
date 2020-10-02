import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {routes }from '../pages'
import 'antd/dist/antd.css';
import '../index.css';
import data from './data.json';
import {Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import Result from './404'
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default function View () {
    return (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
       {data.map(item => (
                  <Menu.Item key={item.key}>
                      <Link to={item.url} >{item.title}</Link>
                  </Menu.Item>
              ))}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
              {data.map(item => (
                  <Menu.Item key={item.key}>
                      <Link to={item.url} >{item.title}</Link>
                  </Menu.Item>
              ))}
           
 
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Switch>
      {
        routes.map(route=> (
          <Route exact={route.exact} path={route.path}>
            {route.component}
          </Route>

        ))
      }

      <Route component={Result} />
      </Switch>
      
      </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
    )
}