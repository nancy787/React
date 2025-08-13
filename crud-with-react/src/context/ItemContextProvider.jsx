import React from "react";
import ItemContext from "./ItemContext";
import useItem from "../hooks/useItem";

export default function  ItemContextProvider({children}) {

    const { name, setName, password, setPassword, id, setId, editId, setEditId, item, setItem , handleSubmit, handleDelete, handleUpdate, handleClear } = useItem();
    return (
        <ItemContext.Provider value={{ name, setName, password, setPassword, id, setId, editId, setEditId, item, setItem , handleSubmit, handleDelete, handleUpdate, handleClear }}>
            {children}
       </ItemContext.Provider>
    )
}
