import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login"; // Adjust path if necessary
import Notification from "./components/notification/Notification";

const App = () => {
  const user = false; // Example: Set user to true to render List, Chat, and Detail

  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
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
