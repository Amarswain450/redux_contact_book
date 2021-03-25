import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { clearAllContact, deleteAllContact, selectAllContact } from '../../actions/contactAction';
import Contact from './Contact';

const Contacts = () => {
    const dispatch = useDispatch();
    const [selectAll, setSelectAll] = useState(false)
    const contacts = useSelector(state => state.contact.contacts);
    const selectedContacts = useSelector(state => state.contact.selectedContacts);
    // console.log(contactDatas);
    useEffect(() => {
        if(selectAll){
            dispatch(selectAllContact(contacts.map((contact) => contact.id)));
        }else{
            dispatch(clearAllContact());
        }
    }, [selectAll]);
    return (
        <>
        {
            selectedContacts.length > 0 ? (<button className="btn btn-danger" onClick={() => dispatch(deleteAllContact())}>delete contact</button>) : null
        }
            <div className="container mt-5">
            <table className="table shadow">
    <thead className="table-dark">
      <tr>
        <th>
        <div className="">
    <input id="selectAll" type="checkbox" className="" value={selectAll} onClick={() => setSelectAll(!selectAll)} />
</div>
        </th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody className="table-primary">
        {
            contacts.map(contact => (
                <Contact contact={contact} key={contact.id} selectAll={selectAll} />
            ))
        }
    </tbody>
  </table>
            </div> 
        </>
    )
}

export default Contacts
