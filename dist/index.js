"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var React$1 = require("react");

function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React$1);

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === "undefined") {
    return;
  }

  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";

  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z =
  '/*! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid;box-sizing:border-box}:after,:before{--tw-content:""}html{-webkit-text-size-adjust:100%;font-family:Inter,sans-serif;line-height:1.5;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");*{font-family:Inter,sans-serif}.h1,h1{color:rgb(51 51 51/var(--tw-text-opacity));font-size:1.875rem;line-height:2.25rem;margin-bottom:2rem}.h1,.h2,h1,h2{--tw-text-opacity:1;font-weight:600;letter-spacing:-.025em}.h2,h2{color:rgb(77 77 77/var(--tw-text-opacity));font-size:1.5rem;line-height:2rem;margin-bottom:1rem}.h3,h3{font-size:1.25rem}.h3,.h4,h3,h4{--tw-text-opacity:1;color:rgb(77 77 77/var(--tw-text-opacity));letter-spacing:-.025em;line-height:1.75rem}.h4,h4{font-size:1.125rem}.h5,h5{color:rgb(77 77 77/var(--tw-text-opacity))}.h5,.h6,h5,h6{--tw-text-opacity:1;letter-spacing:-.025em}.h6,h6{color:rgb(102 102 102/var(--tw-text-opacity));font-size:.875rem;line-height:1.25rem}.primaryButton{--tw-bg-opacity:1;--tw-text-opacity:1;--tw-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);align-items:center;background-color:rgb(48 105 254/var(--tw-bg-opacity));border-radius:.375rem;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:rgb(238 243 255/var(--tw-text-opacity));cursor:pointer;display:flex;font-weight:500;justify-content:flex-start;max-width:-moz-fit-content;max-width:fit-content;padding:.5rem 1rem}.primaryButton:hover{--tw-bg-opacity:1;background-color:rgb(51 51 51/var(--tw-bg-opacity))}.secondaryButton{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;--tw-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);align-items:center;background-color:rgb(246 246 246/var(--tw-bg-opacity));border-color:rgb(222 222 222/var(--tw-border-opacity));border-radius:.375rem;border-width:1px;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:rgb(77 77 77/var(--tw-text-opacity));cursor:pointer;display:flex;font-weight:500;justify-content:flex-start;max-width:-moz-fit-content;max-width:fit-content;padding:.5rem 1rem}.secondaryButton:hover{--tw-border-opacity:1;--tw-text-opacity:1;border-color:rgb(48 105 254/var(--tw-border-opacity));color:rgb(48 105 254/var(--tw-text-opacity))}.buttonSM{font-size:.875rem;line-height:1.25rem;padding:.25rem .5rem}@tailwind utilities;.squareButton{padding:.5rem}a{color:rgb(48 105 254/var(--tw-text-opacity));font-weight:500;text-decoration-line:underline;text-underline-offset:2px}a,a:hover{--tw-text-opacity:1}a:hover{color:rgb(51 51 51/var(--tw-text-opacity));text-underline-offset:0}.disabledButton{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(246 246 246/var(--tw-bg-opacity));color:rgb(201 201 201/var(--tw-text-opacity))}.disabledButton:hover{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(237 237 237/var(--tw-bg-opacity));border-color:rgb(222 222 222/var(--tw-border-opacity));color:rgb(165 165 165/var(--tw-text-opacity))}.tagGreen{background-color:rgb(231 255 239/var(--tw-bg-opacity));color:rgb(22 177 76/var(--tw-text-opacity))}.tagGreen,.tagOrange{--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;border-radius:.375rem;display:flex;font-size:.875rem;justify-content:space-between;line-height:1.25rem;max-width:-moz-fit-content;max-width:fit-content;padding:.25rem 1rem}.tagOrange{background-color:rgb(255 244 239/var(--tw-bg-opacity));color:rgb(236 84 17/var(--tw-text-opacity))}.tagRed{background-color:rgb(253 242 242/var(--tw-bg-opacity));color:rgb(255 0 14/var(--tw-text-opacity))}.tagBlue,.tagRed{--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;border-radius:.375rem;display:flex;font-size:.875rem;justify-content:space-between;line-height:1.25rem;max-width:-moz-fit-content;max-width:fit-content;padding:.25rem 1rem}.tagBlue{background-color:rgb(238 243 255/var(--tw-bg-opacity));color:rgb(18 82 247/var(--tw-text-opacity))}.tagGray{--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;background-color:rgb(250 250 250/var(--tw-bg-opacity));border-radius:.375rem;color:rgb(102 102 102/var(--tw-text-opacity));display:flex;font-size:.875rem;justify-content:space-between;line-height:1.25rem;max-width:-moz-fit-content;max-width:fit-content;padding:.25rem 1rem}ol,ul{--tw-text-opacity:1;color:rgb(51 51 51/var(--tw-text-opacity));list-style-position:inside}li{--tw-border-opacity:1;border-bottom-width:1px;border-color:rgb(250 250 250/var(--tw-border-opacity))}ul{list-style-type:disc}ol{list-style-type:decimal}table{--tw-bg-opacity:1;--tw-drop-shadow:drop-shadow(0 4px 3px #00000012) drop-shadow(0 2px 2px #0000000f);background-color:rgb(250 250 250/var(--tw-bg-opacity));border-radius:.5rem;filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);padding-bottom:.75rem;padding-top:.75rem;text-align:left}tr{--tw-border-opacity:1;border-bottom-width:1px;border-color:rgb(222 222 222/var(--tw-border-opacity));padding-bottom:.5rem;padding-top:.5rem}th{--tw-text-opacity:1;color:rgb(165 165 165/var(--tw-text-opacity));font-size:.875rem;font-weight:400;line-height:1.25rem}td,th{min-width:-moz-fit-content;min-width:fit-content;padding:1rem 2rem}td{--tw-text-opacity:1;color:rgb(102 102 102/var(--tw-text-opacity))}tr:last-of-type{border-style:none}hr{--tw-border-opacity:1;border-color:rgb(222 222 222/var(--tw-border-opacity));margin-bottom:1.5rem}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.top-0{top:0}.left-0{left:0}.right-4{right:1rem}.z-50{z-index:50}.z-40{z-index:40}.z-10{z-index:10}.col-span-3{grid-column:span 3/span 3}.col-span-2{grid-column:span 2/span 2}.col-span-1{grid-column:span 1/span 1}.my-4{margin-bottom:1rem;margin-top:1rem}.my-2{margin-bottom:.5rem;margin-top:.5rem}.mb-4{margin-bottom:1rem}.mr-1{margin-right:.25rem}.ml-1{margin-left:.25rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-6{margin-top:1.5rem}.mb-6{margin-bottom:1.5rem}.mr-4{margin-right:1rem}.mb-1{margin-bottom:.25rem}.mr-2{margin-right:.5rem}.mt-4{margin-top:1rem}.ml-2{margin-left:.5rem}.mt-8{margin-top:2rem}.mb-2{margin-bottom:.5rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-\\[100\\%\\],.h-full{height:100%}.h-2{height:.5rem}.w-4{width:1rem}.w-16{width:4rem}.w-full{width:100%}.w-6{width:1.5rem}.w-8{width:2rem}.w-56{width:14rem}.w-\\[100\\%\\]{width:100%}.w-3{width:.75rem}.max-w-fit{max-width:-moz-fit-content;max-width:fit-content}.max-w-2xl{max-width:42rem}.max-w-full{max-width:100%}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(1turn)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.list-none{list-style-type:none}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.overflow-x-auto{overflow-x:auto}.rounded-lg{border-radius:.5rem}.rounded-2xl{border-radius:1rem}.rounded-xl{border-radius:.75rem}.rounded-full{border-radius:9999px}.rounded-sm{border-radius:.125rem}.rounded-tr-lg{border-top-right-radius:.5rem}.rounded-br-lg{border-bottom-right-radius:.5rem}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-black-20{--tw-border-opacity:1;border-color:rgb(222 222 222/var(--tw-border-opacity))}.border-black-00{--tw-border-opacity:1;border-color:rgb(250 250 250/var(--tw-border-opacity))}.border-black-15{--tw-border-opacity:1;border-color:rgb(237 237 237/var(--tw-border-opacity))}.border-red-50{--tw-border-opacity:1;border-color:rgb(234 63 73/var(--tw-border-opacity))}.bg-black-10{--tw-bg-opacity:1;background-color:rgb(246 246 246/var(--tw-bg-opacity))}.bg-black-70{--tw-bg-opacity:1;background-color:rgb(77 77 77/var(--tw-bg-opacity))}.bg-black-00{--tw-bg-opacity:1;background-color:rgb(250 250 250/var(--tw-bg-opacity))}.bg-blue-20{--tw-bg-opacity:1;background-color:rgb(209 222 255/var(--tw-bg-opacity))}.bg-blue-50{--tw-bg-opacity:1;background-color:rgb(48 105 254/var(--tw-bg-opacity))}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-3{padding:.75rem}.p-2{padding:.5rem}.p-1{padding:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-0{padding-bottom:0;padding-top:0}.py-8{padding-bottom:2rem;padding-top:2rem}.px-12{padding-left:3rem;padding-right:3rem}.pr-4{padding-right:1rem}.pl-8{padding-left:2rem}.pl-12{padding-left:3rem}.pr-6{padding-right:1.5rem}.pt-2{padding-top:.5rem}.pb-1{padding-bottom:.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-normal{font-weight:400}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-black-60{--tw-text-opacity:1;color:rgb(102 102 102/var(--tw-text-opacity))}.text-black-40{--tw-text-opacity:1;color:rgb(165 165 165/var(--tw-text-opacity))}.text-black-50{--tw-text-opacity:1;color:rgb(128 128 128/var(--tw-text-opacity))}.text-black-70{--tw-text-opacity:1;color:rgb(77 77 77/var(--tw-text-opacity))}.text-red-60{--tw-text-opacity:1;color:rgb(255 0 14/var(--tw-text-opacity))}.text-black-80{--tw-text-opacity:1;color:rgb(51 51 51/var(--tw-text-opacity))}.text-blue-50{--tw-text-opacity:1;color:rgb(48 105 254/var(--tw-text-opacity))}.text-red-50{--tw-text-opacity:1;color:rgb(234 63 73/var(--tw-text-opacity))}.no-underline{text-decoration-line:none}.opacity-50{opacity:.5}.shadow-md{--tw-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow-lg,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a;--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-sm{--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.last-of-type\\:border-0:last-of-type{border-width:0}.hover\\:rounded-lg:hover{border-radius:.5rem}.hover\\:bg-red-60:hover{--tw-bg-opacity:1;background-color:rgb(255 0 14/var(--tw-bg-opacity))}.hover\\:bg-black-50:hover{--tw-bg-opacity:1;background-color:rgb(128 128 128/var(--tw-bg-opacity))}.hover\\:bg-black-30:hover{--tw-bg-opacity:1;background-color:rgb(201 201 201/var(--tw-bg-opacity))}.hover\\:bg-black-10:hover{--tw-bg-opacity:1;background-color:rgb(246 246 246/var(--tw-bg-opacity))}.hover\\:font-semibold:hover{font-weight:600}.hover\\:text-blue-60:hover{--tw-text-opacity:1;color:rgb(18 82 247/var(--tw-text-opacity))}.hover\\:text-blue-50:hover{--tw-text-opacity:1;color:rgb(48 105 254/var(--tw-text-opacity))}.hover\\:text-black-00:hover{--tw-text-opacity:1;color:rgb(250 250 250/var(--tw-text-opacity))}.hover\\:text-black-100:hover{--tw-text-opacity:1;color:rgb(26 25 25/var(--tw-text-opacity))}.hover\\:text-black-80:hover{--tw-text-opacity:1;color:rgb(51 51 51/var(--tw-text-opacity))}.hover\\:shadow-sm:hover{--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:640px){.sm\\:flex{display:flex}.sm\\:items-center{align-items:center}}@media (min-width:768px){.md\\:flex{display:flex}.md\\:h-auto{height:auto}.md\\:w-8{width:2rem}.md\\:flex-col{flex-direction:column}.md\\:items-center{align-items:center}.md\\:justify-between{justify-content:space-between}}@media (min-width:1024px){.lg\\:my-0{margin-bottom:0;margin-top:0}.lg\\:my-8{margin-bottom:2rem;margin-top:2rem}.lg\\:mt-12{margin-top:3rem}.lg\\:mr-2{margin-right:.5rem}.lg\\:ml-8{margin-left:2rem}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:flex-row{flex-direction:row}.lg\\:py-6{padding-bottom:1.5rem;padding-top:1.5rem}}';
styleInject(css_248z);

function _extends$5() {
  _extends$5 = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };
  return _extends$5.apply(this, arguments);
}

const Button = ({
  primary,
  secondary,
  square,
  small,
  icon,
  disabled,
  children,
  ...rest
}) => {
  const primaryClassName = "primaryButton";
  const secondaryClassName = "secondaryButton";
  const smallClassName = "buttonSM";
  const disabledClassName = "disabledButton";
  const squareClassName = "squareButton";
  const Icon = icon;
  return /*#__PURE__*/ React__default["default"].createElement(
    "button",
    _extends$5(
      {
        className: `${primary && primaryClassName} ${
          secondary && secondaryClassName
        } ${small && smallClassName} ${disabled && disabledClassName} ${
          square && squareClassName
        } my-4 lg:my-0`,
      },
      rest
    ),
    icon &&
      /*#__PURE__*/ React__default["default"].createElement(Icon, {
        className: `${children && "mr-1 w-4"}`,
      }),
    children
  );
};

const Breadcrumbs = ({ links }) => {
  let last = {
    href: "#",
    title: "",
  };
  let previous;

  if (links.length > 1) {
    previous = links.slice(0, -1);
    last = links[links.length - 1];
  } else if (links.length === 1) {
    previous = [];
    last = links[0];
  }

  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "mb-4 text-sm text-black-60 font-normal",
    },
    previous.map(({ href, title }) =>
      /*#__PURE__*/ React__default["default"].createElement(
        React__default["default"].Fragment,
        null,
        /*#__PURE__*/ React__default["default"].createElement(
          "a",
          {
            href: href,
            className: "text-black-40 no-underline",
          },
          title
        ),
        " ",
        "/",
        " "
      )
    ),
    /*#__PURE__*/ React__default["default"].createElement(
      "a",
      {
        href: last.href,
        className: "text-black-50 no-underline hover:text-blue-60",
      },
      last.title
    )
  );
};

var propTypes = { exports: {} };

var reactIs = { exports: {} };

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;
  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (((a = a.type), a)) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (((a = a && a.$$typeof), a)) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  reactIs_production_min.AsyncMode = l;
  reactIs_production_min.ConcurrentMode = m;
  reactIs_production_min.ContextConsumer = k;
  reactIs_production_min.ContextProvider = h;
  reactIs_production_min.Element = c;
  reactIs_production_min.ForwardRef = n;
  reactIs_production_min.Fragment = e;
  reactIs_production_min.Lazy = t;
  reactIs_production_min.Memo = r;
  reactIs_production_min.Portal = d;
  reactIs_production_min.Profiler = g;
  reactIs_production_min.StrictMode = f;
  reactIs_production_min.Suspense = p;
  reactIs_production_min.isAsyncMode = function (a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min.isConcurrentMode = A;
  reactIs_production_min.isContextConsumer = function (a) {
    return z(a) === k;
  };
  reactIs_production_min.isContextProvider = function (a) {
    return z(a) === h;
  };
  reactIs_production_min.isElement = function (a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };
  reactIs_production_min.isForwardRef = function (a) {
    return z(a) === n;
  };
  reactIs_production_min.isFragment = function (a) {
    return z(a) === e;
  };
  reactIs_production_min.isLazy = function (a) {
    return z(a) === t;
  };
  reactIs_production_min.isMemo = function (a) {
    return z(a) === r;
  };
  reactIs_production_min.isPortal = function (a) {
    return z(a) === d;
  };
  reactIs_production_min.isProfiler = function (a) {
    return z(a) === g;
  };
  reactIs_production_min.isStrictMode = function (a) {
    return z(a) === f;
  };
  reactIs_production_min.isSuspense = function (a) {
    return z(a) === p;
  };
  reactIs_production_min.isValidElementType = function (a) {
    return (
      "string" === typeof a ||
      "function" === typeof a ||
      a === e ||
      a === m ||
      a === g ||
      a === f ||
      a === p ||
      a === q ||
      ("object" === typeof a &&
        null !== a &&
        (a.$$typeof === t ||
          a.$$typeof === r ||
          a.$$typeof === h ||
          a.$$typeof === k ||
          a.$$typeof === n ||
          a.$$typeof === w ||
          a.$$typeof === x ||
          a.$$typeof === y ||
          a.$$typeof === v))
    );
  };
  reactIs_production_min.typeOf = z;
  return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development() {
  if (hasRequiredReactIs_development) return reactIs_development;
  hasRequiredReactIs_development = 1;

  if (process.env.NODE_ENV !== "production") {
    (function () {
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol
        ? Symbol.for("react.fragment")
        : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.strict_mode")
        : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol
        ? Symbol.for("react.profiler")
        : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol
        ? Symbol.for("react.provider")
        : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol
        ? Symbol.for("react.async_mode")
        : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.concurrent_mode")
        : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol
        ? Symbol.for("react.forward_ref")
        : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol
        ? Symbol.for("react.suspense")
        : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol
        ? Symbol.for("react.suspense_list")
        : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol
        ? Symbol.for("react.fundamental")
        : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol
        ? Symbol.for("react.responder")
        : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 0xead7;

      function isValidElementType(type) {
        return (
          typeof type === "string" ||
          typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_CONCURRENT_MODE_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          (typeof type === "object" &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_RESPONDER_TYPE ||
              type.$$typeof === REACT_SCOPE_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE))
        );
      }

      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }
              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console["warn"](
              "The ReactIs.isAsyncMode() alias has been deprecated, " +
                "and will be removed in React 17+. Update your code to use " +
                "ReactIs.isConcurrentMode() instead. It has the exact same API."
            );
          }
        }

        return (
          isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
        );
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return (
          typeof object === "object" &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      reactIs_development.AsyncMode = AsyncMode;
      reactIs_development.ConcurrentMode = ConcurrentMode;
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }
  return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs() {
  if (hasRequiredReactIs) return reactIs.exports;
  hasRequiredReactIs = 1;
  (function (module) {
    if (process.env.NODE_ENV === "production") {
      module.exports = requireReactIs_production_min();
    } else {
      module.exports = requireReactIs_development();
    }
  })(reactIs);
  return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign() {
  if (hasRequiredObjectAssign) return objectAssign;
  hasRequiredObjectAssign = 1;
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError(
        "Object.assign cannot be called with null or undefined"
      );
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function (letter) {
        test3[letter] = letter;
      });
      if (
        Object.keys(Object.assign({}, test3)).join("") !==
        "abcdefghijklmnopqrst"
      ) {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  objectAssign = shouldUseNative()
    ? Object.assign
    : function (target, source) {
        var from;
        var to = toObject(target);
        var symbols;

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);

          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }

        return to;
      };
  return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;

  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas() {
  if (hasRequiredHas) return has;
  hasRequiredHas = 1;
  has = Function.call.bind(Object.prototype.hasOwnProperty);
  return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes) return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;

  var printWarning = function () {};

  if (process.env.NODE_ENV !== "production") {
    var ReactPropTypesSecret = requireReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has = requireHas();

    printWarning = function (text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {
        /**/
      }
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(
    typeSpecs,
    values,
    location,
    componentName,
    getStack
  ) {
    if (process.env.NODE_ENV !== "production") {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== "function") {
              var err = Error(
                (componentName || "React class") +
                  ": " +
                  location +
                  " type `" +
                  typeSpecName +
                  "` is invalid; " +
                  "it must be a function, usually from the `prop-types` package, but received `" +
                  typeof typeSpecs[typeSpecName] +
                  "`." +
                  "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              err.name = "Invariant Violation";
              throw err;
            }
            error = typeSpecs[typeSpecName](
              values,
              typeSpecName,
              componentName,
              location,
              null,
              ReactPropTypesSecret
            );
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || "React class") +
                ": type specification of " +
                location +
                " `" +
                typeSpecName +
                "` is invalid; the type checker " +
                "function must return `null` or an `Error` but returned a " +
                typeof error +
                ". " +
                "You may have forgotten to pass an argument to the type checker " +
                "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " +
                "shape all require an argument)."
            );
          }
          if (
            error instanceof Error &&
            !(error.message in loggedTypeFailures)
          ) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : "";

            printWarning(
              "Failed " +
                location +
                " type: " +
                error.message +
                (stack != null ? stack : "")
            );
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function () {
    if (process.env.NODE_ENV !== "production") {
      loggedTypeFailures = {};
    }
  };

  checkPropTypes_1 = checkPropTypes;
  return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;

  var ReactIs = requireReactIs();
  var assign = requireObjectAssign();

  var ReactPropTypesSecret = requireReactPropTypesSecret();
  var has = requireHas();
  var checkPropTypes = requireCheckPropTypes();

  var printWarning = function () {};

  if (process.env.NODE_ENV !== "production") {
    printWarning = function (text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator"; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn =
        maybeIterable &&
        ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === "function") {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = "<<anonymous>>";

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker("array"),
      bigint: createPrimitiveTypeChecker("bigint"),
      bool: createPrimitiveTypeChecker("boolean"),
      func: createPrimitiveTypeChecker("function"),
      number: createPrimitiveTypeChecker("number"),
      object: createPrimitiveTypeChecker("object"),
      string: createPrimitiveTypeChecker("string"),
      symbol: createPrimitiveTypeChecker("symbol"),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message, data) {
      this.message = message;
      this.data = data && typeof data === "object" ? data : {};
      this.stack = "";
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== "production") {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(
        isRequired,
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
                "Use `PropTypes.checkPropTypes()` to call them. " +
                "Read more at http://fb.me/use-check-prop-types"
            );
            err.name = "Invariant Violation";
            throw err;
          } else if (
            process.env.NODE_ENV !== "production" &&
            typeof console !== "undefined"
          ) {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ":" + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning(
                "You are manually calling a React.PropTypes validation " +
                  "function for the `" +
                  propFullName +
                  "` prop on `" +
                  componentName +
                  "`. This is deprecated " +
                  "and will throw in the standalone `prop-types` package. " +
                  "You may be seeing this warning due to a third-party PropTypes " +
                  "library. See https://fb.me/react-warning-dont-call-proptypes " +
                  "for details."
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError(
                "The " +
                  location +
                  " `" +
                  propFullName +
                  "` is marked as required " +
                  ("in `" + componentName + "`, but its value is `null`.")
              );
            }
            return new PropTypeError(
              "The " +
                location +
                " `" +
                propFullName +
                "` is marked as required in " +
                ("`" + componentName + "`, but its value is `undefined`.")
            );
          }
          return null;
        } else {
          return validate(
            props,
            propName,
            componentName,
            location,
            propFullName
          );
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                preciseType +
                "` supplied to `" +
                componentName +
                "`, expected ") +
              ("`" + expectedType + "`."),
            { expectedType: expectedType }
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError(
            "Property `" +
              propFullName +
              "` of component `" +
              componentName +
              "` has invalid PropType notation inside arrayOf."
          );
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected an array.")
          );
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(
            propValue,
            i,
            componentName,
            location,
            propFullName + "[" + i + "]",
            ReactPropTypesSecret
          );
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected a single ReactElement.")
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        if (!ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected a single ReactElement type.")
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                actualClassName +
                "` supplied to `" +
                componentName +
                "`, expected ") +
              ("instance of `" + expectedClassName + "`.")
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== "production") {
          if (arguments.length > 1) {
            printWarning(
              "Invalid arguments supplied to oneOf, expected an array, got " +
                arguments.length +
                " arguments. " +
                "A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
            );
          } else {
            printWarning(
              "Invalid argument supplied to oneOf, expected an array."
            );
          }
        }
        return emptyFunctionThatReturnsNull;
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(
          expectedValues,
          function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          }
        );
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of value `" +
            String(propValue) +
            "` " +
            ("supplied to `" +
              componentName +
              "`, expected one of " +
              valuesString +
              ".")
        );
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError(
            "Property `" +
              propFullName +
              "` of component `" +
              componentName +
              "` has invalid PropType notation inside objectOf."
          );
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected an object.")
          );
        }
        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(
              propValue,
              key,
              componentName,
              location,
              propFullName + "." + key,
              ReactPropTypesSecret
            );
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== "production"
          ? printWarning(
              "Invalid argument supplied to oneOfType, expected an instance of array."
            )
          : void 0;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== "function") {
          printWarning(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but " +
              "received " +
              getPostfixForTypeWarning(checker) +
              " at index " +
              i +
              "."
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var expectedTypes = [];
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          var checkerResult = checker(
            props,
            propName,
            componentName,
            location,
            propFullName,
            ReactPropTypesSecret
          );
          if (checkerResult == null) {
            return null;
          }
          if (checkerResult.data && has(checkerResult.data, "expectedType")) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }
        var expectedTypesMessage =
          expectedTypes.length > 0
            ? ", expected one of type [" + expectedTypes.join(", ") + "]"
            : "";
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` supplied to " +
            ("`" + componentName + "`" + expectedTypesMessage + ".")
        );
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!isNode(props[propName])) {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` supplied to " +
              ("`" + componentName + "`, expected a ReactNode.")
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function invalidValidatorError(
      componentName,
      location,
      propFullName,
      key,
      type
    ) {
      return new PropTypeError(
        (componentName || "React class") +
          ": " +
          location +
          " type `" +
          propFullName +
          "." +
          key +
          "` is invalid; " +
          "it must be a function, usually from the `prop-types` package, but received `" +
          type +
          "`."
      );
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type `" +
              propType +
              "` " +
              ("supplied to `" + componentName + "`, expected `object`.")
          );
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (typeof checker !== "function") {
            return invalidValidatorError(
              componentName,
              location,
              propFullName,
              key,
              getPreciseType(checker)
            );
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret
          );
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type `" +
              propType +
              "` " +
              ("supplied to `" + componentName + "`, expected `object`.")
          );
        }
        // We need to check all keys in case some are required but missing from props.
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (has(shapeTypes, key) && typeof checker !== "function") {
            return invalidValidatorError(
              componentName,
              location,
              propFullName,
              key,
              getPreciseType(checker)
            );
          }
          if (!checker) {
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` key `" +
                key +
                "` supplied to `" +
                componentName +
                "`." +
                "\nBad object: " +
                JSON.stringify(props[propName], null, "  ") +
                "\nValid keys: " +
                JSON.stringify(Object.keys(shapeTypes), null, "  ")
            );
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret
          );
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case "number":
        case "string":
        case "undefined":
          return true;
        case "boolean":
          return !propValue;
        case "object":
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === "symbol") {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue["@@toStringTag"] === "Symbol") {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return "array";
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return "object";
      }
      if (isSymbol(propType, propValue)) {
        return "symbol";
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === "undefined" || propValue === null) {
        return "" + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === "object") {
        if (propValue instanceof Date) {
          return "date";
        } else if (propValue instanceof RegExp) {
          return "regexp";
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case "array":
        case "object":
          return "an " + type;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };
  return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;

  var ReactPropTypesSecret = requireReactPropTypesSecret();

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  factoryWithThrowingShims = function () {
    function shim(
      props,
      propName,
      componentName,
      location,
      propFullName,
      secret
    ) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
          "Use PropTypes.checkPropTypes() to call them. " +
          "Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    } // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction,
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== "production") {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(
    ReactIs.isElement,
    throwOnDirectAccess
  );
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

function _extends$4() {
  _extends$4 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4.apply(this, arguments);
}

function _objectWithoutProperties$4(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose$4(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var ChevronDown = React$1.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4(_ref, ["color", "size"]);

  return /*#__PURE__*/ React__default["default"].createElement(
    "svg",
    _extends$4(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest
    ),
    /*#__PURE__*/ React__default["default"].createElement("polyline", {
      points: "6 9 12 15 18 9",
    })
  );
});
ChevronDown.propTypes = {
  color: propTypes.exports.string,
  size: propTypes.exports.oneOfType([
    propTypes.exports.string,
    propTypes.exports.number,
  ]),
};
ChevronDown.displayName = "ChevronDown";
var ChevronDown$1 = ChevronDown;

function _extends$3() {
  _extends$3 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3.apply(this, arguments);
}

function _objectWithoutProperties$3(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose$3(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var Download = React$1.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3(_ref, ["color", "size"]);

  return /*#__PURE__*/ React__default["default"].createElement(
    "svg",
    _extends$3(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest
    ),
    /*#__PURE__*/ React__default["default"].createElement("path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    }),
    /*#__PURE__*/ React__default["default"].createElement("polyline", {
      points: "7 10 12 15 17 10",
    }),
    /*#__PURE__*/ React__default["default"].createElement("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3",
    })
  );
});
Download.propTypes = {
  color: propTypes.exports.string,
  size: propTypes.exports.oneOfType([
    propTypes.exports.string,
    propTypes.exports.number,
  ]),
};
Download.displayName = "Download";
var Download$1 = Download;

function _extends$2() {
  _extends$2 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2.apply(this, arguments);
}

function _objectWithoutProperties$2(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var Loader = React$1.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2(_ref, ["color", "size"]);

  return /*#__PURE__*/ React__default["default"].createElement(
    "svg",
    _extends$2(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest
    ),
    /*#__PURE__*/ React__default["default"].createElement("line", {
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "6",
    }),
    /*#__PURE__*/ React__default["default"].createElement("line", {
      x1: "12",
      y1: "18",
      x2: "12",
      y2: "22",
    }),
    /*#__PURE__*/ React__default["default"].createElement("line", {
      x1: "4.93",
      y1: "4.93",
      x2: "7.76",
      y2: "7.76",
    }),
    /*#__PURE__*/ React__default["default"].createElement("line", {
      x1: "16.24",
      y1: "16.24",
      x2: "19.07",
      y2: "19.07",
    }),
    /*#__PURE__*/ React__default["default"].createElement("line", {
      x1: "2",
      y1: "12",
      x2: "6",
      y2: "12",
    }),
    /*#__PURE__*/ React__default["default"].createElement("line", {
      x1: "18",
      y1: "12",
      x2: "22",
      y2: "12",
    }),
    /*#__PURE__*/ React__default["default"].createElement("line", {
      x1: "4.93",
      y1: "19.07",
      x2: "7.76",
      y2: "16.24",
    }),
    /*#__PURE__*/ React__default["default"].createElement("line", {
      x1: "16.24",
      y1: "7.76",
      x2: "19.07",
      y2: "4.93",
    })
  );
});
Loader.propTypes = {
  color: propTypes.exports.string,
  size: propTypes.exports.oneOfType([
    propTypes.exports.string,
    propTypes.exports.number,
  ]),
};
Loader.displayName = "Loader";
var Loader$1 = Loader;

function _extends$1() {
  _extends$1 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1.apply(this, arguments);
}

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var Menu = React$1.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1(_ref, ["color", "size"]);

  return /*#__PURE__*/ React__default["default"].createElement(
    "svg",
    _extends$1(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest
    ),
    /*#__PURE__*/ React__default["default"].createElement("line", {
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12",
    }),
    /*#__PURE__*/ React__default["default"].createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6",
    }),
    /*#__PURE__*/ React__default["default"].createElement("line", {
      x1: "3",
      y1: "18",
      x2: "21",
      y2: "18",
    })
  );
});
Menu.propTypes = {
  color: propTypes.exports.string,
  size: propTypes.exports.oneOfType([
    propTypes.exports.string,
    propTypes.exports.number,
  ]),
};
Menu.displayName = "Menu";
var Menu$1 = Menu;

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var X = React$1.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/ React__default["default"].createElement(
    "svg",
    _extends(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest
    ),
    /*#__PURE__*/ React__default["default"].createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18",
    }),
    /*#__PURE__*/ React__default["default"].createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18",
    })
  );
});
X.propTypes = {
  color: propTypes.exports.string,
  size: propTypes.exports.oneOfType([
    propTypes.exports.string,
    propTypes.exports.number,
  ]),
};
X.displayName = "X";
var X$1 = X;

const Dropdown = ({ title, options }) => {
  const [show, setShow] = React$1.useState(false);

  const onToggleClick = () => {
    setShow((value) => !value);
  };

  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    null,
    /*#__PURE__*/ React__default["default"].createElement(
      "div",
      {
        className: "secondaryButton rounded-lg",
        onClick: onToggleClick,
      },
      title,
      /*#__PURE__*/ React__default["default"].createElement(ChevronDown$1, {
        className: `w-4 ml-1 transition-1s ${show && "rotate-180"}`,
      })
    ),
    /*#__PURE__*/ React__default["default"].createElement(
      "div",
      {
        className: `${
          !show && "hidden"
        }  absolute bg-black-10 py-2 text-black-70 font-medium rounded-lg shadow-md border border-black-20 mt-1 max-w-fit cursor-pointer`,
      },
      options.map(({ title, url }, index) =>
        /*#__PURE__*/ React__default["default"].createElement(
          "div",
          {
            key: index,
            className:
              " py-2 border-b border-black-20 px-4  last-of-type:border-0",
          },
          /*#__PURE__*/ React__default["default"].createElement(
            "a",
            {
              href: url,
              className: "no-underline text-black-70  hover:text-blue-50",
            },
            title
          )
        )
      )
    )
  );
};

const Link = ({ nounderline, small, children, ...aTagProps }) => {
  const noUnderlineClassName = "no-underline";
  const smallClassName = "text-sm";
  return /*#__PURE__*/ React.createElement(
    "a",
    _extends$5({}, aTagProps, {
      className: `${small && smallClassName} ${
        nounderline && noUnderlineClassName
      }`,
    }),
    children
  );
};

const SavingProgress = ({ content }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "flex items-center",
    },
    /*#__PURE__*/ React__default["default"].createElement(Loader$1, {
      className: "text-black-70 w-4 mr-1 animate-spin",
    }),
    /*#__PURE__*/ React__default["default"].createElement(
      "span",
      {
        className: "font-medium text-black-70",
      },
      content
    )
  );
};

const SavedProgress = ({ content }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "flex items-center",
    },
    /*#__PURE__*/ React__default["default"].createElement(Download$1, {
      className: "text-black-70 w-4 mr-1",
    }),
    /*#__PURE__*/ React__default["default"].createElement(
      "span",
      {
        className: "font-medium text-black-70",
      },
      content
    )
  );
};

const GenericWheel = (props) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "flex items-center justify-center",
    },
    /*#__PURE__*/ React__default["default"].createElement(Loader$1, {
      className: "text-black-50 w-16 animate-spin",
    })
  );
};

const DecisionModal = ({
  show,
  title,
  description,
  acceptLabel,
  declineLabel,
  onAcceptClick,
  onDeclineClick,
}) => {
  if (show) {
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        className:
          "fixed w-full  h-full z-50 top-0 left-0 flex items-center justify-center",
      },
      /*#__PURE__*/ React.createElement("div", {
        className: "absolute w-full h-full bg-black-70 opacity-50",
      }),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "p-4 w-full max-w-2xl h-full md:h-auto",
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className:
              "relative bg-white dark:bg-gray-700 bg-black-00 grid grid-cols-4 rounded-lg border border-black-00 shadow-md my-4 lg:my-0",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "col-span-3 p-6 pr-4",
            },
            /*#__PURE__*/ React.createElement("h4", null, title),
            /*#__PURE__*/ React.createElement(
              "p",
              {
                className: "text-black-60 mt-2 text-sm",
              },
              description
            )
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "flex flex-col justify-between text-sm",
            },
            /*#__PURE__*/ React.createElement(
              "button",
              {
                onClick: onAcceptClick,
                className:
                  "w-full h-full border-b border-l text-red-60  hover:text-black-00 border-black-15 hover:bg-red-60 rounded-tr-lg",
              },
              /*#__PURE__*/ React.createElement(
                "span",
                {
                  //   href="#"
                  className: "no-underline hover:text-black-100",
                },
                acceptLabel
              )
            ),
            /*#__PURE__*/ React.createElement(
              "button",
              {
                onClick: onDeclineClick,
                className:
                  "w-full h-full border-l border-black-15 hover:bg-black-50 rounded-br-lg  text-black-50 hover:text-black-00",
              },
              /*#__PURE__*/ React.createElement(
                "span",
                {
                  className: "no-underline",
                },
                declineLabel
              )
            )
          )
        )
      )
    );
  }
};

const Modal = ({ children, show }) => {
  if (show) {
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        className:
          "fixed w-full  h-full z-50 top-0 left-0 flex items-center justify-center",
      },
      /*#__PURE__*/ React.createElement("div", {
        className: "absolute w-full h-full bg-black-70 opacity-50",
      }),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "p-4 w-full max-w-2xl h-full md:h-auto z-40",
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className:
              "bg-black-00 rounded-2xl border border-black-00 shadow-md p-6 col-span-2",
          },
          children
        )
      )
    );
  }
};

const ModalHeader = ({ children, onCloseClick }) => {
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "flex justify-between flex-col-reverse lg:flex-row gap-2",
      },
      children,
      /*#__PURE__*/ React.createElement(X$1, {
        onClick: onCloseClick,
        className:
          "w-6 text-black-60 cursor-pointer hover:bg-black-30 hover:rounded-lg",
      })
    ),
    /*#__PURE__*/ React.createElement("hr", {
      className: "border-black-20 my-2",
    })
  );
};

const ModalBody = ({ children, onButtonClick, buttonText }) => {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "mt-6",
    },
    children,
    onButtonClick &&
      buttonText &&
      /*#__PURE__*/ React.createElement(
        "div",
        null,
        /*#__PURE__*/ React.createElement(
          Button,
          {
            onClick: onButtonClick,
            primary: true,
          },
          buttonText
        )
      )
  );
};

const NavHorizontalMenuItem = ({ children }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "li",
    {
      className: "border-0 py-1",
    },
    children
  );
};

const NavHorizontalMenu = ({ children }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "ul",
    {
      className: "flex justify-between items-center list-none gap-4",
    },
    children
  );
};

const NavHorizontal = ({ children, logoUrl }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "nav",
    {
      className: "flex justify-between items-center w-full py-0 lg:py-6 mb-6",
    },
    /*#__PURE__*/ React__default["default"].createElement("img", {
      src: logoUrl,
      className: "w-8",
    }),
    children
  );
};

const Icon = ({ imageUrl, className, size }) => {
  return /*#__PURE__*/ React__default["default"].createElement("div", {
    className: className,
    style: {
      height: `${size}em`,
      width: `${size}em`,
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: "center",
      backgroundSize: "contain",
    },
  });
};

function RoundedIcon({ imageUrl, size = 12 }) {
  return /*#__PURE__*/ React__default["default"].createElement(Icon, {
    imageUrl: imageUrl,
    size: size,
    className: `rounded-full`,
  });
}

function SquareIcon({ imageUrl, size = 12 }) {
  return /*#__PURE__*/ React__default["default"].createElement(Icon, {
    imageUrl: imageUrl,
    size: size,
    className: `rounded-sm`,
  });
}

const NavVerticalDesktopMenu = ({ children }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "pl-8",
    },
    /*#__PURE__*/ React__default["default"].createElement(
      "ul",
      {
        className: "lg:mt-12 flex flex-col w-56",
      },
      children
    )
  );
};

const NavVerticalDesktopMenuItem = ({ children, icon, href }) => {
  const Icon = icon;
  return /*#__PURE__*/ React__default["default"].createElement(
    "li",
    {
      className: "list-none mb-1 w-56",
    },
    /*#__PURE__*/ React__default["default"].createElement(
      "a",
      {
        href: href,
        className:
          "no-underline text-black-70 p-3 flex items-center rounded-lg hover:text-blue-50 hover:bg-black-10",
      },
      /*#__PURE__*/ React__default["default"].createElement(Icon, {
        className: "w-4 mr-2",
      }),
      children
    )
  );
};

const NavVerticalDesktopBody = ({ children }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    null,
    children
  );
};

const NavVerticalDesktop = ({ children }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "nav",
    {
      className: " col-span-1 h-full w-[100%] z-10 hidden lg:block",
    },
    /*#__PURE__*/ React__default["default"].createElement(
      "div",
      {
        className:
          "fixed flex flex-col bg-black-00 py-8 justify-between max-w-72 h-[100%]",
      },
      children
    )
  );
};

const NavVerticalDesktopHeader = ({ children }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "flex items-center justify-between pl-12 pr-6",
    },
    children
  );
};

const NavVerticalDesktopFooter = ({ children }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "px-12 flex gap-4",
    },
    children
  );
};

const NavVerticalMobile = ({ children, logoUrl }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "nav",
    {
      className: "bg-black-00 p-4 flex justify-between items-center lg:hidden",
    },
    /*#__PURE__*/ React__default["default"].createElement("img", {
      src: logoUrl,
      className: "w-8",
    }),
    children
  );
};

const NavVerticalMobileMenu = ({ children }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "ul",
    {
      className: "lg:mt-12 flex flex-col w-56",
    },
    children
  );
};

const NavVerticalMobileBody = ({
  icon = Menu$1,
  children,
  showMenu,
  onToggleMenuClick,
}) => {
  const Icon = icon;
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    null,
    /*#__PURE__*/ React__default["default"].createElement(Icon, {
      className: "w-6 text-black-70 hover:text-blue-50 cursor-pointer",
      onClick: onToggleMenuClick,
    }),
    /*#__PURE__*/ React__default["default"].createElement(
      "div",
      {
        className: `${
          !showMenu && "hidden"
        } absolute right-4 p-6 bg-black-00 shadow-lg rounded-xl`,
      },
      children
    )
  );
};

const NavVerticalMobileMenuFooter = ({ children }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "flex mt-4 justify-end  pt-2",
    },
    children
  );
};

const ProgressBar = ({ progress }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "w-full h-2 bg-blue-20 rounded-full",
    },
    /*#__PURE__*/ React__default["default"].createElement("div", {
      className: `bg-blue-50 h-full rounded-full`,
      style: {
        width: `${progress}%`,
      },
    })
  );
};

const RadioField = ({ label, id, ...rest }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "pb-1",
    },
    /*#__PURE__*/ React__default["default"].createElement(
      "input",
      _extends$5(
        {
          type: "radio",
          id: id,
        },
        rest
      )
    ),
    /*#__PURE__*/ React__default["default"].createElement(
      "label",
      {
        htmlFor: id,
        className: "ml-2 text-black-80",
      },
      label
    )
  );
};

const CheckboxField = ({ label, id, ...rest }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "pb-1",
    },
    /*#__PURE__*/ React__default["default"].createElement(
      "input",
      _extends$5(
        {
          type: "checkbox",
          id: id,
        },
        rest
      )
    ),
    /*#__PURE__*/ React__default["default"].createElement(
      "label",
      {
        htmlFor: id,
        className: "ml-2 text-black-80",
      },
      label
    )
  );
};

const Tag = ({ icon, color = "gray", children }) => {
  const Icon = icon;
  const capitalizedColor = color[0].toUpperCase() + color.slice(1);
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: `tag${capitalizedColor}`,
    },
    icon &&
      /*#__PURE__*/ React.createElement(Icon, {
        className: "mr-1 w-3",
      }),
    children
  );
};

const Task = ({ id, title, description, tag }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "bg-black-00 rounded-lg border border-black-00 shadow-md p-6",
    },
    /*#__PURE__*/ React__default["default"].createElement(
      "div",
      {
        className: "flex items-center",
      },
      /*#__PURE__*/ React__default["default"].createElement("input", {
        type: "checkbox",
        id: "taskCheckbox",
      }),
      /*#__PURE__*/ React__default["default"].createElement(
        "label",
        {
          htmlFor: "{id}",
          className: "ml-2 text-black-70 font-semibold h3",
        },
        title
      )
    ),
    /*#__PURE__*/ React__default["default"].createElement(
      "p",
      {
        className: "my-4 text-black-50 text-sm",
      },
      description
    ),
    /*#__PURE__*/ React__default["default"].createElement(
      Tag,
      {
        color: "blue",
      },
      tag
    )
  );
};

const TextInput = ({ id, label }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "mb-4",
    },
    /*#__PURE__*/ React__default["default"].createElement(
      "label",
      {
        htmlFor: "{id}",
        className: "block mb-1  text-black-70",
      },
      label
    ),
    /*#__PURE__*/ React__default["default"].createElement("input", {
      type: "text",
      className:
        "border-2 border-black-15 text-blue-50 rounded-lg p-1 max-w-full",
      id: id,
    })
  );
};

const TextInputError = ({ id, label, warning }) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "mb-4",
    },
    /*#__PURE__*/ React__default["default"].createElement(
      "label",
      {
        htmlFor: "{id}",
        className: "block mb-1  text-black-70",
      },
      label
    ),
    /*#__PURE__*/ React__default["default"].createElement("input", {
      type: "text",
      className: "border-2 border-red-50 rounded-lg p-1 max-w-full",
      id: "{id}",
    }),
    /*#__PURE__*/ React__default["default"].createElement(
      "span",
      {
        className: "block text-sm text-red-50 mt-1",
      },
      warning
    )
  );
};

const Toast = ({ title, icon, children }) => {
  const Icon = icon;
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className:
        "bg-black-00 rounded-lg border border-black-00 shadow-md p-6 my-4 lg:my-8 ",
    },
    /*#__PURE__*/ React__default["default"].createElement(
      "div",
      {
        className: "lg:flex lg: items-center",
      },
      /*#__PURE__*/ React__default["default"].createElement(Icon, {
        className: "text-blue-50 mb-2 lg:mr-2",
      }),
      /*#__PURE__*/ React__default["default"].createElement("h4", null, title)
    ),
    /*#__PURE__*/ React__default["default"].createElement(
      "div",
      {
        className: "text-black-60 mt-4 lg:ml-8 text-sm",
      },
      children
    )
  );
};

exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.CheckboxField = CheckboxField;
exports.DecisionModal = DecisionModal;
exports.Dropdown = Dropdown;
exports.GenericWheel = GenericWheel;
exports.Link = Link;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalHeader = ModalHeader;
exports.NavHorizontal = NavHorizontal;
exports.NavHorizontalMenu = NavHorizontalMenu;
exports.NavHorizontalMenuItem = NavHorizontalMenuItem;
exports.NavVerticalDesktop = NavVerticalDesktop;
exports.NavVerticalDesktopBody = NavVerticalDesktopBody;
exports.NavVerticalDesktopFooter = NavVerticalDesktopFooter;
exports.NavVerticalDesktopHeader = NavVerticalDesktopHeader;
exports.NavVerticalDesktopMenu = NavVerticalDesktopMenu;
exports.NavVerticalDesktopMenuItem = NavVerticalDesktopMenuItem;
exports.NavVerticalMobile = NavVerticalMobile;
exports.NavVerticalMobileBody = NavVerticalMobileBody;
exports.NavVerticalMobileMenu = NavVerticalMobileMenu;
exports.NavVerticalMobileMenuFooter = NavVerticalMobileMenuFooter;
exports.ProgressBar = ProgressBar;
exports.RadioField = RadioField;
exports.RoundedIcon = RoundedIcon;
exports.SavedProgress = SavedProgress;
exports.SavingProgress = SavingProgress;
exports.SquareIcon = SquareIcon;
exports.Tag = Tag;
exports.Task = Task;
exports.TextInput = TextInput;
exports.TextInputError = TextInputError;
exports.Toast = Toast;
