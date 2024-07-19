let user = {};
let instance;
class UserStore {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance");
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
