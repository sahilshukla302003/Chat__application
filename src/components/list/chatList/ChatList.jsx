//npm i firebase
import { useEffect, useState } from "react"
import "./chatList.css"
import AddUser from "./addUser/addUser"
import { useUserStore } from "../../../lib/userstore";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/Firebase";


const ChatList=()=>{
    const [chats,setChats]=useState([]);
    const [addMode,setAddMode]=useState(false);

    const {currentUser} = useUserStore();

    useEffect(()=>{
        const unSub = onSnapshot(doc(db, "userChats", currentUser.id), (doc) => {
            setChats(doc.data());

            return ()=>{
                unSub();
            };
        });

    },[currentUser.id]);


    return (
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt=""/>
                    <input type="text" placeholder="Search"/>
                </div>
                <img src={addMode ?  "./minus.png":"./plus.png"} alt="" className="add"
                onClick={()=>setAddMode((prev)=>!prev)}
                />
                </div>
                {chats.map*((chat) => (
                <div className="item" key={chat.chatId}>
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Sahil Shukla</span>
                    <p>{chat.lastMessage}</p>
                </div>
                </div>
                ))}
                {addMode && <AddUser/>}
        </div>
    );
};
export default ChatList;