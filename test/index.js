import React from 'react';

var DefaultSvg = "data:image/svg+xml,%3Csvg%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%3E%3Cdefs%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M704%20640c-64%2064-64%20128-128%20128s-128-64-192-128-128-128-128-192%2064-64%20128-128S256%2064%20192%2064%200%20256%200%20256c0%20128%20131.488%20387.488%20256%20512s384%20256%20512%20256c0%200%20192-128%20192-192S768%20576%20704%20640z%22%2F%3E%3C%2Fsvg%3E";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ReactSvg = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends({
  className: styles["icon"] || "icon",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
}, props), /*#__PURE__*/React.createElement("defs", null), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128S256 64 192 64 0 256 0 256c0 128 131.488 387.488 256 512s384 256 512 256c0 0 192-128 192-192S768 576 704 640z"
})));

var JsonSvg = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16"},"children":[{"name":"defs","type":"element","value":"","attributes":{},"children":[]},{"name":"path","type":"element","value":"","attributes":{"fill":"#fff","d":"M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128S256 64 192 64 0 256 0 256c0 128 131.488 387.488 256 512s384 256 512 256c0 0 192-128 192-192S768 576 704 640z"},"children":[]}]};

var DataURLSvg = "data:image/svg+xml,%3Csvg%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%3E%3Cdefs%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M704%20640c-64%2064-64%20128-128%20128s-128-64-192-128-128-128-128-192%2064-64%20128-128S256%2064%20192%2064%200%20256%200%20256c0%20128%20131.488%20387.488%20256%20512s384%20256%20512%20256c0%200%20192-128%20192-192S768%20576%20704%20640z%22%2F%3E%3C%2Fsvg%3E";

var Base64Svg = "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxkZWZzLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNzA0IDY0MGMtNjQgNjQtNjQgMTI4LTEyOCAxMjhzLTEyOC02NC0xOTItMTI4LTEyOC0xMjgtMTI4LTE5MiA2NC02NCAxMjgtMTI4UzI1NiA2NCAxOTIgNjQgMCAyNTYgMCAyNTZjMCAxMjggMTMxLjQ4OCAzODcuNDg4IDI1NiA1MTJzMzg0IDI1NiA1MTIgMjU2YzAgMCAxOTItMTI4IDE5Mi0xOTJTNzY4IDU3NiA3MDQgNjQweiIvPjwvc3ZnPg==";

const svgList = [
  DefaultSvg,
  ReactSvg,
  JsonSvg,
  DataURLSvg,
  Base64Svg,
];

export { svgList };
