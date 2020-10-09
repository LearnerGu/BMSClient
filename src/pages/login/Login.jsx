import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.less'
import logo from '../../assets/images/login/logo.png'
export default class Login extends Component {

  validatePwd = (rule, value, callback) => {
    value = value.trim();
    if(!value) {
      callback('密码必须输入！')
    }else if (value.length < 4) {
      callback('密码必须大于4位！')
    }else if (value.length > 12) {
      callback('密码必须小于12位！')
    }else if (! /^[a-zA-Z0-9_]+$/.test(value)) {
      callback('密码必须由英文、数字或下划线组成！')
    }else {
      callback() //验证通过
    }
  }
  render() {
    //const { getFieldDecorator } = this.props.form
      const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
    return (
      <div className="login">
        <div className="login-header">
          <img src={logo} alt="logo"/>
          <h1>后台管理系统</h1>
        </div>
        <div className="login-content">
          <h1>用户登录</h1>
          <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
              {
                min: 4,
                message: 'the min length must over four!',
              },
              {
                max: 12,
                message: 'the max length must below four!',
              },
              {
                pattern: /^[a-zA-Z0-9_]+$/,
                message: 'Username must be consisted by letter, number and underline!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                validator: this.validatePwd
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
        </div>
      </div>
    )
  }
}
