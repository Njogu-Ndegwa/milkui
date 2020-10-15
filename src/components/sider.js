import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import 'antd/dist/antd.css';

const {Sider} = Layout;
export const view = ({data}) => (
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
)