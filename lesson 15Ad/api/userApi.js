import { API_URL } from '../url.js'

class UserApi {
    getUser(options) {
        return fetch(`${API_URL}/${options}`)
    }
}

export default UserApi