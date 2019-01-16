// Higher Order Component (HOC) - A componenet (HOC) that renders another component(regular)
// Reuse code
// Render hijacking
// Prop Manipulation
// Abstract state



import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

// Steps to create high order component
//1. create a function that takes a component as an argument
//2. create high level component from the return of running the function with the componenet passed in
//3. use Arg. WrappedComponent
//4. return a new component from function created in step 1.
//5. pass the message you want to display on the regular component
//6. create an instance of the regular component
//7. pass the high level component from step 2 into DOM.render()
//8. if you pass in props to the higher order component you must use {...props} inside the WrappedComponent



const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info.  Please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Please log in.  You are currently not authenticated</p>)}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));