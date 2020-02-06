export class User {

    name: string;
    surname: string;
    age: number;
    profession: string;

    constructor(name: string, surname: string, age: number, profession: string) {

        this.name = name;
        this.surname  = surname;
        this.age       = age;
        this.profession = profession;
    }

    toString(): string {
        return 'Prénom: ' + this.name + ' Nom: ' + this.surname + ' Age: ' + this.age;
    }

    // fullName(): string {
    //     return 'Prénom: ' + this.firstname + ' Nom: ' + this.lastname + ' Age: ' + this.age;
    // }
}
