import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import Axios from 'axios';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Card } from 'antd';

import {AuthService} from '../../components/auth_service'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export  const Login = (props) => {

  const url = "http://localhost:3000/api/login"

   

const [redirect, setRedirect] = useState(false)

const loginHandler = () => {
    AuthService.login();
    setRedirect(true)
}

let {from} = props.location.state || {from: {pathname: '/option1'}};
if(redirect) return <Redirect to ={ from} />
  const onFinish = (values) => {
    let email = values.username, password = values.password
    console.log('Success:', values);
    Axios.post(url,{
      email,
      password
    }).then(response => {
      console.log(response);
      if(response.data.isAuth) {
        console.log(response.data.isAuth)
        loginHandler();
      }
    }).catch(error => console.log(error))
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
console.log(redirect, "redirect")
  return (
    <Card>
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Card>
  );
};