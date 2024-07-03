import React, { useEffect } from "react";
import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login"; // Adjust path if necessary
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/Firebase";
import { useUserStore } from "./lib/userstore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserInfo(user?.uid);
      } else {
        fetchUserInfo(null);
      }
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);


  if (isLoading) return <div className="loading">Loading....</div>;

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List user={currentUser} />
          <Chat user={currentUser} />
          <Detail user={currentUser} />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
