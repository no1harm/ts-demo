{
    class Calculator {
        public container;
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
        private output;
        private span;
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
        bindEvents(){
            this.container.addEventListener('click',(e)=>{
                if(e.target instanceof HTMLButtonElement){
                    let button = e.target
                    let value = button.textContent
                    if('0123456789.'.indexOf(value) >= 0){
                        if(this.operator){
                            if(this.n2){
                                this.n2 = parseInt(this.n2.toString() + value)
                            }else{
                                this.n2 = parseInt(value)
                            }
                            this.span.textContent = this.n2.toString()
                        }else{
                            if(this.n1){
                                this.n1 = parseInt(this.n1.toString() + value)
                            }else{
                                this.n1 = parseInt(value)
                            }
                            this.span.textContent = this.n1.toString()
                        }
                    }else if('+-×÷'.indexOf(value) >= 0){
                        this.operator = value
                    }else if('='.indexOf(value) >= 0){
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
                }
            })
        }
    }
    new Calculator()
}