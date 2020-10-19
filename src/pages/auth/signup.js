import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'
import Axios from 'axios';
import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Button,
    Card
} from 'antd';
const url = "http://localhost:3000/api/register"
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 16,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export const SignUp = (props) => {
    const [form] = Form.useForm();

    const [redirect, setRedirect] = useState(false)

    let {from} = props.location.state || {from: {pathname: '/option1'}};
if(redirect) return <Redirect to ={ from} />
    const onFinish = (value) => {
        console.log('Received values of form: ', value);
        let 
            firstname = value.firstname,
            lastname = value.lastname,
            email = value.email,
            password = value.password,
            password2 = value.confirm
        
        Axios.post(url, {
            firstname,
            lastname,
            email,
            password,
            password2
        }).then(response => {
            console.log(response.data.succes)
            if(response.data.succes) {
                setRedirect(true)
            }
            console.log(response)
        }).catch(error => console.log(error));
    };


    return (
        <Card>
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            scrollToFirstError
        >
            <Form.Item
                name="firstname"
                label="firstname"
                rules={[

                    {
                        required: true,
                        message: 'Please input your Firstname',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="lastname"
                label="lastname"
                rules={[

                    {
                        required: true,
                        message: 'Please input your Lastname',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
        </Button>
            </Form.Item>
        </Form>
        </Card>
    );
};
