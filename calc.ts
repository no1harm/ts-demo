{
    class Calculator {
        public container:HTMLDivElement;
        public n1:number;
        public n2:number;
        public operator:string;
        public buttonList:Array<Array<string>> = [
            ['Clear','÷'],
            ['7','8','9','×'],
            ['4','5','6','-'],
            ['1','2','3','+'],
            ['0','.','=']
        ];
        private output:HTMLDivElement;
        private span:HTMLSpanElement;
        constructor(){
            this.createContainer()
            this.createOutput()
            this.createButtons()
            this.bindEvents()
        }
        createButton(text:string,container:HTMLElement,className:string){
            let button:HTMLButtonElement = document.createElement('button')
            button.textContent = text
            if(className){
                button.className = className
            }
            container.appendChild(button)
            return button
        }
        createContainer(){
            let container:HTMLDivElement = document.createElement('div')
            container.classList.add('container')
            document.body.appendChild(container)
            this.container = container
        }
        createOutput(){
            let output:HTMLDivElement = document.createElement('div')
            let span:HTMLSpanElement = document.createElement('span')
            span.textContent = '0'
            output.classList.add('output')
            output.appendChild(span)
            this.container.appendChild(output)
            this.output = output
            this.span = span
        }
        createButtons(){
            this.buttonList.forEach((divList:Array<string>)=>{
                let div:HTMLDivElement = document.createElement('div')
                div.classList.add('row')
                divList.forEach((buttonText:string)=>{
                    this.createButton(buttonText,div,`button text-${buttonText}`)
                })
                this.container.appendChild(div)
            })
        }
        updateNumber(name:string,value:string){
            if(this[name]){
                this[name] = parseInt(this[name].toString() + value)
            }else{
                this[name] = parseInt(value)
            }
            this.span.textContent = this[name].toString()
        }
        updateNumbers(value){
            if(this.operator){
                this.updateNumber('n2',value)
            }else{
                this.updateNumber('n1',value)
            }
        }
        updateResult(){
            let result
            if(this.operator === '+'){
                result = (this.n1+this.n2).toString()
            }else if(this.operator === '-'){
                result = (this.n1-this.n2).toString()
            }else if(this.operator === '×'){
                result = (this.n1*this.n2).toString()
            }else if(this.operator === '÷'){
                result = (this.n1/this.n2).toString()
            }
            this.span.textContent = result
        }
        updateNumberOrOperator(value){
            if('0123456789.'.indexOf(value) >= 0){
                this.updateNumbers(value)
            }else if('+-×÷'.indexOf(value) >= 0){
                this.operator = value
            }else if('='.indexOf(value) >= 0){
                this.updateResult()
            }
        }
        bindEvents(){
            this.container.addEventListener('click',(e)=>{
                if(e.target instanceof HTMLButtonElement){
                    let button = e.target
                    let value = button.textContent
                    this.updateNumberOrOperator(value)                
                }
            })
        }
    }
    new Calculator()
}