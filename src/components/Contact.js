const Contact = () => {
    return (
        <div>
            <h1 className="p-2 m-2 text-lg font-bold">Contact Us</h1>
            <form>
                <input type="text" placeholder="Name" className="p-2 m-2 border border-black"/>
                <input type="text" placeholder="Message" className="p-2 m-2 border border-black"/>
                <button className="p-2 m-2 border border-black">Submit</button>
            </form>
        </div>
    );
}

export default Contact; 