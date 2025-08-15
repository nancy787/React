import { Outlet } from 'react-router-dom'
import {Header, Footer} from '../pages/index'

export default function Nav() {
    return( 
        <>
            <Header/>
                <Outlet/>
            <Footer/>
        </>
    )
}