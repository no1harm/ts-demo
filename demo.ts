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
{
    function fn(a:number,b = 3):void{
        console.log(a + b)
    }
    fn(4)  
    fn(4,4)
}
{
    function add(a:number,...restArgs:string[]):void{
        console.log(a + restArgs.join(''))
    }  
    add(1,'1','2','3')  // "1123"
}
{
    // 泛型
    function returnIt<X>(a:X):X{
        return a
    }
    let a = returnIt(1)
    let b = returnIt('1')
    console.log(typeof a,typeof b)  // number string
}
{
    // 泛型变量
    function returnArray<T>(a:T[]):T[]{
        return a
    }
    let arr = returnArray([1,2,3])
    console.log(arr)    // [1,2,3]
}
{
    interface Human {
        name:string;
        age:number;
    }
    function returnHuman<T>(a:T):T{
        return a
    }
    let jack:Human = returnHuman<Human>({name:'jack',age:18})
    console.log(jack)
}
{
    interface hasLength {
        lenght:number
    }
    function getLength<T extends hasLength>(arg:T):T{
        console.log(arg.lenght)
        return arg
    }
    let rect = getLength({lenght:30,height:20})
    console.log(rect)   //{lenght: 30, height: 20}
}
{
    interface resetThis{
        name:string
    }
    function printThis(this:resetThis){
        console.log(this)
    }
    printThis.call({name:'jack'})
}
{
    // this
    interface resetThis{
        name:string
    }
    function t1(this:resetThis){
        console.log(this)   // {name:'jack'}
        function t2(){
            console.log(this)   // window/global/undefined
        }
        t2()  // 等同于 t1.t2.call() 所以他的 this 是 undefined
    }
    t1.call({name:'jack'})
}