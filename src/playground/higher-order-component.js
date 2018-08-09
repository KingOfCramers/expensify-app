// Higher Order Components (HOCs) are components that render another component.
// The goal of the HOCs are to:
  // 1. Reuse code.
  // 2. Render hijacking
  // 3. Prop manipulation
  // 4. Abstract state

import React from "react";
import ReactDOM from "react-dom";


// This is our original component...
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// These are our wrappers.
// We pass into it our intiial, boring component, which we call WrappedComponent (the Info component).
// It returns another component (which is a function), which we assign to AdminInfo.
// That function, AdminInfo, accepts the props argument.
// We specify that those props, when AdminInfo is rendered (called) are expanded and passed down to our original boring component.

const adminWarning = (WrappedComponent) => {
  return (props) => { // Return a FUNCTION, passing it our props.
    return (
      <div>
      { props.isAdmin ? ( <WrappedComponent {...props} /> ) : ( <p>User is not an Admin.</p> )}
      </div>
    )
  };
};

const authenticationWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? ( <WrappedComponent {...props} /> ) : ( <p>User is not authenticated.</p> )}
    </div>
  );
};

const allWarning = (WrappedComponent) => {
    return (props) => {
      return (
        <div>
        {(props.isAuthenticated && props.isAdmin)? ( <WrappedComponent {...props} /> ) : ( <p>User is not authenticated and an admin.</p> )}
        </div>
      );
    };
};
// This is our final HOC...
const AdminInfo = adminWarning(Info); // Returns alternative, higher order version of Info component.
const AuthInfo = authenticationWarning(Info);
const AllInfo = allWarning(Info)

// We render the HOC, which accepts { info: "these are the detaisl "}
ReactDOM.render(<AllInfo isAuthenticated={true} isAdmin={true} info={"these are the details"} />, document.getElementById("app"));
// The props passed into our higher order component are identified as
// "props" in our withAdminWarning function.