import http from '../http-common'

class UserService  {
    getAllUsers(){
        return http.get("/users")
    }

    getAllPosts(){
        return http.get("/users/posts")
    }

    getProfile(id){
        //return http.get("/user/1")
        return http.get(`/user/${id}`)
    }

    makePost(id){
        return http.post(`/users/${id}/posts`)
    }

    makePost2(id, data){
        return http.post(`/users/${id}/posts`, data)
    }

    findUser(){
        return http.post(`/users/email`)
    }

    deletePost(id){
        return http.delete(`/post/${id}`)
    }

    findUserByEmail(email){
        return http.get(`/find/${email}`)
    }
}

export default new UserService()