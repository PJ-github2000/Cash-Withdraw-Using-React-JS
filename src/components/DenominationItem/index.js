/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
// Write your code here
import './index.css'

const DenominationItem = props => {
  const {cash, cashBtn} = props
  const {value} = cash

  const amountButton = () => {
    cashBtn(value)
  }
  return (
    <li className="value-text">
      <button className="button" type="button" onClick={amountButton}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
