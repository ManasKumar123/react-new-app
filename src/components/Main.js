const Main = () => {
    const clickHandle = () => {
        alert("Hello World")
    }
    
    return (
        <div className="mainWrap flexboxCenter" >
            <div className="mainCont">
                <h1>My content Title Here</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores quidem hic provident, error enim harum facere sunt corporis atque dolorem deleniti laudantium est architecto quaerat eum ex quam repellendus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores quidem hic provident, error enim harum facere sunt corporis atque dolorem deleniti laudantium est architecto quaerat eum ex quam repellendus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores quidem hic provident, error enim harum facere sunt corporis atque dolorem deleniti laudantium est architecto quaerat eum ex quam repellendus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores quidem hic provident, error enim harum facere sunt corporis atque dolorem deleniti laudantium est architecto quaerat eum ex quam repellendus.</p>
                <button className="button" onClick={clickHandle}>Click here</button>
            </div>
        </div>
    );
};

export default Main
