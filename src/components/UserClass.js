import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatarUrl: "dummyphoto"
            }
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/neenad99");
        const jsonData = await data.json();
        this.setState({ userInfo: jsonData });
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 text-center p-6">
                <img
                    src={avatar_url}
                    alt={`${name}'s avatar`}
                    className="w-25 h-25 rounded-full mx-auto mb-4"
                />
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{name}</h2>
                <h4 className="text-md text-gray-500 dark:text-gray-400">Contact: neenadkambli@gmail.com</h4>
                <a
                    href="https://github.com/neenad99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                    Visit my GitHub
                </a>
            </div>
        );
    }
}

export default UserClass;