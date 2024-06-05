import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob.jsx";
import JobDetails from "../Pages/JobDetails"; // Ensure this import is added

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/post-job",
        element: <CreateJob />,
      },
      {
        path: "/salary",
        element: <SalaryPage />,
      },
      {
        path: "/my-job",
        element: <MyJobs />,
      },
      {
        path: "/edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`https://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
      },
    ],
  },
]);

export default router;
