(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{B5vD:function(e,t,n){"use strict";n.r(t);var r=n("+Cos"),a=n("ERkP"),o=n.n(a),i=(n("E9dt"),n("j/s1"));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?g(e):t}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return x(this,n)}}function E(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=function e(t){var n=this,r=t.expanded,a=void 0===r?[]:r,o=t.allowMultipleExpanded,i=void 0!==o&&o,l=t.allowZeroExpanded,d=void 0!==l&&l;c(this,e),u(this,"expanded",void 0),u(this,"allowMultipleExpanded",void 0),u(this,"allowZeroExpanded",void 0),u(this,"toggleExpanded",(function(e){return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter((function(t){return t!==e}))}):n.augment({expanded:n.allowMultipleExpanded?[].concat(E(n.expanded),[e]):[e]})})),u(this,"isItemDisabled",(function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)})),u(this,"isItemExpanded",(function(e){return-1!==n.expanded.indexOf(e)})),u(this,"getPanelAttributes",(function(e,t){var r=null!=t?t:n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!r:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),hidden:!r||void 0}})),u(this,"getHeadingAttributes",(function(){return{role:"heading"}})),u(this,"getButtonAttributes",(function(e,t){var r=null!=t?t:n.isItemExpanded(e),a=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":a,"aria-expanded":r,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}})),u(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),u(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),u(this,"augment",(function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))})),this.expanded=a,this.allowMultipleExpanded=i,this.allowZeroExpanded=d},O=Object(a.createContext)(null),A=function(e){f(n,e);var t=v(n);function n(){var e;c(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(g(e=t.call.apply(t,[this].concat(a))),"state",new w({expanded:e.props.preExpanded,allowMultipleExpanded:e.props.allowMultipleExpanded,allowZeroExpanded:e.props.allowZeroExpanded})),u(g(e),"toggleExpanded",(function(t){e.setState((function(e){return e.toggleExpanded(t)}),(function(){e.props.onChange&&e.props.onChange(e.state.expanded)}))})),u(g(e),"isItemDisabled",(function(t){return e.state.isItemDisabled(t)})),u(g(e),"isItemExpanded",(function(t){return e.state.isItemExpanded(t)})),u(g(e),"getPanelAttributes",(function(t,n){return e.state.getPanelAttributes(t,n)})),u(g(e),"getHeadingAttributes",(function(){return e.state.getHeadingAttributes()})),u(g(e),"getButtonAttributes",(function(t,n){return e.state.getButtonAttributes(t,n)})),e}return d(n,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return Object(a.createElement)(O.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),n}(a.PureComponent);u(A,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var j,I=function(e){f(n,e);var t=v(n);function n(){var e;c(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(g(e=t.call.apply(t,[this].concat(a))),"renderChildren",(function(t){return t?e.props.children(t):null})),e}return d(n,[{key:"render",value:function(){return Object(a.createElement)(O.Consumer,null,this.renderChildren)}}]),n}(a.PureComponent);!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(j||(j={}));var _=j,C=0;function P(){var e=C;return C+=1,"raa-".concat(e)}var N=/[\u0009\u000a\u000c\u000d\u0020]/g;function k(e){return""!==e&&!N.test(e)||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)}var S=Object(a.createContext)(null),B=function(e){f(n,e);var t=v(n);function n(){var e;c(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return u(g(e=t.call.apply(t,[this].concat(o))),"toggleExpanded",(function(){e.props.accordionContext.toggleExpanded(e.props.uuid)})),u(g(e),"renderChildren",(function(t){var n=e.props,r=n.uuid,o=n.dangerouslySetExpanded,i=null!=o?o:t.isItemExpanded(r),c=t.isItemDisabled(r),l=t.getPanelAttributes(r,o),d=t.getHeadingAttributes(r),u=t.getButtonAttributes(r,o);return Object(a.createElement)(S.Provider,{value:{uuid:r,expanded:i,disabled:c,toggleExpanded:e.toggleExpanded,panelAttributes:l,headingAttributes:d,buttonAttributes:u}},e.props.children)})),e}return d(n,[{key:"render",value:function(){return Object(a.createElement)(I,null,this.renderChildren)}}]),n}(a.Component),D=function(e){return Object(a.createElement)(I,null,(function(t){return Object(a.createElement)(B,s({},e,{accordionContext:t}))}))},M=function(e){f(n,e);var t=v(n);function n(){var e;c(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(g(e=t.call.apply(t,[this].concat(a))),"renderChildren",(function(t){return t?e.props.children(t):null})),e}return d(n,[{key:"render",value:function(){return Object(a.createElement)(S.Consumer,null,this.renderChildren)}}]),n}(a.PureComponent),W=function(e){f(n,e);var t=v(n);function n(){var e;c(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return u(g(e=t.call.apply(t,[this].concat(o))),"instanceUuid",P()),u(g(e),"renderChildren",(function(t){var n=e.props,r=(n.uuid,n.className),o=n.activeClassName,i=(n.dangerouslySetExpanded,h(n,["uuid","className","activeClassName","dangerouslySetExpanded"])),c=t.expanded&&o?o:r;return Object(a.createElement)("div",s({"data-accordion-component":"AccordionItem",className:c},i))})),e}return d(n,[{key:"render",value:function(){var e=this.props,t=e.uuid,n=void 0===t?this.instanceUuid:t,r=e.dangerouslySetExpanded,o=h(e,["uuid","dangerouslySetExpanded"]);return k(n),o.id&&k(o.id),Object(a.createElement)(D,{uuid:n,dangerouslySetExpanded:r},Object(a.createElement)(M,null,this.renderChildren))}}]),n}(a.Component);function H(e){var t=function e(t){return t&&(t.matches('[data-accordion-component="Accordion"]')?t:e(t.parentElement))}(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}u(W,"defaultProps",{className:"accordion__item"}),u(W,"displayName",_.AccordionItem);var T="40",Z="35",R="13",z="36",q="37",F="39",V="32",L="38",U=function(e){var t=e.toggleExpanded,n=e.className,r=void 0===n?"accordion__button":n,o=h(e,["toggleExpanded","className"]);return o.id&&k(o.id),Object(a.createElement)("div",s({className:r},o,{role:"button",tabIndex:0,onClick:t,onKeyDown:function(e){var n,r,a=e.which.toString();if(a!==R&&a!==V||(e.preventDefault(),t()),e.target instanceof HTMLElement)switch(a){case z:e.preventDefault(),n=e.target,(r=(H(n)||[])[0])&&r.focus();break;case Z:e.preventDefault(),function(e){var t=H(e)||[],n=t[t.length-1];n&&n.focus()}(e.target);break;case q:case L:e.preventDefault(),function(e){var t=H(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case F:case T:e.preventDefault(),function(e){var t=H(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}},"data-accordion-component":"AccordionItemButton"}))},J=function(e){f(n,e);var t=v(n);function n(){var e;c(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(g(e=t.call.apply(t,[this].concat(a))),"ref",void 0),u(g(e),"setRef",(function(t){e.ref=t})),e}return d(n,[{key:"componentDidUpdate",value:function(){n.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){n.VALIDATE(this.ref)}},{key:"render",value:function(){return Object(a.createElement)("div",s({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”\n\n")}}]),n}(a.PureComponent);u(J,"defaultProps",{className:"accordion__heading","aria-level":3});var G=function(e){return Object(a.createElement)(M,null,(function(t){var n=t.headingAttributes;return e.id&&k(e.id),Object(a.createElement)(J,s({},e,n))}))};G.displayName=_.AccordionItemHeading;var K=Object(i.e)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]),Q=Object(i.d)((function(e){var t=e.className,n=void 0===t?"accordion":t,r=e.allowMultipleExpanded,o=e.allowZeroExpanded,i=e.onChange,c=e.preExpanded,l=h(e,["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"]);return Object(a.createElement)(A,{preExpanded:c,allowMultipleExpanded:r,allowZeroExpanded:o,onChange:i},Object(a.createElement)("div",s({"data-accordion-component":"Accordion",className:n},l)))})).withConfig({displayName:"accordionstyle__AccordionWrapper",componentId:"bqkbrk-0"})([""]),Y=Object(i.d)(W).withConfig({displayName:"accordionstyle__AccordionItemWrapper",componentId:"bqkbrk-1"})([""]),$=i.d.div.withConfig({displayName:"accordionstyle__OpenIcon",componentId:"bqkbrk-2"})([""]),X=i.d.div.withConfig({displayName:"accordionstyle__CloseIcon",componentId:"bqkbrk-3"})(["\n  opacity: 0;\n"]),ee=Object(i.d)(G).withConfig({displayName:"accordionstyle__AccordionTitleWrapper",componentId:"bqkbrk-4"})(["\n  > div {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    position: relative;\n    &[aria-expanded='false'] {\n      "," {\n        opacity: 0;\n      }\n      "," {\n        opacity: 1;\n      }\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  * {\n    flex-grow: 1;\n  }\n"],$,X),te=Object(i.d)((function(e){return Object(a.createElement)(M,null,(function(t){var n=t.toggleExpanded,r=t.buttonAttributes;return Object(a.createElement)(U,s({toggleExpanded:n},e,r))}))})).withConfig({displayName:"accordionstyle__AccordionItemButtonWrapper",componentId:"bqkbrk-5"})([""]),ne=Object(i.d)((function(e){var t=e.className,n=void 0===t?"accordion__panel":t,r=e.id,o=h(e,["className","id"]),i=function(e){var t=e.panelAttributes;return r&&k(r),Object(a.createElement)("div",s({"data-accordion-component":"AccordionItemPanel",className:n},o,t))};return Object(a.createElement)(M,null,i)})).withConfig({displayName:"accordionstyle__AccordionBodyWrapper",componentId:"bqkbrk-6"})(["\n  animation: 0.35s "," ease-in;\n  &.accordion__body--hidden {\n    animation: 0.35s "," ease-in;\n  }\n"],K,K),re=i.d.div.withConfig({displayName:"accordionstyle__IconWrapper",componentId:"bqkbrk-7"})(["\n  margin-left: 30px;\n  width: 40px;\n  position: relative;\n\n  ",",\n  "," {\n    position: absolute;\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n    transition: 0.25s ease-in-out;\n  }\n"],$,X),ae=function(e){var t=e.className,n=e.children,r=e.allowZeroExpanded,a=void 0===r||r,i=e.preExpanded,c=void 0===i?[]:i,l=["reusecore__accordion"];return t&&l.push(t),o.a.createElement(Q,{allowZeroExpanded:a,className:l.join(" "),preExpanded:c},n)},oe=function(e){var t=e.className,n=e.children,r=e.uuid,a=["accordion__item"];return t&&a.push(t),o.a.createElement(Y,{className:a.join(" "),uuid:r},n)},ie=function(e){var t=e.className,n=e.children,r=["accordion__header"];return t&&r.push(t),o.a.createElement(ee,{className:r.join(" ")},o.a.createElement(te,null,n))},ce=function(e){var t=e.className,n=e.children,r=["accordion__body"];return t&&r.push(t),o.a.createElement(ne,{className:r.join(" ")},n)},le=n("2BeF"),de=n("2xV5"),ue=n("vzpy"),se=n("EW4T"),pe=i.d.div.withConfig({displayName:"faqstyle__FaqWrapper",componentId:"sc-1a9d89y-0"})(["\n  .accordion_item {\n    border: 1px solid #eff2f5;\n    border-radius: 5px;\n    margin-bottom: 5px;\n  }\n\n  .accordion_title {\n    padding: 23px 30px;\n    @media (max-width: 575px) {\n      padding: 15px 20px;\n    }\n  }\n\n  .accordion_body {\n    padding: 0 30px 23px 30px;\n    @media (max-width: 575px) {\n      padding: 0 20px 15px 20px;\n    }\n  }\n"]),fe=Object(r.a)((function(){return n.e(0).then(n.bind(null,"wayz"))})),me=Object(r.a)((function(){return Promise.resolve().then(n.bind(null,"J2f7"))})),be=Object(r.a)((function(){return n.e(0).then(n.bind(null,"Z5lx"))})),he=Object(r.a)((function(){return n.e(1).then(n.bind(null,"h7bV"))})),ge=o.a.memo((function(e){var t=e.sectionWrapper,n=e.row,r=e.col,a=e.secTitleWrapper,i=e.secHeading,c=e.secText,l=e.title,d=e.description;e.buttonWrapper,e.button;return o.a.createElement(fe,Object.assign({},t,{id:"duvidas"}),o.a.createElement(he,null,o.a.createElement(fe,a,o.a.createElement(me,Object.assign({},c,{content:"PERGUNTAS FREQUENTES"})),o.a.createElement(be,Object.assign({},i,{content:"Ficou com alguma dúvida?"}))),o.a.createElement(fe,n,o.a.createElement(fe,r,o.a.createElement(pe,null,o.a.createElement(ae,null,o.a.createElement(o.a.Fragment,null,le.a.map((function(e,t){return o.a.createElement(oe,{className:"accordion_item",key:"accordion-"+t,expanded:e.expend},o.a.createElement(o.a.Fragment,null,o.a.createElement(ie,{className:"accordion_title"},o.a.createElement(o.a.Fragment,null,o.a.createElement(be,Object.assign({},l,{content:e.title})),o.a.createElement(re,null,o.a.createElement($,null,o.a.createElement(de.Icon,{icon:ue.minus,size:18})),o.a.createElement(X,null,o.a.createElement(de.Icon,{icon:se.plus,size:18}))))),o.a.createElement(ce,{className:"accordion_body"},e.description?o.a.createElement(me,Object.assign({},d,{content:e.description})):o.a.createElement("div",{dangerouslySetInnerHTML:e.descriptionGab,style:d}))))})))))))))}));ge.defaultProps={sectionWrapper:{as:"section",pt:["20px","30px","50px","50px"],pb:["60px","80px","80px","80px"]},secTitleWrapper:{mb:["55px","65px"]},secText:{as:"span",display:"block",textAlign:"center",fontSize:"14px",letterSpacing:"0.15em",fontWeight:"700",color:"#2aa275",mb:"5px"},secHeading:{textAlign:"center",fontSize:["20px","24px"],fontWeight:"500",color:"#0f2137",letterSpacing:"-0.025em",mb:"0",lineHeight:"1.67"},row:{flexBox:!0,flexWrap:"wrap",justifyContent:"center"},col:{width:["100%","100%","75%","75%"]},title:{fontSize:["16px","19px"],fontWeight:"400",color:"headingColor",letterSpacing:"-0.025em",mb:0},description:{fontSize:"15px",color:"textColor",lineHeight:"1.75",mb:0},buttonWrapper:{mt:"50px",flexBox:!0,justifyContent:"center"},button:{type:"button",fontSize:"14px",fontWeight:"600",borderRadius:"4px",pl:["22px"],pr:["22px"],colors:"secondaryWithBg",minWidth:"150px"}};t.default=ge},E9dt:function(e,t,n){},EW4T:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.plus=void 0;t.plus={viewBox:"0 0 20 20",children:[{name:"path",attribs:{d:"M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601\r\n\tC4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399\r\n\tC15.952,9,16,9.447,16,10z"}}]}},vzpy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.minus=void 0;t.minus={viewBox:"0 0 20 20",children:[{name:"path",attribs:{d:"M16,10c0,0.553-0.048,1-0.601,1H4.601C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1h10.799C15.952,9,16,9.447,16,10z"}}]}}}]);
//# sourceMappingURL=20-f5a3fd29868e2d69f247.js.map