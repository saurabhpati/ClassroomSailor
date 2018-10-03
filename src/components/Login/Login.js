import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

const Login = () => {
    return (
        <Form className="login-form">
            <FormItem>
                <Input className="ant-input" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            </FormItem>
            <FormItem>
                <Input className="ant-input" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            </FormItem>
            <FormItem>
                <Checkbox>Remember me</Checkbox>
                <a className="login-form-forgot" href="">Forgot password</a>
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or&nbsp;
                <a href="">register now!</a>
            </FormItem>
        </Form>
    );
}

export default Form.create()(Login);