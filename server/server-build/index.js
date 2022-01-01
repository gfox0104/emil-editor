(()=>{"use strict";var e={n:r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},d:(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};const r=require("express");var t=e.n(r);const n=require("body-parser");var a=e.n(n);const o=require("react");var i=e.n(o);const p=require("react-dom/server");var c=e.n(p);const l=require("@material-ui/core/CssBaseline");var u=e.n(l);const s=require("@material-ui/core/styles"),b=require("lodash");var g=e.n(b);const f=require("@material-ui/core");var y=["none","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 2px 2px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 8px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 5px 8px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 6px 12px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 7px 12px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 6px 16px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 7px 16px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 8px 18px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 9px 18px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 10px 20px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 11px 20px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 12px 22px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 13px 22px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 14px 24px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 16px 28px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 18px 30px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 20px 32px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 22px 34px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 24px 36px -8px rgba(0,0,0,0.50)"],x="LIGHT",d={direction:"ltr",typography:{h1:{fontWeight:500,fontSize:35,letterSpacing:"-0.24px"},h2:{fontWeight:500,fontSize:29,letterSpacing:"-0.24px"},h3:{fontWeight:500,fontSize:24,letterSpacing:"-0.06px"},h4:{fontWeight:500,fontSize:20,letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:16,letterSpacing:"-0.05px"},h6:{fontWeight:500,fontSize:14,letterSpacing:"-0.05px"},overline:{fontWeight:500}},overrides:{MuiLinearProgress:{root:{borderRadius:3,overflow:"hidden"}},MuiListItemIcon:{root:{minWidth:32}},MuiChip:{root:{backgroundColor:"rgba(0,0,0,0.075)"}}}},m=[{name:x,overrides:{MuiInputBase:{input:{"&::placeholder":{opacity:1,color:f.colors.blueGrey[600]}}}},palette:{type:"light",action:{active:f.colors.blueGrey[600]},background:{default:f.colors.common.white,dark:"#f4f6f8",paper:f.colors.common.white},primary:{main:f.colors.indigo[600]},secondary:{main:"#5850EC"},text:{primary:f.colors.blueGrey[900],secondary:f.colors.blueGrey[600]}},shadows:["none","0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)","0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)"]},{name:"ONE_DARK",palette:{type:"dark",action:{active:"rgba(255, 255, 255, 0.54)",hover:"rgba(255, 255, 255, 0.04)",selected:"rgba(255, 255, 255, 0.08)",disabled:"rgba(255, 255, 255, 0.26)",disabledBackground:"rgba(255, 255, 255, 0.12)",focus:"rgba(255, 255, 255, 0.12)"},background:{default:"#282C34",dark:"#1c2025",paper:"#282C34"},primary:{main:"#8a85ff"},secondary:{main:"#8a85ff"},text:{primary:"#e6e5e8",secondary:"#adb0bb"}},shadows:y},{name:"UNICORN",palette:{type:"dark",action:{active:"rgba(255, 255, 255, 0.54)",hover:"rgba(255, 255, 255, 0.04)",selected:"rgba(255, 255, 255, 0.08)",disabled:"rgba(255, 255, 255, 0.26)",disabledBackground:"rgba(255, 255, 255, 0.12)",focus:"rgba(255, 255, 255, 0.12)"},background:{default:"#2a2d3d",dark:"#222431",paper:"#2a2d3d"},primary:{main:"#a67dff"},secondary:{main:"#a67dff"},text:{primary:"#f6f5f8",secondary:"#9699a4"}},shadows:y}];function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){v(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var j=(0,o.forwardRef)((function(e,r){var t=e.container,n=e.item,a=e.xs,o=(e.alignContent,e.justifyContent),p=e.children,c=e.style,l=e.id;return t&&!n?i().createElement("table",{style:h(h({width:"100%"},c),{},{tableLayout:"fixed",borderSpacing:"0"}),cellSpacing:"0"},i().createElement("tbody",{align:o,style:{width:"100%"}},p)):i().createElement("tr",null,i().createElement("td",{style:{padding:0}},i().createElement("div",{style:h({},c)},i().createElement("div",{id:l,style:h({},"Main"!==l?{width:"".concat(100/12*a,"%")}:{}),className:"Main"===l?"mainClass":null},p))))}));j.defaultProps={alignContent:"center",justifyContent:"left",item:!1,container:!1,xs:12,style:{}};var w=["props","id","parentStyle","style"];function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function S(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?E(Object(t),!0).forEach((function(r){D(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function D(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var I=function(e){var r=e.children,t=e.style,n=e.parentStyle,a=e.props;return i().createElement(j,{item:!0,style:n,xs:a.xs,id:a.id},i().createElement(j,{container:!0,style:k(k({},t),{},{backgroundImage:"url("+t.backgroundImage+")",backgroundRepeat:"no-repeat",backgroundSize:"cover"}),alignItems:a.alignItems},i().createElement(i().Fragment,null,r)))};const C=require("html-react-parser");var T=e.n(C),q=["props","parentStyle","style"];var B=["props","style","parentStyle"];function M(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function R(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function A(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?z(Object(t),!0).forEach((function(r){N(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function N(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var W=(0,f.makeStyles)((function(e){return{}}));require("@material-ui/icons/PlayCircleOutlineOutlined");var G=["props","style","parentStyle"];function L(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function F(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var H=["style","parentStyle"];function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function U(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function X(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?X(Object(t),!0).forEach((function(r){J(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function J(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var K=function(){return K=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},K.apply(this,arguments)},V={Text:function(e){var r=e.props,t=e.style,n=e.parentStyle,a=(W(),A({},n));a.backgroundImage="url("+a.backgroundImage+")";var o=["p","h1","h2","h3","h4","h5","h6"],p=r.html,c={replace:function(e){var r=e.attribs,t=e.children,n=e.name;if(r){var a=(0,C.attributesToProps)(r);if(o.includes(n)){var p=A(A({},a.style),{},{whiteSpace:"pre-wrap",wordBreak:"normal",wordWrap:"normal"});return i().createElement(f.Typography,{variant:"p"===n?"body2":n,style:p},(0,C.domToReact)(t,c))}return"hr"===n||"br"===n?i().createElement(n,a):i().createElement(n,a,(0,C.domToReact)(t,c))}}};return i().createElement(j,{item:!0,xs:12,style:a},i().createElement(f.Box,{className:"braft-output-content",style:t},T()(p,c)))},Container:function(e){var r=e.children,t=e.id,n=e.style,a=e.parentStyle,o=e.props,p=o.containerType,c=r.filter((function(e){return e.props.children.length>0}));return i().createElement(I,{id:t,style:n,parentStyle:a,props:o},p>1?i().createElement("tr",null,c.map((function(e,r){return i().createElement("td",{key:e.props.id,width:"".concat(100/p,"%"),style:{padding:0},id:"containerCol"},i().createElement(j,{container:!0},e))}))):i().createElement(i().Fragment,null,r))},Button:function(e){var r=e.props,t=e.id,n=e.parentStyle,a=e.style,o=(function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}}(e,w),function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?P(Object(t),!0).forEach((function(r){S(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},n));return o.backgroundImage="url("+o.backgroundImage+")",i().createElement(j,{id:t,item:!0,xs:12,style:Object.assign({textAlign:o.align},o)},i().createElement(f.Button,{href:r.path,target:"_blank",style:Object.assign({display:"inline-block"},a)},r.text))},Image:function(e){var r=e.props,t=e.style,n=e.parentStyle,a=(function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}}(e,B),function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?M(Object(t),!0).forEach((function(r){R(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},n));return a.backgroundImage="url("+a.backgroundImage+")",i().createElement(j,{item:!0,xs:12,style:Object.assign({textAlign:a.align},a)},i().createElement("a",{href:r.path,target:r.linkTarget,style:{pointerEvents:"#"===r.path?"none":"auto"}},i().createElement("img",{src:r.src,width:t.width,alt:r.altText,style:t})))},Video:function(e){var r=e.props,t=e.style,n=e.parentStyle,a=(function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}}(e,G),function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?L(Object(t),!0).forEach((function(r){F(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},n));return a.backgroundImage="url("+a.backgroundImage+")",i().createElement(j,{item:!0,xs:12,style:Object.assign({textAlign:a.align},a)},r.src?i().createElement(i().Fragment,null,i().createElement("video",{style:t,controls:!0},i().createElement("source",{src:r.src,type:"video/mp4"}),"Your browser does not support HTML video.")):i().createElement("img",{style:t,src:"https://raven-images.s3.ap-south-1.amazonaws.com/images/placeholder_video.jpg"}))},HtmlBox:function(e){var r=e.props,t=e.parentStyle;return e.style,function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}}(e,q),i().createElement(j,{item:!0,xs:12,style:t},i().createElement("div",{dangerouslySetInnerHTML:{__html:r.html}}))},CustomDivider:function(e){var r=e.style,t=e.parentStyle,n=(function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}}(e,H),function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){U(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},t));return n.backgroundImage="url("+n.backgroundImage+")",i().createElement(j,{item:!0,xs:12,style:n,alignContent:"center"},i().createElement(f.Divider,{style:r}))},Resizer:I,BodyWrapper:function(e){e.style;var r=e.id,t=e.children;return i().createElement(j,{container:!0,id:r,alignContent:"center",justifyContent:"center"},t)}};function $(e,r){return g().find(e,(function(e){return e.id===r}))}var Q=function e(r,t,n){void 0===t&&(t="ROOT"),void 0===n&&(n=[]);var a=r[t];if(!a)throw new Error("Could not find node "+t);return n.push(K({id:t},a)),g().each(a.nodes,(function(t){n.push.apply(n,e(r,t))})),g().each(a.linkedNodes,(function(t){n.push.apply(n,e(r,t))})),n};function Z(e,r,t,n){var a=$(e,t);if(!a)throw new Error("Could not find node with id "+t);var o=V[a.type.resolvedName],p=function(e,r,t,n){return void 0===t&&(t=!1),g().compact(g().map(function r(n,a,o){if(void 0===a&&(a=[]),void 0===o&&(o=0),t||!t&&0===o){var i=$(e,n);if(!i)return a;var p=i.linkedNodes;g().each(p,(function(e){a.push(e),a=r(e,a,o+1)}));var c=i.nodes;return g().each(c,(function(e){a.push(e),a=r(e,a,o+1)})),a}return a}(r),(function(r){return $(e,r)})))}(e,t),c=g().map(p,(function(t,n){return Z(e,r,t.id,n)}));return i().createElement(o,Y(Y({},a.props),{},{isSSR:!0,id:t,key:n,children:c}))}function ee(e){var r=Q(e),t=e.ROOT.props.style.backgroundColor,n=e.ROOT.props.style.backgroundImage,a=function(e,r,t){return Z(e,r,"ROOT",12200)}(r,V);return{jsx:a,bodyBgColor:t,bodyBgImage:n}}const re=require("cssjson");function te(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ne(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function ae(e,r,t,n){return'\n    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\n      <head>\n        \x3c!--[if gte mso 9]>\n            <xml>\n                <o:OfficeDocumentSettings>\n                <o:AllowPNG/>\n                <o:PixelsPerInch>96</o:PixelsPerInch>\n                </o:OfficeDocumentSettings>\n            </xml>\n        <![endif]--\x3e\n        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <meta name="x-apple-disable-message-reformatting">\n        \x3c!--[if !mso]>\x3c!--\x3e\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        \x3c!--<![endif]--\x3e\n            '.concat((a=r,o=(0,re.toJSON)(a).children,i="",Object.entries(o).map((function(e){var r,t,n=(t=2,function(e){if(Array.isArray(e))return e}(r=e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],i=!0,p=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(e){p=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(p)throw a}}return o}}(r,t)||function(e,r){if(e){if("string"==typeof e)return ne(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ne(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a={children:te({},n[0],n[1])};i+='\n            <style type="text/css">\n                '.concat((0,re.toCSS)(a),"\n            </style>\n        ")})),i),'\n\n        <style type="text/css">\n            .mainClass{\n                width: 58.333333333333336%\n            }\n        </style>\n        <style type="text/css">\n            .braft-output-content p{min-height:1em}.braft-output-content .image-wrap img{max-width:100%;height:auto}.braft-output-content ul,.braft-output-content ol{margin:16px 0;padding:0}.braft-output-content blockquote{margin:0 0 10px 0;padding:15px 20px;background-color:#f1f2f3;border-left:solid 5px #ccc;color:#666;font-style:italic}.braft-output-content pre{max-width:100%;max-height:100%;margin:10px 0;padding:15px;overflow:auto;background-color:#f1f2f3;border-radius:3px;color:#666;font-family:monospace;font-size:14px;font-weight:normal;line-height:16px;}.braft-output-content pre pre{margin:0;padding:0}\n            @media  (max-width: 768px) {\n                /* For mobile phones: */\n                .mainClass {\n                    width: 100%;\n                }\n            }\n            @media screen and (max-width: 600px) {\n                table td#containerCol {\n                    display: flex;\n                    width: 100%;\n                }\n            }\n        </style>\n        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />\n       \n      </head>\n      <body style="\n            background-color:').concat(t,";\n            background-image: url(").concat(n,');\n            background-repeat: no-repeat;\n            background-size: cover;\n            background-attachment: fixed;\n        ">\n        ').concat(e,'\n        \n      </body>\n        <script type="text/javascript">\n          var w=window.innerWidth;\n          if(w < 800) document.getElementById("Main").className=("MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12");\n        <\/script>\n    </html>\n  ');var a,o,i}require("extract-inline-css");const oe=require("cors");var ie=e.n(oe),pe=t()();pe.use(ie()({origin:!0,credentials:!0})),pe.use(a().json()),pe.post("/api/html",(function(e,r){var t=function(e){var r,t,n=new s.ServerStyleSheets,a=ee(e),o=a.jsx,p=a.bodyBgColor,l=a.bodyBgImage;return ae(c().renderToString(n.collect(i().createElement(s.ThemeProvider,{theme:(r=m.find((function(e){return e.name===x})),t=(0,f.createTheme)(g().merge({},d,r,{direction:"ltr"})),t=(0,f.responsiveFontSizes)(t))},i().createElement(u(),null),i().createElement(i().Fragment,null,o)))),n.toString(),p,l)}(e.body.app);r.statusCode=200,r.setHeader("content-type","text/plain"),r.send(t)})),pe.listen(process.env.PORT||8080)})();