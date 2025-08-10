import config from "../config/services";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client()

    constructor() {
        this.client.setEndpoint(config.appwriteUrl)
        this.client.setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount( {email, password, name} ) {
        try {
            // console.log("data" , email,password, name );
             const userAccount = await this.account.create(ID.unique(), email, password, name)
             if (userAccount) {
                console.log("userAccount", userAccount);
                return this.login({email, password});
             }else{
                return userAccount;
             }
        } catch (error) {
           console.log("error in creating account", error);
        }
    }

    async login( {email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
          console.log("error in creating account", error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("App Write", error);
        }

        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService()

export default authService