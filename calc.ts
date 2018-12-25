{
    function createButton(text:string,container:HTMLElement,className:string){
        let button:HTMLButtonElement = document.createElement('button')
        button.textContent = text
        if(className){
            button.className = className
        }
        container.appendChild(button)
        return button
    }
    let container:HTMLDivElement = document.createElement('div')
    let output:HTMLDivElement = document.createElement('div')
    let span:HTMLSpanElement = document.createElement('span')
    span.textContent = '0'
    output.classList.add('output')
    output.appendChild(span)
    container.classList.add('container')
    container.appendChild(output)

    let n1:number
    let n2:number
    let operator:string
    
    container.addEventListener('click',function(e){
        if(e.target instanceof HTMLButtonElement){
            let button = e.target
            let value = button.textContent
            if('0123456789.'.indexOf(value) >= 0){
                if(operator){
                    if(n2){
                        n2 = parseInt(n2.toString() + value)
                    }else{
                        n2 = parseInt(value)
                    }
                    span.textContent = n2.toString()
                }else{
                    if(n1){
                        n1 = parseInt(n1.toString() + value)
                    }else{
                        n1 = parseInt(value)
                    }
                    span.textContent = n1.toString()
                }
            }else if('+-×÷'.indexOf(value) >= 0){
                operator = value
            }else if('='.indexOf(value) >= 0){
                if(operator === '+'){
                    span.textContent = (n1+n2).toString()
                }else if(operator === '-'){
                    span.textContent = (n1-n2).toString()
                }else if(operator === '×'){
                    span.textContent = (n1*n2).toString()
                }else if(operator === '÷'){
                    span.textContent = (n1/n2).toString()
                }
            }
        }
        console.log(n1,operator,n2)
    })
    document.body.appendChild(container)
    let buttonList:Array<Array<string>> = [
        ['Clear','÷'],
        ['7','8','9','×'],
        ['4','5','6','-'],
        ['1','2','3','+'],
        ['0','.','=']
    ]
    buttonList.forEach((divList:Array<string>)=>{
        let div:HTMLDivElement = document.createElement('div')
        div.classList.add('row')
        divList.forEach((buttonText:string)=>{
            createButton(buttonText,div,`button text-${buttonText}`)
        })
        container.appendChild(div)
    })
}