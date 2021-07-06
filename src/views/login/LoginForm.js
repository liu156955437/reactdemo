import React,{Component,Fragment} from "react";
import "./Index.scss";
//antd
import { Form, Input, Button,Row, Col} from 'antd';
import { UserOutlined,LockOutlined} from '@ant-design/icons';

///登录
class LoginForm extends Component {
    constructor() {
        super();
        this.state = {};
    }

      //箭头函数
   onFinish = (values)=> {
    console.log('Received values of form: ', values);
    };


    toggleForm=()=>{
        this.props.switchForm("register");
    }
    render(){
        return(
            <Fragment>
                <div className="form-header">
                    <h4 className="column">登录</h4>
                    <span onClick={this.toggleForm}>账号注册</span>
                </div>
                <div className="form-content">
                    <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={()=>this.onFinish} >
                    <Form.Item name="username" rules={[{ required: true, message: '请输入有效的用户名' }]} >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: '请输入有效的密码！' }]} >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true}]} >
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
                        <Button type="primary" htmlType="submit" className="login-form-button" block>登录 </Button>
                    </Form.Item>
                </Form>
            </div>
        </Fragment>
        )
    }
}
export default LoginForm;