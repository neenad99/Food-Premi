import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Any side effects can go here
    }

    render() {
        return (
            <div className="min-h-screen bg-gray-100 dark:bg-[#1a1a1a] dark:text-[#f1f1f1] p-6 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-8">About</h1>
                <UserClass />
            </div>
        );
    }
}

export default About;