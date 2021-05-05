class UserOperation {
    constructor(userApi) {
        this.userApi = userApi
    }

    async getUser(option) {
        const response = await this.userApi.getUser(option)
        const data = await response.json()
        return data
    }
}


export default UserOperation