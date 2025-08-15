import React, { act } from "react";
import { createSlice} from "@reduxjs/toolkit"

const initialState  = {
    items : [],
    editItem : null,
    name : '',
    password : '',
}

export const itemSlice = createSlice( {
    name : 'item',
    initialState,
    reducers : {
        setName : (state, action) => {
            state.name =  action.payload
        },
        setPassword : (state, action) => {
            state.password = action.payload
        },
        addItem : (state, action) => {
            const item = {
                id : action.payload.id,
                name : action.payload.name,
                password : action.payload.password,
            }
            state.items.push(item)
            console.log("state.items", state.items);
        },
        setEditItem : (state, action) => {
            state.editItem = action.payload
            console.log(state.editItem);
        },
        updateItem : (state, action)  => {
            const {id, name, password} = action.payload;
            const item  = state.items.find( (item) => item.id = id)
            if(item) {
                item.id = id,
                item.name  = name,
                item.password = password
            }
            console.log("item dd", item);

        },
        deleteItem : (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload )
        },
        resetItem : (state) => {
            state.items = [],
            state.password = '',
            state.name =''
        }
    }
});

export const {addItem, updateItem, deleteItem, setEditItem, resetItem,setName, setPassword} = itemSlice.actions

export default itemSlice.reducer