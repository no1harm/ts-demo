{
    class Calculator {
        public container:HTMLDivElement;
        public n1:string = null;
        public n2:string = null;
        public operator:string = null;
        public result:string = null;
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
        updateNumber(name:string,value:string):void{
            if(this[name]){
                this[name] += value
            }else{
                this[name] = value
            }
            this.span.textContent = this[name]
        }
        updateNumbers(value):void{
            if(this.operator){
                this.updateNumber('n2',value)
            }else{
                this.updateNumber('n1',value)
            }
        }
        updateResult():void{
            let result
            let n1 = parseFloat(this.n1)
            let n2 = parseFloat(this.n2)
            if(this.operator === '+'){
                result = n1 + n2
            }else if(this.operator === '-'){
                result = n1 - n2
            }else if(this.operator === '×'){
                result = n1*n2
            }else if(this.operator === '÷'){
                result = n1/n2
            }
            result = result.toPrecision(12).replace(/0+$/g,'').replace(/0+e/g,'')
            this.span.textContent = result
            this.n1 = null
            this.n2 = null
            this.operator = null
            this.result = result
        }
        updateNumberOrOperator(value){
            if('0123456789.'.indexOf(value) >= 0){
                this.updateNumbers(value)
            }else if('+-×÷'.indexOf(value) >= 0){
                if(this.n1 === null){
                    this.n1 = this.result
                }
                this.operator = value
            }else if('='.indexOf(value) >= 0){
                this.updateResult()
            }else if("Clear".indexOf(value) >= 0){
                this.n1 = null
                this.n2 = null
                this.operator = null
                this.result = null
                this.span.textContent = '0'
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