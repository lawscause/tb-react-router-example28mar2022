import { useState, useEffect } from "react";
//https://www.npmjs.com/package/react-uuid
import uuid from "react-uuid";
import "bootstrap/dist/css/bootstrap.min.css";
//https://www.w3schools.com/bootstrap5/bootstrap_forms.php
const Contact = () => {
  const [inputs, setInputs] = useState({});
  const [contact, setContact] = useState({});
  const [contacts, setContacts] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("contacts");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmitEvent = (e) => {
    e.preventDefault();
    const newId = uuid();
    const contactName = inputs.tbName;
    const contactEmail = inputs.tbEmail;
    const contactPhone = inputs.tbPhone;
    setContact({
      id: newId,
      name: contactName,
      email: contactEmail,
      phone: contactPhone,
    });
  };


  useEffect(() => {
    // storing input name

    console.log("useEffect A");
    console.log("useEffect-contacts contacts:", contacts);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    console.log("useEffect B");
    if(contact.name) {
      console.log("useEffect-contact contact:", contact);
      console.log("useEffect-contact contacts:", contacts);
      setContacts([contact, ...contacts]);
      console.log("useEffect-contact contacts:", contacts);
    }
    
  }, [contact]);

  return (
    <>
      <h1>Contact Me</h1>
      <form onSubmit={handleFormSubmitEvent}>
        <div className="mb-3 mt-3">
          <label htmlFor="tbName" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            placeholder="Enter Contact's Name"
            name="tbName"
            type="text"
            value={inputs.tbName || ""}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="tbEmail" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            placeholder="Enter Contact's Email"
            name="tbEmail"
            type="email"
            value={inputs.tbEmail || ""}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="tbPhone" className="form-label">
            Phone
          </label>
          <input
            className="form-control"
            placeholder="Enter Contact's Phone #"
            name="tbPhone"
            type="number"
            value={inputs.tbPhone || ""}
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone #</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map((contactInfo) => (
            <tr key={contactInfo.id}>
              <td>{contactInfo.name}</td>
              <td>{contactInfo.email}</td>
              <td>{contactInfo.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Contact;
/*
values(tbName: "Ma", tbEmail: "me@me.com", tbPhone: "000-000-0000");

event - onChange
target - tbName
value - "Mar"


{...values, [name]: value}
{ tbEmail: "me@me.com", tbPhone: "000-000-0000",tbName: "Mar"}

{ tbEmail: "me@me.com", tbPhone: "000-000-0000",tbName: "Mark"}
*/
