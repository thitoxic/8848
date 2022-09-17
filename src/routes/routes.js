import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import Login from "../components/login"
import Clientlist from "../components/clientList"

const Routes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Clientlist />}>
        <Route path="/login" index element={<Login />} />
        <Route path="/register" index element={<Login />} />

      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Routes

