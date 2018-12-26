{
    class Student {
        fullName: string;
        constructor(public firstName, public middleInitial, public lastName) {
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
    }

    interface Person {
        firstName: string;
        lastName: string;
    }

    function greeter(person: Person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }

    let user = new Student("Jane", "M.", "User");
    console.log(greeter(user))
}

{
    interface Calculator {
        (no1: number, no2: number): number
    }
    let add: Calculator = function (a: number, b: number): number {
        return a + b
    }

    console.log(add(1, 2))
}

{
    interface Animal extends Water {
        run(): void
    }
    interface Water {
        needWater: boolean
    }
    interface Human extends Animal {
        name: string,
        age: number
    }
    let jack: Human = {
        name: 'jack',
        age: 66,
        needWater: true,
        run() {
            console.log(`I'm ${this.name}`)
        }
    }

    jack.run()
}

