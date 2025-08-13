import {useState} from "react";

export default function useItem() {
    let [name, setName] = useState('');
    let [password, setPassword] = useState("");
    let [item, setItem]  = useState( [] )
    let [id, setId] = useState(1);
    let [editId, setEditId] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        if(name === '' || password === '') {
            alert(`Name And password is requridd`)
            return;
        }
        if (editId) {
            setItem((prev) =>
                prev.map((item) =>
                    item.id === editId ? { ...item, name, password } : item
                )
            );
            setEditId(null);
            setName('')
            setPassword('')
        }else{
            let newId = id + 1;
            setId(newId);
            const newitem = {id, name, password}
            console.log(newitem);
            setItem([...item, newitem]);
            setName('')
            setPassword('')
        }

    }

    const handleClear = () => {
        setName('')
        setPassword('')
        setItem([])
    }
    const handleDelete = (id) => {
        setItem((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const handleUpdate = (item) => {
        setEditId(item.id);
        setName(item.name)
        setPassword(item.password)
    }

    return {name, setName, password, setPassword, id, setId, editId, setEditId, item, setItem , handleSubmit, handleDelete, handleUpdate, handleClear};
}
