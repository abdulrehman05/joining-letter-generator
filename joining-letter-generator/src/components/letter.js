import React, { Component } from 'react'; import Form, { Datac } from './form'; import './style.css';
class Letter extends Component {
  constructor(props) { { super(props); }; }
  render() {
    return (<div>
      <Datac.Consumer>
        {value => <div id="letter"><span>{value.data.companyName}</span><br /><br /><span>{value.data.date}</span><br /><br /><span>{value.data.contact}</span><br /><br />Subject: Employment Offer | <span>{value.data.companyName}</span><br /><br />Dear <span>{value.data.firstName}</span>,<br />We at <span>{value.data.companyName}</span> are pleased to offer you the position of <span>{value.data.designation}</span> in our <span>{value.data.department}</span>.<br /><br /> Your starting date will be <span>{value.data.startingDate}</span>. The starting salary is <span>{value.data.salary}</span> per year paid on a [biweekly/monthly] basis by direct deposit. value offer of employment is contingent on you passing a pre-employment background check and signing standard confidentiality agreements.<br /><br />If you choose to accept value job offer, please sign and return value letter at your earliest convenience by <span>{value.data.OfferExpDate}</span>. Once your acceptance has been received, we will send you information about onboarding and other asset details. Congratulations! We look forward to working with you. Please let me know if you have any questions or concerns.<br /><br />Sincerely,<br /><br /><span>{value.data.senderName}</span><br /><br /><span>{value.data.companyName}</span></div>}
      </Datac.Consumer>
    </div>)
  }
} export default Letter;