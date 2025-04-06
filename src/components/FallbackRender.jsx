import React from "react";

const FallbackRender = ({ error }) => {
  //console.log(error);
  return (
    <div role="alert" style={{ color: "red", padding: "1rem" }}>
      <h2>Something went wrong!</h2>
      <pre>{error.message}</pre>
      <pre>{error.stack}</pre>
    </div>
  );
};

export default FallbackRender;
