import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Person from '../Person/Person';
import './Persons.css';

const Persons = () => {
    const [persons, setPersons] = useState([]);
    useEffect(()=> {
        fetch('load.json')
        .then( res => res.json())
        .then( data => setPersons(data))
    },[])
    return (
        <div>
            <h3>Show person data</h3>
            <div className="{
                persons.map( person => <Person
                key={person._id}
                person={person}
                
                ></Person>)
            }">
            {
                persons.map( person => <Person
                key={person._id}
                person={person}
                ></Person>)
            }
            </div>
        </div>
    );
};

export default Persons;