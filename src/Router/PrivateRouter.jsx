import { useState } from "react";
import MyJobs from "../Pages/MyJobs";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useEffect } from "react";
import Login from "../Pages/Login";

const PrivateRouter = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        // ...
        setLoggedIn(true);
        console.log(`User ${email} is logged in`);
      } else {
        // User is signed out
        // ...
        setLoggedIn(false);
        console.log("user is logged out");
      }
    });
  }, []);

  if (loggedIn) {
    return <MyJobs />;
  } else {
    return <Login />;
  }
};

export default PrivateRouter;
