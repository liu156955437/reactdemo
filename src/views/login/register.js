import React,{Component,Fragment} from "react";

import "./Index.scss";
//antd
import { Form, Input, Button,Row, Col} from 'antd';
import { UserOutlined,LockOutlined} from '@ant-design/icons';

//注册
class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {};
    }

    toogleForm=()=>{
       this.props.switchForm("login");
    }


    render(){
        return(
            <Fragment>
                <div className="form-header">
                    <h4 className="column">注册</h4>
                    <span onClick={this.toogleForm}>登录</span>
                </div>
                <div className="form-content">
                <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={this.onFinish} >
                    <Form.Item name="username" rules={[{ required: true, message: '请输入有效的用户名' }]} >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: '请输入有效的密码！' }]} >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                    </Form.Item>
                    <Form.Item name="passwords" rules={[{ required: true, message: '请输入有效的密码！' }]} >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                    </Form.Item>
                    <Form.Item name="code" rules={[{ required: true}]} >
                        <Row gutter={13}>
                            <Col span={15}>
                                <Input prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="code" block/>
                            </Col>
                            <Col span={9}>
                                <Button type="danger" block>获取验证码</Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" block>注册 </Button>
                    </Form.Item>
                </Form>
                </div>
            </Fragment>
        )
    }
}
export default RegisterForm;