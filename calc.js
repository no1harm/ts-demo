{
    var Calculator = /** @class */ (function () {
        function Calculator() {
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
        Calculator.prototype.bindEvents = function () {
            var _this = this;
            this.container.addEventListener('click', function (e) {
                if (e.target instanceof HTMLButtonElement) {
                    var button = e.target;
                    var value = button.textContent;
                    if ('0123456789.'.indexOf(value) >= 0) {
                        if (_this.operator) {
                            if (_this.n2) {
                                _this.n2 = parseInt(_this.n2.toString() + value);
                            }
                            else {
                                _this.n2 = parseInt(value);
                            }
                            _this.span.textContent = _this.n2.toString();
                        }
                        else {
                            if (_this.n1) {
                                _this.n1 = parseInt(_this.n1.toString() + value);
                            }
                            else {
                                _this.n1 = parseInt(value);
                            }
                            _this.span.textContent = _this.n1.toString();
                        }
                    }
                    else if ('+-×÷'.indexOf(value) >= 0) {
                        _this.operator = value;
                    }
                    else if ('='.indexOf(value) >= 0) {
                        var result = void 0;
                        if (_this.operator === '+') {
                            result = (_this.n1 + _this.n2).toString();
                        }
                        else if (_this.operator === '-') {
                            result = (_this.n1 - _this.n2).toString();
                        }
                        else if (_this.operator === '×') {
                            result = (_this.n1 * _this.n2).toString();
                        }
                        else if (_this.operator === '÷') {
                            result = (_this.n1 / _this.n2).toString();
                        }
                        _this.span.textContent = result;
                    }
                }
            });
        };
        return Calculator;
    }());
    new Calculator();
}
