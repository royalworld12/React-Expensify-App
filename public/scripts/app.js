'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecionApp = function (_React$Component) {
    _inherits(IndecionApp, _React$Component);

    function IndecionApp(props) {
        _classCallCheck(this, IndecionApp);

        var _this = _possibleConstructorReturn(this, (IndecionApp.__proto__ || Object.getPrototypeOf(IndecionApp)).call(this, props));

        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteAll = _this.handleDeleteAll.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecionApp, [{
        key: 'handleDeleteAll',
        value: function handleDeleteAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(option) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (res) {
                        return res !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            console.log(this.state.options[randomNum]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid option';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Option already exist';
            }

            this.setState(function (prevState) {
                return {
                    options: [].concat(_toConsumableArray(prevState.options), [option])
                };
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var data = JSON.parse(localStorage.getItem('options'));
                if (data) {
                    this.setState(function () {
                        return { options: data };
                    });
                }
            } catch (error) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevOpt, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var subTitle = 'Put your life in hands of computer';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subTitle: subTitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options, deleteAll: this.handleDeleteAll, removeOne: this.handleDeleteOption }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecionApp;
}(React.Component);

IndecionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subTitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision App'
};

var Action = function Action(props) {
    return React.createElement(
        'button',
        { disabled: !props.hasOptions, onClick: props.handlePick },
        'What Should I do?'
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: props.options.length < 1, onClick: props.deleteAll },
            'Remove All'
        ),
        props.options && props.options.length < 1 && React.createElement(
            'p',
            null,
            'Please add options'
        ),
        props.options && props.options.length > 0 && props.options.map(function (res) {
            return React.createElement(Option, { key: res, option: res, removeOne: props.removeOne });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.option,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.removeOne(props.option);
                } },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var addHandler = function addHandler(e) {
                e.preventDefault();

                var option = e.target.option.value;
                var error = _this3.props.handleAddOption(option);
                console.log(error);
                _this3.setState(function () {
                    return { error: error };
                });
                if (!error) {
                    e.target.option.value = '';
                }
            };
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: addHandler },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        { type: 'submit' },
                        'Add Options'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecionApp, null), document.getElementById('root'));
