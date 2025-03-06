
export default class UsersRepository{

    constructor(dao){
        this.dao = dao
    }

    getUserByEmail = async (emailjson) => {return await this.dao.getUserByEmail(emailjson)}

    createUser = async (newUser) => {
    
        return await this.dao.createUser(newUser)
    }

    getUserByID = async (id) => {return await this.dao.getUserByID(id)}

    updateOne = async (filter,change) => {return await this.dao.updateOne(filter,change)}

    current = async (user)=> {
        console.log("aaaaaaaaaa",user);
        return user
    }

}