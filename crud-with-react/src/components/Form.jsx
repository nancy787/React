import React, {useState, useEffect} from "react";
import ShowData from "../components/ShowData";
import { useDispatch, useSelector } from "react-redux";
import { addItem,resetItem, updateItem, setName, setPassword } from "../stores/ItemSlice";

function Form() {
    const dispatch = useDispatch();
    // let [name, setName] = useState('');
    // let [password, setPassword] = useState("");
    let [id, setId] = useState(1);
    const {editItem, name, password} = useSelector( (state) => state.item);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!editItem) {
            let newId = setId(id+1)
            if(name === ' ' || password === '') {
                alert('name and password is requrid')
                return ;
            }
            let value = { id, name, password}
            dispatch(addItem(value));
        }else{
            dispatch(updateItem( { id: editItem.id, name, password }))
        }
    }
    

    return(
        <div className="w-full">
            <div className="text-center"></div>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
            <label htmlFor="label" className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username {name}
            </label>
            <input 
                className="shadow appearance-none border 
                rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={name}
                onChange={(e) =>dispatch(setName(e.target.value))}
                placeholder="Username"/>
            </div>
            <div className="mb-6">
            <label htmlFor="label"
                className="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
            </label>
            <input 
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" 
            type="password" 
            placeholder="******************"
            onChange={(e) => dispatch(setPassword(e.target.value))}
            value={password}
            />
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>

            <div className="flex items-center justify-between">
            <button type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                {editItem ? 'Update' : 'Add'}
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
            </a>
            </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
            <div>
                <ShowData/>
            </div>
            <button type="button" 
                onClick={(e) => dispatch(resetItem())}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
                clearForm
            </button>
        </div>
    )
}   

export default Form;