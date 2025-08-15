import  {configureStore} from "@reduxjs/toolkit"
import itemSlice from "./ItemSlice";

const store = configureStore( {
    reducer : {
        item : itemSlice
    }
});

export default store