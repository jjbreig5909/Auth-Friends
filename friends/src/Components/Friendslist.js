import React from 'react';
import axios from 'axios';
// import Loader from "react-loader-spinner";
import { axiosWithAuth } from "../utils/axiosWithAuth";


class FriendsList extends React.Component {
    state = {
        friends: []
    };

componentDidMount() {
    this.getData();
}

getData= () => {
    axiosWithAuth()
    .get("/friends")
    .then(res=>{
        console.log(res);
        this.setState({
            friends: res.data
        })
    })
}

    render() {

        return(
        <div>
            {this.state.friends.map(friend=>(
                <div>
                  <p>{friend.name}</p>
                </div>
            ))}
        </div>
        )
    }
}

export default FriendsList;