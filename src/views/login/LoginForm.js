import React,{Component,Fragment} from "react";
import "./Index.scss";
//antd
import { Form, Input, Button,Row, Col} from 'antd';
import { UserOutlined,LockOutlined} from '@ant-design/icons';

//验证
import  {validate_password} from "../../utils/vaildate";
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
                    <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={this.onFinish} >
                    <Form.Item name="username" rules={
                        [
                            { required: true, message: '邮箱不能为空！' },
                            {type:"email",message:"邮箱格式不正确"}
                        ]
                        } >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
                    </Form.Item>
                    <Form.Item name="passwod" rules={
                        [
                            { required: true, message: '密码不能为空' },
                            // ({ getFieldValue }) => ({//Es6结构     自定义属性
                            //     validator(rules, values) {
                            //       if (values.length<6) {
                            //           return Promise.reject('不能小于6位')
                            //       }else{
                            //           return Promise.reject();
                            //       }
                    
                            //      // return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            //     },
                            //   }),
                            // {min:6,message:'密码不能小于6位'},
                            // {max:10,message:'密码不能大于10位'},
                            {pattern: validate_password,message:"请输入大于6位小于20位数字和字母"},
                        ]
                        } >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                    </Form.Item>
                    <Form.Item name="code" rules={
                        [
                            { required: true,message:"验证码不能为空"},
                            {len:6,message:"请输入长度为6位的验证码"}
                        ]} >
                        <Row gutter={13}>
                            <Col span={15}>
                                <Input prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="code" block/>
                            </Col>
                            <Col span={9}>
                                <Button htmltype="danger" block>获取验证码</Button>
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