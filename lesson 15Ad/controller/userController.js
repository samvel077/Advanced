class UserController {
    constructor(userOperation) {
        this.userOperation = userOperation
    }

    async getUser(option){
        const result = await this.userOperation.getUser(option)
        return result
    }
}

export default UserController