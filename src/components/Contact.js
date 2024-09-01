const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Contact Us</h1>
            <form className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-4">
                <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
                <textarea 
                    placeholder="Message" 
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    rows="4"
                />
                <button 
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;