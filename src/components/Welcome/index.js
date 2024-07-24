import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  toggleSubscription = () => {
    this.setState(prevState => {
      console.log('Previous State:', prevState.isSubscribed)
      return {isSubscribed: !prevState.isSubscribed}
    })
  }

  render() {
    const {isSubscribed} = this.state
    let textButton
    if (isSubscribed) {
      textButton = (
        <button
          className="button"
          type="button"
          onClick={this.toggleSubscription}
        >
          Subscribed
        </button>
      )
    } else {
      textButton = (
        <button
          className="button"
          type="button"
          onClick={this.toggleSubscription}
        >
          Subscribe
        </button>
      )
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {textButton}
      </div>
    )
  }
}

export default Welcome
