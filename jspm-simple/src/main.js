'use strict';
import $ from 'jquery'

class User {
	constructor(name) {
		this._name = name
	}
	name() { return this._name }
}

class Greeter {
	greet(user) {
		$(document.body).append(`Hi ${user.name() }!`)
	}
}

new Greeter().greet(new User('Doge'))