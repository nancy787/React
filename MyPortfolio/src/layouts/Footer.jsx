import React from "react";
import { Link } from "react-router-dom";
import girlImage from "../assets/girl.png";
import {SocialLinks} from "../pages/index";

function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center">
                        <img
                            src={girlImage}
                            className="mr-3 h-16"
                            alt="Logo"
                        />
                    </Link>
            <SocialLinks/>
        </div>
        </footer>
    )
}

export default Footer