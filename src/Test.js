import React, { useState, useEffect } from "react";

const APIURL = "https://jsonplaceholder.typicode.com/users";

function App() {
    const [data, setData] = useState([]);
    const[name,setName]=useState([])


    const getUsers = () => {
        fetch(APIURL)
            .then((res) => res.json())
            .then((data) => {
                setData(
                    data.map((x) => {
                        return x.name
                    })  
                )
                console.log("data",data.map((x) => {
                    return x.name
                }));
            });

    };
    const sortList = () => {

        //write code here
        // sort the user list by name's length
        // on first click list will sorted in assending order
        // on second click list will be sorted in descending order
        // on third click default list will be rendered
        // on fourth click again start form step 1

        setData(data.sort((a, b) => b.length - a.length))
        console.log("sort arr", data)
    };

    return (
        <main>

            {data.map((x) => <h1>{x}</h1>)}

            <div>
                <button style={{ backgroundColor: "blue" }} onClick={getUsers}>Get Users</button>
                <br />
                <button style={{ backgroundColor: "red" }} onClick={sortList}>Sort list by name's length</button>
            </div>
            <ul>{/*render the list of the users */}</ul>
        </main>
    );
}

export default App;
