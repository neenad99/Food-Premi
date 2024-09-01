import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name : "Dummy",
                location : "Default",
                avatarUrl : "dummyphoto"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/neenad99");
        const jsonData = await data.json();

        this.setState({userInfo: jsonData});
    }

    render(){
        
        const {name,location,avatar_url} = this.state.userInfo;
        return (
            <div>
                <img src={avatar_url}/>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : neenadkambli@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;