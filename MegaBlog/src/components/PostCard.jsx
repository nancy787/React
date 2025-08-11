import React from "react";
import FileService from '../appwrite/files'
import {Link} from 'react-router-dom'

function PostCard({$id, title, feature_image}){
    console.log(FileService.getFilePreview(feature_image));
    console.log($id, title, feature_image);
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl-p4">
                <div className="w-full justify-center mb-4">
                <img src={feature_image && FileService.getFilePreview(feature_image)} alt={title}
                className="rounded-xl" />
                </div>
            </div>
            <h2 className="text-xl font-bold">{title}</h2>
        </Link>
    )
}
export default PostCard