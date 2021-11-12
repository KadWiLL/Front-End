import http from '../http-common'

class UserService  {
    getAllUsers(){
        return http.get("/users")
    }

    getProfile(id){
        //return http.get("/user/1")
        return http.get(`/user/${id}`)
    }

    makePost(){
        return http.post("/post/save")
    }
}

export default new UserService()