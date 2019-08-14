"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ReactColorSquare = function ReactColorSquare(props) {
  var width = props.width,
      height = props.height,
      color = props.color,
      text = props.text;
  return _react["default"].createElement("div", {
    style: {
      width: width || 100,
      height: height || 100,
      backgroundColor: color || "blue"
    }
  }, text);
};

var _default = ReactColorSquare;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZWFjdENvbG9yU3F1YXJlLmpzIl0sIm5hbWVzIjpbIlJlYWN0Q29sb3JTcXVhcmUiLCJwcm9wcyIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJ0ZXh0IiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLEtBQUssRUFBSTtBQUFBLE1BQ3RCQyxLQURzQixHQUNTRCxLQURULENBQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLE1BRGUsR0FDU0YsS0FEVCxDQUNmRSxNQURlO0FBQUEsTUFDUEMsS0FETyxHQUNTSCxLQURULENBQ1BHLEtBRE87QUFBQSxNQUNBQyxJQURBLEdBQ1NKLEtBRFQsQ0FDQUksSUFEQTtBQUU5QixTQUNFO0FBQ0UsSUFBQSxLQUFLLEVBQUU7QUFDTEgsTUFBQUEsS0FBSyxFQUFFQSxLQUFLLElBQUksR0FEWDtBQUVMQyxNQUFBQSxNQUFNLEVBQUVBLE1BQU0sSUFBSSxHQUZiO0FBR0xHLE1BQUFBLGVBQWUsRUFBRUYsS0FBSyxJQUFJO0FBSHJCO0FBRFQsS0FPR0MsSUFQSCxDQURGO0FBV0QsQ0FiSDs7ZUFjaUJMLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuY29uc3QgUmVhY3RDb2xvclNxdWFyZSA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgY29sb3IsIHRleHQgfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogd2lkdGggfHwgMTAwLFxyXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgfHwgMTAwLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvciB8fCBcImJsdWVcIlxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgZXhwb3J0IGRlZmF1bHQgUmVhY3RDb2xvclNxdWFyZTsiXX0=