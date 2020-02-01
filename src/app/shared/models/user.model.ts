export class User {
    firstname: string;
    lastname: string;
    age: number;

    constructor(firstname: string, lastname: string, age: number) {

        this.firstname = firstname;
        this.lastname  = lastname;
        this.age       = age;
    }

    toString(): string {
        return 'Prénom: ' + this.firstname + ' Nom: ' + this.lastname + ' Age: ' + this.age;
    }

    // fullName(): string {
    //     return 'Prénom: ' + this.firstname + ' Nom: ' + this.lastname + ' Age: ' + this.age;
    // }
}
