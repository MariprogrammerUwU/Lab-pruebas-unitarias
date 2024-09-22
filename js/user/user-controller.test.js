const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('find user by id', () => {
    const user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    
    const foundUser = userController.findById(1234);
    expect(foundUser).toEqual(user);
});

test('find user by id not found', () => {
    const foundUser = userController.findById(5678);
    expect(foundUser).toBeUndefined();
});

