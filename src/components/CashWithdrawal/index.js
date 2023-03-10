/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  cashBTn = val => {
    this.setState(preValue => ({balance: preValue.balance - val}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const nameLogo = name.slice(0, 1)
    return (
      <div className="background-container">
        <div className="box-container">
          <div className="name-container">
            <div className="name-logo-container">
              <p className="first-letter">{nameLogo}</p>
            </div>
            <h1 className="name">{name}</h1>
          </div>
          <div className="balance-box">
            <p className="balance-text">Your Balance </p>
            <p className="amount">
              {balance}
              <br />
              <span className="rupees-text">In Rupees</span>
            </p>
          </div>
          <div>
            <p className="withdraw-text">Withdraw</p>
            <p className="sum-text">CHOOSE SUM (IN RUPEES)</p>
            <ul className="list">
              {denominationsList.map(amountValue => (
                <DenominationItem
                  key={amountValue.id}
                  cash={amountValue}
                  cashBtn={this.cashBTn}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
