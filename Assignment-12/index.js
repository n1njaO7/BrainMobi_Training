//1. super Keyword
class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    introduce() {
        return `I am ${this.name}, a ${this.role}.`;
    }
}

class Developer extends User {
    constructor(name, language) {
        super(name, "Developer");

        this.language = language;
    }

    introduce() {
        // Call the parent implementation.
        const parentMessage = super.introduce();

        return `${parentMessage} I use ${this.language}.`;
    }
}

const developer = new Developer("Ashmit", "JavaScript");

console.log(developer.introduce()); //I am Ashmit, a Developer. I use JavaScript.
console.log(developer.name);        //Ashmit
console.log(developer.language);    //JavaScript

