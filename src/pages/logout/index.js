import React from 'react'
class LogoutPage extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="home-page">
      <h2>您已退出登录</h2>
      <button onClick={ev=>this.props.history.push('/login')}>返回登录</button>
    </div>
    )
  }
}
export default LogoutPage;
