import { useEffect, useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/addUser";
import { useUserStore } from "../../../lib/userstore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/Firebase";

const ChatList = () => {
    const [chats, setChats] = useState([]);
    const [addMode, setAddMode] = useState(false);
    const { currentUser } = useUserStore();

    useEffect(() => {
        if (!currentUser || !currentUser.id) return;

        const unSub = onSnapshot(doc(db, "userChats", currentUser.id), async (res) => {
            const data = res.data();
            if (!data || !data.chats) {
                setChats([]);
                return;
            }
            const items = data.chats;

            const promises = items.map(async (item) => {
                try {
                    const userDocRef = doc(db, "users", item.receiverId);
                    const userDocSnap = await getDoc(userDocRef);
                    const user = userDocSnap.data();
                    return { ...item, user };
                } catch (error) {
                    console.error("Error fetching user data:", error);
                    return { ...item, user: null };
                }
            });

            const chatData = await Promise.all(promises);
            setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
        });

        return () => {
            unSub();
        };
    }, [currentUser]);

    return (
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt=""/>
                    <input type="text" placeholder="Search"/>
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className="add"
                    onClick={() => setAddMode((prev) => !prev)}
                />
            </div>
            {chats.map((chat) => (
                <div className="item" key={chat.chatId}>
                    <img src={chat.user?.avatar || "./avatar.png"} alt=""/>
                    <div className="texts">
                        <span>{chat.user?.username || "Unknown User"}</span>
                        <p>{chat.lastMessage}</p>
                    </div>
                </div>
            ))}
            {addMode && <AddUser />}
        </div>
    );
};

export default ChatList;
