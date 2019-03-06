import React from 'react';

const person = (props) => {
    return (
        <div>
        <p>I'm {props.name} and I am {props.age} years old! {props.hobbies}, baby!</p>
        <p>{props.children}</p>
        </div>
        );
};

//children is a reserved word.
//execute one line expressions. can use functions if we need more complex information
//this is a function that returns some jsx
//also have to do the imports and exports

export default person;


/// components are awesome because they are small and maintainable, configurable, and reusable
//should be dynamic depending on user input