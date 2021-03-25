import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { useHistory } from "react-router-dom";
import { addContact } from '../../actions/contactAction';

const AddContact = () => {
    let history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const new_contact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email
        }
        dispatch(addContact(new_contact));
        history.push("/");
    }

    return (
        <>
            <div className="container mt-5">
                <div className="card shadow">
                    <div className="card-header bg-success text-white">
                        Add Contact
                    </div>
                    <div className="card-body bg-teal">
                    <form onSubmit={(e) => submitHandler(e)}>
                    <div className="mb-3">
    <input type="text" 
    className="form-control" 
    placeholder="Enter your name" 
    value={name} 
    onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div class="mb-3">
    <input type="number" 
    className="form-control" 
    placeholder="Enter your number" 
    value={phone} 
    onChange={(e) => setPhone(e.target.value)}
    />
  </div>
  <div class="mb-3">
    <input type="email" 
    className="form-control" 
    placeholder="Enter your email" 
    value={email} 
    onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <button type="submit" className="btn btn-primary">Create Contact</button>
</form>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default AddContact
