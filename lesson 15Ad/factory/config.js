import * as Controller from './factory.js'

const configs = {
    'GET_USER': Controller.userController.getUser.bind(Controller.userController)
}

export default configs