import React from 'react';
import LoginForm from "../../components/login-form";
import { getUrlQuery, get } from "../../utils";
import { SUBMIT_TYPE } from "../../utils/enum";
import request from '../../utils/request'
import { host } from '../../config'
class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errorMessage: ''
        }
    }

    render() {
        return (
            <LoginForm submitType={SUBMIT_TYPE.async} login={ev => this.login(ev)} errorMessage={this.state.errorMessage} />
            // <LoginForm submitType={SUBMIT_TYPE.sync} action={host+'login'}/> //同步提交
        )
    }
    /**
     * 获取浏览器地址栏URL的（？后的）参数
     * @param {String} key 参数名
     * @returns {String} 参数值
     */
    getUrlParam(key) {
        if (this.props.history.location) {
            const query = getUrlQuery(this.props.history.location.search)
            return query[key]
        }
    }
    clearErrorMessage(){
        this.setState({
            errorMessage:''
        })
    }
    async login({ username, password, submitType }) {
        console.log(username)
        console.log(password)
        console.log(submitType) //提交类型 0同步 1异步
        this.clearErrorMessage()
        const data = {
            username,
            password,
            type: 1,
            application: 'app',
            callback: this.getUrlParam('callback')
        }
        const res = await request({
            method: 'POST',
            url: '/login',
            data
        }).catch(err => {
            console.log(err)
            this.setState({
                errorMessage: err.message
            })
            return null
        })
        console.log(res)
        const code = get(res, 'data.resultCode')
        const success = code === 0
        if (success) {
            //登录成功
        } else {
            const errMsg = get(res, 'data.data.errorMsg')
            this.setState({
                errorMessage: errMsg
            })
        }
    }
    /**
     * 跳转到指定url
     * @param {String} url 
     */
    go(url) {
        this.props.location.href = url
    }
}
export default LoginPage;