import config from "../config/services";
import { Client , ID, Storage } from "appwrite";

export class FileService{
    client = new Client();
    storage;

    constructor() {
        this.client.setEndpoint(config.appwriteUrl)
        this.client.setProject(config.appwriteProjectId)
        this.storage = new Storage(this.client)
    }

    async uploadFile(file) {
        try {
            await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log('errro in uploading file', error);
            return false
        }
    }
    
    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log('error in deleting files', error);  
            return false;
        }
    }
    
    getFilePreview(fileId) {
        try {
            return this.storage.getFilePreview(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log('error in file preview', error);
        }
    }
}

const fileService = new FileService()
export default fileService;
