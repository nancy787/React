import config from "../config/services";
import { Client , ID, Databases, Query } from "appwrite";

export class Service{
    client = new Client()
    databases;
    
    constructor() {
        this.client.setEndpoint(config.appwriteUrl)
        this.client.setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client)
    }

    async createPost( {title, content, feature_image, status, user_id, slug}) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId,
                slug, 
                {
                    title, 
                    content,
                    feature_image,
                    status,
                    user_id,
                }
            )
        } catch (error) {
            console.log("eroor in post", error);
        }
    }

    async updatePost( slug, {title, content, feature_image, status}) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    feature_image,
                    status
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("error in deleting posts ", error);
            return false;
        }
    }
    
    async getPost(slug) {
        // try {
            console.log(slug);
            return await this.databases.getDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId,
                slug
            )
        // } catch (error) {
        //     console.log('failed to getting posts');
        //     return false
        // }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }
}

const service =  new Service()
export default service