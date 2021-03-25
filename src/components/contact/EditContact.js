import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { useHistory, useParams } from "react-router-dom";
import { addContact, getContact, updateContact } from '../../actions/contactAction';

const EditContact = () => {
    const {id} = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector(state => state.contact.contact);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if(contact != null){
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id));
    },[contact]);

    const updateHandler = (e) => {
        e.preventDefault();

        const update_contact = Object.assign(contact, {
            name: name,
            phone: phone,
            email: email
        });
        console.log(update_contact);
        dispatch(updateContact(update_contact));
        history.push("/");
    }

    return (
        <>
            <div className="container mt-5">
                <div className="card shadow">
                    <div className="card-header bg-success text-white">
                        Update Contact
                    </div>
                    <div className="card-body bg-teal">
                    <form onSubmit={(e) => updateHandler(e)}>
                    <div className="mb-3">
    <input type="text" 
    className="form-control" 
    placeholder="Enter your name" 
    value={name} 
    onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <input type="text" 
    className="form-control" 
    placeholder="Enter your number" 
    value={phone} 
    onChange={(e) => setPhone(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <input type="email" 
    className="form-control" 
    placeholder="Enter your email" 
    value={email} 
    onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <button type="submit" className="btn btn-primary">Update Contact</button>
</form>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default EditContact
