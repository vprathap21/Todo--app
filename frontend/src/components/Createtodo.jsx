import { useState } from 'react';
export function Createtodo() {
    const [title,setTitle] = useState("");
    const [description,setdescription] = useState("");
    return (
        <div>
            <input style={{padding : 10,margin:10}} onChange={function(e) {
                setTitle(e.target.value);
            }} type="text" placeholder="title" ></input><br />
            <input style={{padding : 10,margin:10}} onChange={function(e) {
                setdescription(e.target.value);
            }}  type="text" placeholder="description" ></input><br />

            <button style={{padding : 10,margin:10}} onClick={
                function() {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title:title,
                            description:description
                        }),
                       headers: {
                              "content-type" : "application/json"
                        }
                    })
                    .then ( async function(res) {
                        const json = await res.json();
                        alert("todo added")

                })
            }
        }>Add a todo</button>
        </div>
       
    )
}