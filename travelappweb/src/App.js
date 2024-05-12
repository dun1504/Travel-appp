import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HistoryForm from "./HistoryForm";
import LoginForm from "./LoginForm";

import { getDatabase, ref, push, set } from "firebase/database";

import Render from "./Render.js";
import FavoritePlaces from "./FavoritePlaces.jsx";
import Place from "./Place.jsx";
import { setUserId } from "firebase/analytics";
const firebaseApp = require("./firebase.js");

const database = getDatabase(firebaseApp.FIREBASE_APP);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/formHistory",
    element: <>
    <HistoryForm/>
    <Render/>
    </>,
  },
  {
    path: "/favorite",
    element: <>
    <FavoritePlaces />
    <Place/>
    </>,
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router}>
        <LoginForm  />
        <HistoryForm />
        <Render  />
        <FavoritePlaces  />
        <Place  />
      </RouterProvider>

    </>
  );
}

export default App;
