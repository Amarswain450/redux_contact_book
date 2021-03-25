import React from 'react'
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { deleteContact } from '../../actions/contactAction';

const Contact = ({contact, selectAll}) => {
    const dispatch = useDispatch();
    const {name, phone, email, id} = contact;
    return (
        <>
           <tr>
        <td>
        <div className="">
    <input type="checkbox" checked={selectAll} className="" value="" />
</div>
        </td>
        <td><Avatar name={name} size="45" round={true} className="mr-2" />{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>
            <Link to={`/editContact/${id}`}><i className="fas fa-pen mr-2"></i></Link>
            <button onClick={() => dispatch(deleteContact(id))}><i className="fas fa-trash"></i></button>
        </td>
      </tr>  
        </>
    )
}

export default Contact
