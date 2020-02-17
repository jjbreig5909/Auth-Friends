import React from 'react';
import axios from 'axios';
// import Loader from "react-loader-spinner";
import { axiosWithAuth } from "../utils/axiosWithAuth";


class FriendsList extends React.Component {
    state = {
        friends: [],
        newFriend: {
            name: "",
            age: "",
            email: "",
            id: 1
        }
    };

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        });
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

addFriend = () => {
    axiosWithAuth()
    .post("/friends", this.state.newFriend)
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
            <div>
            <h2>Add a Friend!</h2>
            <div className="add-friend">
                <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.newFriend.name}
                onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={this.state.newFriend.age}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.newFriend.email}
                    onChange={this.handleChange}
                />
            </div>
            <button onClick={this.addFriend}>Add Friend</button>
            </div>  
            <div>
                {this.state.friends.map(friend=>(
                    <div>
                    <p>{friend.name}</p>
                    </div>
                ))}
            </div>
        </div>
        )
    }
}

export default FriendsList;