export class User {
  constructor(private name: String) { }
  getName() {
    return this.name
  }
}

export class Greeter {
  greet(user) {
    return `Hello, ${user.getName() }!`
  }
}

let greeter = new Greeter()
let doge = new User('Sir Doge')

console.log(greeter.greet(doge))
