import UserController from '../controller/userController.js'
import UserApi from '../api/userApi.js'
import UserOperation from '../operation/userOperation.js'


const userApi = new UserApi()

const userOperation = new UserOperation(userApi)

const userController = new UserController(userOperation)

export {
    userController
}