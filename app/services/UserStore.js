let user = {};
let instance;
class UserStore {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance of userStore");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  setUser(_user) {
    user = _user;
  }

  getUser() {
    return user;
  }
}

const userStore = Object.freeze(new UserStore());
export default userStore;
