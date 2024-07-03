import { auth } from "../../lib/Firebase"
import "./detail.css"
const Detail=()=>{
    return (
        <div className='detail'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Avi</h2>
                <p>Radhe Radhe</p>

            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://imgs.search.brave.com/JoI2_D_wFO8SeI3N66Wvz7mZv6e2RMeFb9cCUD8YwiI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZ2l5/dS10b21pb2thLXBp/Y3R1cmVzLTd0NDR3/OGs1aHhpanA2NG8u/anBn" alt="" />
                                <span>
                                    Photo_2024_2.png
                                </span>
                            </div>
                        <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://imgs.search.brave.com/JoI2_D_wFO8SeI3N66Wvz7mZv6e2RMeFb9cCUD8YwiI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZ2l5/dS10b21pb2thLXBp/Y3R1cmVzLTd0NDR3/OGs1aHhpanA2NG8u/anBn" alt="" />
                                <span>
                                    Photo_2024_2.png
                                </span>
                            </div>
                        <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://imgs.search.brave.com/JoI2_D_wFO8SeI3N66Wvz7mZv6e2RMeFb9cCUD8YwiI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZ2l5/dS10b21pb2thLXBp/Y3R1cmVzLTd0NDR3/OGs1aHhpanA2NG8u/anBn" alt="" />
                                <span>
                                    Photo_2024_2.png
                                </span>
                            </div>
                        <img src="./download.png" alt="" className="icon"/>
                        </div>                
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block Users</button>
                <button className="logout" onClick={()=>auth.signOut()}>Logout</button>
            </div>

        </div>
    )
}

export default Detail