import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    Databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.Databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({Title, slug, Content, FeaturedImage, Status, UserId}){
        try {
            return await this.Databases.createDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,{
                    Title,
                    Content,
                    FeaturedImage,
                    Status,
                    UserId,

                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost(slug, {Title, Content, FeaturedImage, Status}){
        try {
            return await this.Databases.updateDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,{
                    Title,
                    Content,
                    FeaturedImage,
                    Status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.Databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            await this.Databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false
        }
    }

    async getPosts(Queries = [Query.equal("Status", "active")]){
        try {
            return await this.Databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                Queries,
                
                
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
        }
    }

    // file upload services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile( 
                 conf.appwriteBucketId,
                 ID.unique(),
                 file
            )

        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;

        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    async getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
           
    }
}


const service = new Service()
export default service
