import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HistoryForm from "./HistoryForm";
import LoginForm from "./LoginForm";

import { getDatabase, ref, push, set } from "firebase/database";

import RenderHistory from "./RenderHistory.jsx";
import FavoritePlaces from "./FavoritePlaces.jsx";
import Place from "./Place.jsx";
import { setUserId } from "firebase/analytics";
import FestivalForm from "./FestivalForm.jsx";
import RenderFestival from "./RenderFestival.jsx";
import ArticleForm from "./ArticalForm.jsx";
const firebaseApp = require("./firebase.js");

const database = getDatabase(firebaseApp.FIREBASE_APP);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/formHistory",
    element: (
      <>
        <HistoryForm />
        <RenderHistory />
      </>
    ),
  },
  {
    path: "/formFestival",
    element: (
      <>
        <FestivalForm />
        <RenderFestival />
      </>
    ),
  },
  {
    path: "/formArtical",
    element: (
      <>
        <ArticleForm />
        {/* <RenderFestival /> */}
      </>
    ),
  },
  {
    path: "/favorite",
    element: (
      <>
        <FavoritePlaces />
        <Place />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <LoginForm />
        <HistoryForm />
        <RenderHistory />
        <FestivalForm />
        <RenderFestival />
        <FavoritePlaces />
        <Place />
      </RouterProvider>
    </>
  );
}

export default App;
