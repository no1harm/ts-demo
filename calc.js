{
    var Calculator = /** @class */ (function () {
        function Calculator() {
            this.n1 = null;
            this.n2 = null;
            this.operator = null;
            this.result = null;
            this.buttonList = [
                ['Clear', '÷'],
                ['7', '8', '9', '×'],
                ['4', '5', '6', '-'],
                ['1', '2', '3', '+'],
                ['0', '.', '=']
            ];
            this.createContainer();
            this.createOutput();
            this.createButtons();
            this.bindEvents();
        }
        Calculator.prototype.createButton = function (text, container, className) {
            var button = document.createElement('button');
            button.textContent = text;
            if (className) {
                button.className = className;
            }
            container.appendChild(button);
            return button;
        };
        Calculator.prototype.createContainer = function () {
            var container = document.createElement('div');
            container.classList.add('container');
            document.body.appendChild(container);
            this.container = container;
        };
        Calculator.prototype.createOutput = function () {
            var output = document.createElement('div');
            var span = document.createElement('span');
            span.textContent = '0';
            output.classList.add('output');
            output.appendChild(span);
            this.container.appendChild(output);
            this.output = output;
            this.span = span;
        };
        Calculator.prototype.createButtons = function () {
            var _this = this;
            this.buttonList.forEach(function (divList) {
                var div = document.createElement('div');
                div.classList.add('row');
                divList.forEach(function (buttonText) {
                    _this.createButton(buttonText, div, "button text-" + buttonText);
                });
                _this.container.appendChild(div);
            });
        };
        Calculator.prototype.updateNumber = function (name, value) {
            if (this[name]) {
                this[name] += value;
            }
            else {
                this[name] = value;
            }
            this.span.textContent = this[name];
        };
        Calculator.prototype.updateNumbers = function (value) {
            if (this.operator) {
                this.updateNumber('n2', value);
            }
            else {
                this.updateNumber('n1', value);
            }
        };
        Calculator.prototype.updateResult = function () {
            var result;
            var n1 = parseFloat(this.n1);
            var n2 = parseFloat(this.n2);
            if (this.operator === '+') {
                result = n1 + n2;
            }
            else if (this.operator === '-') {
                result = n1 - n2;
            }
            else if (this.operator === '×') {
                result = n1 * n2;
            }
            else if (this.operator === '÷') {
                result = n1 / n2;
            }
            result = result.toPrecision(12).replace(/0+$/g, '').replace(/0+e/g, '');
            this.span.textContent = result;
            this.n1 = null;
            this.n2 = null;
            this.operator = null;
            this.result = result;
        };
        Calculator.prototype.updateNumberOrOperator = function (value) {
            if ('0123456789.'.indexOf(value) >= 0) {
                this.updateNumbers(value);
            }
            else if ('+-×÷'.indexOf(value) >= 0) {
                if (this.n1 === null) {
                    this.n1 = this.result;
                }
                this.operator = value;
            }
            else if ('='.indexOf(value) >= 0) {
                this.updateResult();
            }
            else if ("Clear".indexOf(value) >= 0) {
                this.n1 = null;
                this.n2 = null;
                this.operator = null;
                this.result = null;
                this.span.textContent = '0';
            }
        };
        Calculator.prototype.bindEvents = function () {
            var _this = this;
            this.container.addEventListener('click', function (e) {
                if (e.target instanceof HTMLButtonElement) {
                    var button = e.target;
                    var value = button.textContent;
                    _this.updateNumberOrOperator(value);
                }
            });
        };
        return Calculator;
    }());
    new Calculator();
}
