import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login"; // Adjust path if necessary
import Notification from "./components/notification/Notification";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/Firebase";

const App = () => {

  useEffect(()=> {
    const unSub= onAuthStateChanged(auth,(user)=>{
      console.log(user.uid);
    })
    return ()=>{
      unSub();
    }
  },[])
  return (
    <div className="container">
      {user ? (
        <>
          <List user={user}/>
          <Chat user={user}/>
          <Detail user={user}/>
        </>
      ) :
       (
        <Login />
      )}
      <Notification/>
    </div>
  );
};

export default App;
