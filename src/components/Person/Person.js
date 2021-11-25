import React from 'react';
import { addToDb, deleteFromDb } from '../LocalStorage/LocalStorage';


const Person = (props) => {
    // console.log(props.person);
    const { name, phone, email} =props.person;
// const { name, balance, phone, email, picture} =props.person;

     const handlePurchase = phone => {

        //set to local storage
        console.log(phone);
        addToDb(phone);


     }
     const handleRemove = phone => {
         deleteFromDb(phone);
     }

    return (
        <div style={{backgroundColor:'yellowgreen', border:'5px solid black', borderRadius:'10px',margin:'15px'}}>
            <h2>{props.person.name}</h2>
            <h2>{props.person.phone}</h2>
            <h2>{props.person.email}</h2>
            <button onClick={()=> handlePurchase(phone)}>Purchase</button>
            <button onClick={() => handleRemove(phone)}>Remove</button>
        </div>
    );
};

export default Person;

//email, phone,
/*
<img src={props.person.picture} alt="picture" /> 
<h2>Balance: {props.person.balance}</h2> 
 <h2>Picture: {props.person.picture}</h2> 
*/