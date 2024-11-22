import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import About from "./About";
import Projects from "./Projects";
import LegoAlarmClock from "./Lego-Alarm-Clock";
import LegoRacer from "./Lego-Racer";
import ExercisesFolderAssignment from "./Exercises-Folder-Assignement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/lego-alarm-clock",
    element: <LegoAlarmClock />,
  },
  {
    path: "/lego-racer",
    element: <LegoRacer />,
  },
  {
    path: "/exercises-folder-assignment",
    element: <ExercisesFolderAssignment />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
