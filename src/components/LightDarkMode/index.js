// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isSwitchedOn: false,
    content: 'Light Mode',
    card_bg_style: 'white-bg',
    heading_style: 'heading-dark',
  }

  onOFFMode = () => {
    this.setState(prevState => ({
      isSwitchedOn: !prevState.isSwitchedOn,
      content: prevState.isSwitchedOn ? 'Dark Mode' : 'Light Mode',
      card_bg_style: prevState.isSwitchedOn ? 'dark-bg' : 'white-bg',
      heading_style: prevState.isSwitchedOn ? 'heading-white' : 'heading-dark',
    }))
  }

  renderButton = () => {
    const {content, card_bg_style, heading_style} = this.state
    return (
      <div className="app-container">
        <div className={`mode-container ${card_bg_style}`}>
          <h1 className={heading_style}>Click To Change Mode</h1>
          <button className="mode-btn" onClick={this.onOFFMode}>
            {content}
          </button>
        </div>
      </div>
    )
  }

  render() {
    return this.renderButton()
  }
}

export default LightDarkMode
