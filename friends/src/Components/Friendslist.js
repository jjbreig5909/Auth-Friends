import React from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";
import { axiosWithAuth } from "../utils/axiosWithAuth";


class FriendsList extends React.Component {
    state = {
        friends: [],
        newFriend: {
            name: "",
            age: "",
            email: "",
            id: 1
        },
        isLoading: true
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
            friends: res.data,
            isLoading: false
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
        <div className="friend-form">
            <div className="add-friend">
            <h2>Add a Friend!</h2>
            <div className="add-friend-input">
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
            <div className="friends-list">
                    {this.state.isLoading ? (
                        <Loader
                            type="Audio"
                            color="#E02A48"
                            height={100}
                            width={200}
                            timeout={3000} //3 secs
                        />
                    ) : (
                            <>
                                {this.state.friends.map(friend => (
                                    <div className="friend" key={friend.id}>{friend.name}</div>
                                ))}
                            </>
                        )}
            </div>
        </div>
        )
    }
}

export default FriendsList;