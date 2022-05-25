import { transformToDataURL, transformToDataURLBase64, transformToJSON, transformToReact } from '../index';

const svg = `<svg xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="10" y="10" height="100" width="100"
    style="stroke:#ff0000; fill: #0000ff"/>
</svg>`;

test('transformToDataURL', () => {
  expect(transformToDataURL(svg)).toBe('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%3Crect%20x%3D%2210%22%20y%3D%2210%22%20height%3D%22100%22%20width%3D%22100%22%0A%20%20%20%20style%3D%22stroke%3A%23ff0000%3B%20fill%3A%20%230000ff%22%2F%3E%0A%3C%2Fsvg%3E');
});

test('transformToDataURLBase64', () => {
  expect(transformToDataURLBase64(svg)).toBe('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxyZWN0IHg9IjEwIiB5PSIxMCIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiCiAgICBzdHlsZT0ic3Ryb2tlOiNmZjAwMDA7IGZpbGw6ICMwMDAwZmYiLz4KPC9zdmc+');
})

const react = `function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.protransformTotype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
export default (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink"
}, props), /*#__PURE__*/React.createElement("rect", {
  x: "10",
  y: "10",
  height: "100",
  width: "100",
  style: {
    stroke: "#ff0000",
    fill: "#0000ff"
  }
})));`

test('transformToReact', () => {
  expect(transformToReact(svg)).toBe(react);
});

test('transformToJSON', () => {
  expect(transformToJSON(svg)).toEqual({"attributes": {"xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink"}, "children": [{"attributes": {"height": "100", "style": "stroke:#ff0000; fill: #0000ff", "width": "100", "x": "10", "y": "10"}, "children": [], "name": "rect", "type": "element", "value": ""}], "name": "svg", "type": "element", "value": ""});
});
