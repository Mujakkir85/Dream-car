import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h2>Difference between Props & State</h2>
            <p> 1) Props are read-only.State changes can be asynchronous.Props are immutable but State is mutable.
                2) Props allow you to pass data from one component to other components as an argument.
                3) State holds information about the components
                4) Props can be accessed by the child component.	State cannot be accessed by child components.
                5) Props are used to communicate between components.	States can be used for rendering dynamic changes with the component.
                6) Props make components reusable.	State cannot make components reusable.</p>

            <h2>How Usestate works?</h2>
            <p>
                1) Usestate is a Hook  that allows you to have state variables in functional components.<br />
                2) You pass the initial state to this function and it returns a variable with the current state value  and another function to update this value. <br />
                3) In React you have to call Usestate Hooks at the top level  and you have to call Hooks from React functions. <b />
                4) Usestate Hook, the state can be any type, each piece of state carry a single value, which can be an object, an array, a boolean, or any other type.
            </p>
        </div>
    );
};

export default Question;