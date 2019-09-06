import React from "react";

const withClass = (WrappedComponent, className) => {
  // a function that returns a function component.
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
