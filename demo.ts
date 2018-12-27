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
    // interface
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
{
    // class
    class Human {
        name:string
        age:number
        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }
        say(){
            console.log(`I'm ${this.name}`)
        }
    }
    let jack = new Human('jack',18)
    jack.say()
}
{
    // super
    class Animal {
        kindOf:string
        constructor(kindOf){
            this.kindOf = kindOf
        }
        move(){
            console.log('moving...')
        }
    }
    class Human extends Animal {
        name:string
        age:number
        constructor(name:string,age:number){
            super('Marine Mammal')
            this.name = name
            this.age = age
        }
        say(){
            console.log(`I'm ${this.name}`)
        }
    }
    let jack = new Human('jack',18)
    console.log(jack.kindOf)
}
{   
    // static
    class Animal {
        kindOf:string
        constructor(kindOf){
            this.kindOf = kindOf
        }
        move(){
            console.log('moving...')
        }
    }
    class Human extends Animal {
        static hair = 'none'
        name:string
        age:number
        constructor(name:string,age:number){
            super('Marine Mammal')
            this.name = name
            this.age = age
        }
        say(){
            console.log(`I'm ${this.name}`)
        }
    }
    let jack = new Human('jack',18)
    console.log(Human.hair)
}
{
    // public
    class Human {
        static hair = 'none'
        public name:string
        public age:number
        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }
        say(){
            console.log(`I'm ${this.name}`)
        }
    }
    let jack = new Human('jack',18)
    console.log(jack.name)
}
{
    // private
    class Human {
        static hair = 'none'
        private name:string
        public age:number
        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }
        say(){
            console.log(`I'm ${this.name}`)
        }
    }
    let jack = new Human('jack',18)
    jack.say()
}
{
    // protected
    class Animal {
        protected kindOf:string
        constructor(kindOf){
            this.kindOf = kindOf
        }
    }
    class Human extends Animal {
        public name:string
        public age:number
        constructor(name:string,age:number){
            super('Marine Mammal')
            this.name = name
            this.age = age
        }
        say(){
            console.log(`I'm ${this.kindOf}`)
        }
    }
    let jack = new Human('jack',18)
    jack.say()
}
{
    // getter/setter
    class Human {
        private _username:string
        get username():string{
            return this._username
        }
        set username(newValue){
            if(newValue === "123456"){
                this._username = 'none'
            }else{
                this._username = newValue
            }
        }
    }
    let jack = new Human()
    jack.username = '123456'
    console.log(jack.username) // 'none'
    jack.username = 'jack'
    console.log(jack.username) // 'jack'
}
{
    // abstract
    abstract class Animal {
        public kindOf:string
        abstract eat():void
    }
    class Human extends Animal{
        public name:string
        constructor(name:string){
            super()
            this.name = name
        }
        eat(){
            console.log('rice')
        }
    }
    let jack = new Human('jack')
    jack.eat()  //"rice"
}