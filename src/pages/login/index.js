import React from 'react';
import LoginForm from "../../components/login-form";
import { getUrlQuery } from "../../utils";
class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        console.log(props.history)
        this.redirectUrl = ''
        this.initRedirectUrl()
    }

    render() {
        return (
           <LoginForm  redirectUrl='htttps://www.baidu.com/'/>
        )
    }
    initRedirectUrl() {
        if (this.props.history.location) {
            const query = getUrlQuery(this.props.history.location.search)
            if (query.redirect) {
                this.redirectUrl = query.redirect
            }
        }
    }
}
export default LoginPage;