import React from 'react'
class HomePage extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="home-page">
      <h2>欢迎光临</h2>
      <button>退出登录</button>
    </div>
    )
  }
}
export default HomePage;
