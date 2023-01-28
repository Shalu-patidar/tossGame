// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    isHead: true,
    totalScore: 0,
    totalHeads: 0,
    totalTails: 0,
  }

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        totalScore: prevState.totalScore + 1,
        totalHeads: prevState.totalHeads + 1,
      }))
    } else if (tossResult === 1) {
      this.setState(prevState => ({
        isHead: false,
        totalScore: prevState.totalScore + 1,
        totalTails: prevState.totalTails + 1,
      }))
    }
  }

  render() {
    const {isHead, totalHeads, totalScore, totalTails} = this.state
    const srcImage = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="header-container">
            <h1 className="heading">Coin Toss Game</h1>
            <p>Heads (or) Tails</p>
          </div>
          <div className="image-container">
            <img src={srcImage} alt="toss result" className="img" />
          </div>
          <div className="btn-container">
            <button
              className="btn"
              type="button"
              onClick={this.onClickTossCoin}
            >
              Toss Coin
            </button>
          </div>
          <div className="score">
            <div className="total">
              <p className="para">Total: {totalScore}</p>
            </div>
            <div className="total">
              <p className="para">Heads: {totalHeads}</p>
            </div>
            <div className="total">
              <p className="para">Tails: {totalTails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
