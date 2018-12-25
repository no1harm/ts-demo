{
    function createButton(text, container, className) {
        var button = document.createElement('button');
        button.textContent = text;
        if (className) {
            button.className = className;
        }
        container.appendChild(button);
        return button;
    }
    var container_1 = document.createElement('div');
    var output = document.createElement('div');
    var span_1 = document.createElement('span');
    span_1.textContent = '0';
    output.classList.add('output');
    output.appendChild(span_1);
    container_1.classList.add('container');
    container_1.appendChild(output);
    var n1_1;
    var n2_1;
    var operator_1;
    container_1.addEventListener('click', function (e) {
        if (e.target instanceof HTMLButtonElement) {
            var button = e.target;
            var value = button.textContent;
            if ('0123456789.'.indexOf(value) >= 0) {
                if (operator_1) {
                    if (n2_1) {
                        n2_1 = parseInt(n2_1.toString() + value);
                    }
                    else {
                        n2_1 = parseInt(value);
                    }
                    span_1.textContent = n2_1.toString();
                }
                else {
                    if (n1_1) {
                        n1_1 = parseInt(n1_1.toString() + value);
                    }
                    else {
                        n1_1 = parseInt(value);
                    }
                    span_1.textContent = n1_1.toString();
                }
            }
            else if ('+-×÷'.indexOf(value) >= 0) {
                operator_1 = value;
            }
            else if ('='.indexOf(value) >= 0) {
                if (operator_1 === '+') {
                    span_1.textContent = (n1_1 + n2_1).toString();
                }
                else if (operator_1 === '-') {
                    span_1.textContent = (n1_1 - n2_1).toString();
                }
                else if (operator_1 === '×') {
                    span_1.textContent = (n1_1 * n2_1).toString();
                }
                else if (operator_1 === '÷') {
                    span_1.textContent = (n1_1 / n2_1).toString();
                }
            }
        }
        console.log(n1_1, operator_1, n2_1);
    });
    document.body.appendChild(container_1);
    var buttonList = [
        ['Clear', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];
    buttonList.forEach(function (divList) {
        var div = document.createElement('div');
        div.classList.add('row');
        divList.forEach(function (buttonText) {
            createButton(buttonText, div, "button text-" + buttonText);
        });
        container_1.appendChild(div);
    });
}
