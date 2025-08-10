import React from "react";
import {FileService} from '../appwrite/files'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}){
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl-p4">
                
                <div className="w-full justify-center mb-4">
                    <img src={FileService.getFilePreview(featuredImage)} alt={title} />
                </div>
            </div>
            <h2 className="text-xl font-bold">{title}</h2>
        </Link>
    )
}
export default PostCard