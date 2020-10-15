import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../pages'
import 'antd/dist/antd.css';
import '../index.css';
import data from './data.json';
import { Layout } from 'antd';
import Result from './404';
import { ProtectedRoute } from './protectedroute';
import Header from './header';
import { view as Breadcrumb } from './breadcrumb';
import {view as Sider} from './sider';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;
const { Content, Footer } = Layout;

export default function View() {
  return (
    <Layout>
      <Header data={data} />
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb />
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider data = {data} />
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Switch>
              {
                routes.map(route => (
                  <ProtectedRoute
                    exact={route.exact}
                    path={route.path}
                    component={route.component} />

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