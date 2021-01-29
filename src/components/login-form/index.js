import './index.css';
import Input from '../input'
import React from 'react';
const SUBMIT_TYPE = {
    sync: 0,//同步
    async: 1 //异步
}
class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            submitted: false,
            submitType: SUBMIT_TYPE.async,
            usernameMsg: '',
            passwordMsg: '',
            msg: '',
        }
    }

    render() {
        return (
            <form className="login-form" ref={(form) => { this.form = form }}>
                <h2>单点登录</h2>
                <div className="msg">
                    <p></p>
                </div>
                <Input placeholder="用户名" message={this.state.usernameMsg} value={this.state.username} change={ev => this.updateState('username', ev)} name='username' />
                <Input placeholder="密码" type="password" message={this.state.passwordMsg} value={this.state.password} change={ev => this.updateState('password', ev)} name='password' />
                <button className="btn-submit" type='button' onClick={ev => this.submit(ev)} disabled={this.state.submitted}>{this.state.submitted ? '正在登录...' : '登 录'}</button>
                <div className="tips">
                    <p className="tips-l"><span className="btn-lost-psw">忘记密码？</span></p>
                    <p className="tips-r">没有账号？<a href="" target="_blank">立即注册</a></p>
                </div>
            </form>
        )
    }
    updateState(key, val) {
        this.setState({
            [key]: val
        })
    }
    clearMsg() {
        this.setState({
            usernameMsg: '',
            passwordMsg: ''
        })
    }
    async validate() {
        this.clearMsg()
        let usernameErr = !this.state.username
        let passwordErr = !this.state.password
        if (usernameErr || passwordErr) {
            this.setState({
                usernameMsg: usernameErr ? '请输入用户名' : '',
                passwordMsg: passwordErr ? '请输入密码' : ''
            })
            return false
        }
        return true
    }
    async submit(ev) {
        const valid = await this.validate()
        if (valid) {
            if (this.state.submitType === SUBMIT_TYPE.async) {
                console.log('登陆...')
                this.setState({
                    submitted: true
                })
                this.login()
            } else {
                console.log(this.form)
                this.form.submit()
            }
        }
    }
    login() {
        setTimeout(() => {
            this.props.history.push('/home')
        }, 1000)
    }

}
export default LoginForm;