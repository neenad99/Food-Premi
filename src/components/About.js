import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        return (
            <div className="dark:bg-[#1a1a1a] dark:text-[#f1f1f1]">
                <h1>About</h1>
                <h2>This is the About section</h2>
                <UserClass/>
            </div>
        );
    }
}

export default About;
