import { useState } from 'react';

const ListRender = () =>{
    const [list] = useState(["Catia", "Luizinho", "Leonardo", "Matheus"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Catia", age: 49},
        {id: 2, name: "Luizinho", age: 52},
        {id: 3, name: "Leonardo", age: 22},
        {id: 4, name: "Matheus", age: 29}
    ]);

    const deleteRandom = () => {
        //  Math.floor: arredonda p/ baixo; 
        const randomNumber = Math.floor(Math.random() * 5);

        //resultado anterior dos usuários;
        //prev: "previous"/prévia; users: nome do state
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    );
};

export default ListRender;