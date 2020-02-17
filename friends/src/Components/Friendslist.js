import React from 'react';
import axios from 'axios';
// import Loader from "react-loader-spinner";
import { axiosWithAuth } from "../utils/axiosWithAuth";


class FriendsList extends React.Component {
    state = {
        friends: [],
        name: "",
        age: "",
        email: ""
    };

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        });
    };
    handleAgeChange = e => {
        this.setState({
            age: e.target.value
        });
    };
    handleEmailChange = e => {
        this.setState({
            email: e.target.value
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
                value={this.state.name}
                onChange={this.handleNameChange}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.handleAgeChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
            </div>
            <button>Add Friend</button>
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