import './index.scss';
import React from 'react'
class Input extends React.Component {
  constructor(props) {
    super(props)
    const orgVal = props.value !== undefined ? props.value : ''
    this.state = {
      type: props.type,
      value: orgVal
    }
  }
  render() {
    return (
      <div className="input">
        <input value={this.state.value} onChange={ev => this.updateValue(ev.target.value)} type={this.state.type} placeholder={this.props.placeholder} />
        {(this.state.value === 0 || !!this.state.value) &&
          <div className="btn-clear" onClick={ev => this.updateValue('')}>
            <i className="iconfont icon-remove"></i>
          </div>
        }
        <div className="input-msg">{this.props.message}</div>
      </div>
    )
  }
  updateValue(value) {
    this.setState({
      value
    })
    const valueChangeCallback = this.props.change
    if (typeof valueChangeCallback === 'function') {
      valueChangeCallback(value)
    }
  }
}
export default Input;