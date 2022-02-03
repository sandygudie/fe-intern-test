import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/index";
import Login from "./pages/Login";

const App = () => {
  return (
    <Layout>

      <Login />
    </Layout>
  );
};

export default App;
