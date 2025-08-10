import React, {useEffect, useState} from "react";
import {Container, PostForm} from '../'
import service from "../../appwrite/appwrite-config";
import {useNavigate, useParams} from "react-router-dom"

export default function EditPost() {
    const [post, setPost] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect( () => {
        if(slug) {
            service.getPosts(slug).then((post) => {
                if(post){
                    setPost(post)
                }
            })
        }else{
            navigate('/')
        }
    }, [slug, navigate])
    return post ?  
        <div className="py-8">
            <Container>
                <PostForm post={post}
                />
            </Container>
        </div>
    : null
}