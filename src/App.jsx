import React from "react";
import Layout from "./components/Layout";
import { ErrorBoundary } from "react-error-boundary";
import FallbackRender from "./components/FallbackRender";
// import ErrorBoundaryCustom from "./components/ErrorBoundaryCustom";

function App() {
  return (
    <ErrorBoundary FallbackComponent={FallbackRender}>
      <Layout />
    </ErrorBoundary>
  );
}

export default App;
