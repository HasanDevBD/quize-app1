import React from "react";
// import { Route, Routes } from "react-router-dom";
import Nav from "../Nav/Nav";
import classes from "./Leyout.module.css";
function Main({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children} </div>
      </main>
    </>
  );
}

export default Main;
