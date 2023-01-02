import React, { createContext, Component } from 'react';
import './style.css';
import Letter from './letter';
import html2pdf from 'html2pdf.js'
export const Datac = React.createContext();
class Form extends Component {
  constructor(props) {
    {
      super(props);
      this.companyName = React.createRef();
      this.date = React.createRef();
      this.contact = React.createRef();
      this.firstName = React.createRef();
      this.designation = React.createRef();
      this.department = React.createRef();
      this.startingDate = React.createRef();
      this.salary = React.createRef();
      this.offerExpDate = React.createRef();
      this.senderName = React.createRef();
      this.state =
      {
        companyName: "[Company Name]",
        date: "[date]", contact: "[Contact]",
        firstName: "[Employee's First Name]",
        designation: "[Designation]",
        department: "[Department]",
        startingDate: "[Starting Date]",
        salary: "[Amount]",
        offerExpDate: "[OFfer Expiry Date]",
        senderName: "[Sender's name]"
      }
    }
  }
  log = (e) => { e.preventDefault(); this.setState({ companyName: this.companyName.current.value, date: this.date.current.value, contact: this.contact.current.value, firstName: this.firstName.current.value, designation: this.designation.current.value, department: this.department.current.value, startingDate: this.startingDate.current.value, salary: this.salary.current.value, offerExpDate: this.offerExpDate.current.value, senderName: this.senderName.current.value, }); this.setState({ state: this.state }); };
  generate() {
     const letter = document.querySelector('#letter'); 
     html2pdf(letter); 
    }
  toggleon() {
     const formv = document.querySelector('.form'); 
     const toggleoff = document.querySelector('#toggleoff'); 
     const toggleon = document.querySelector('#toggleon'); 
     toggleon.style.display = "none"; 
     toggleoff.style.display = "block"; 
     formv.style.left = "-100%" } 
  toggleoff() { 
    const formv = document.querySelector('.form'); 
    const toggleoff = document.querySelector('#toggleoff'); 
    const toggleon = document.querySelector('#toggleon'); 
    toggleon.style.display = "block"; 
    toggleoff.style.display = "none"; 
    formv.style.left = "0px" 
    }
  render() {
    return (
    <div>
      <button className="toggle" onClick={this.toggleon} id="toggleon">Hide</button>
      <button id="toggleoff" style={{ display: 'none' }} className="toggle" onClick={this.toggleoff}>Show</button>
      <form id="form" className="form" onSubmit={this.log}> 
      <label>Company Name</label> 
      <input required type="text" placeholder="Company Name" name="companyName" ref={this.companyName} /> 
      <label>Date</label> 
      <input required type="date" name="date" ref={this.date} />
      <label>Email or Phone</label>
      <input required type="text" placeholder="Email or Phone" name="contact" ref={this.contact} />
      <label>Employee First Name</label>
      <input required type="text" placeholder="Employee First Name" name="firstName" ref={this.firstName} />
      <label>Designation</label>
      <input required type="text" placeholder="Designation" name="designation" ref={this.designation} />
      <label>Department</label><input required type="text" placeholder="Department" name="department" ref={this.department} />
      <label>Starting Date</label>
      <input required type="date" name="startingDate" ref={this.startingDate} />
      <label>Salary</label>
      <input required type="number" placeholder="Salary" name="salary" ref={this.salary} />
      <label>Offer Expiry Date</label> 
      <input required type="date" placeholder="Offer Expiry Date" name="offerExpDate" ref={this.offerExpDate} />
      <label>Sender Name</label>
      <input required type="text" placeholder="Sender Name" name="senderName" ref={this.senderName} />
      <button>Preview</button>
      <button type="submit" onClick={this.generate}>Generate</button>
      </form>
      <div>
        <Datac.Provider value={{ data: this.state, }}>
          <Letter>
          </Letter>
        </Datac.Provider>
      </div>
    </div>)
  }
}
export default Form;