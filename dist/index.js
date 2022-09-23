'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
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

var css_248z = "/*! tailwindcss v3.1.6 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-family:Inter,sans-serif;line-height:1.5;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap\");*{font-family:Inter,sans-serif}.h1,h1{color:rgb(51 51 51/var(--tw-text-opacity));font-size:1.875rem;line-height:2.25rem;margin-bottom:2rem}.h1,.h2,h1,h2{--tw-text-opacity:1;font-weight:600;letter-spacing:-.025em}.h2,h2{color:rgb(77 77 77/var(--tw-text-opacity));font-size:1.5rem;line-height:2rem;margin-bottom:1rem}.h3,h3{font-size:1.25rem}.h3,.h4,h3,h4{--tw-text-opacity:1;color:rgb(77 77 77/var(--tw-text-opacity));letter-spacing:-.025em;line-height:1.75rem}.h4,h4{font-size:1.125rem}.h5,h5{color:rgb(77 77 77/var(--tw-text-opacity))}.h5,.h6,h5,h6{--tw-text-opacity:1;letter-spacing:-.025em}.h6,h6{color:rgb(102 102 102/var(--tw-text-opacity));font-size:.875rem;line-height:1.25rem}.primaryButton{--tw-bg-opacity:1;--tw-text-opacity:1;--tw-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);align-items:center;background-color:rgb(48 105 254/var(--tw-bg-opacity));border-radius:.375rem;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:rgb(238 243 255/var(--tw-text-opacity));cursor:pointer;display:flex;font-weight:500;justify-content:flex-start;max-width:-moz-fit-content;max-width:fit-content;padding:.5rem 1rem}.primaryButton:hover{--tw-bg-opacity:1;background-color:rgb(51 51 51/var(--tw-bg-opacity))}.secondaryButton{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;--tw-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);align-items:center;background-color:rgb(246 246 246/var(--tw-bg-opacity));border-color:rgb(222 222 222/var(--tw-border-opacity));border-radius:.375rem;border-width:1px;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:rgb(77 77 77/var(--tw-text-opacity));cursor:pointer;display:flex;font-weight:500;justify-content:flex-start;max-width:-moz-fit-content;max-width:fit-content;padding:.5rem 1rem}.secondaryButton:hover{--tw-border-opacity:1;--tw-text-opacity:1;border-color:rgb(48 105 254/var(--tw-border-opacity));color:rgb(48 105 254/var(--tw-text-opacity))}.buttonSM{font-size:.875rem;line-height:1.25rem;padding:.25rem .5rem}@tailwind utilities;.squareButton{padding:.5rem}a{color:rgb(48 105 254/var(--tw-text-opacity));font-weight:500;text-decoration-line:underline;text-underline-offset:2px}a,a:hover{--tw-text-opacity:1}a:hover{color:rgb(51 51 51/var(--tw-text-opacity));text-underline-offset:0}.disabledButton{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(246 246 246/var(--tw-bg-opacity));color:rgb(201 201 201/var(--tw-text-opacity))}.disabledButton:hover{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(237 237 237/var(--tw-bg-opacity));border-color:rgb(222 222 222/var(--tw-border-opacity));color:rgb(165 165 165/var(--tw-text-opacity))}.tagGreen{background-color:rgb(231 255 239/var(--tw-bg-opacity));color:rgb(22 177 76/var(--tw-text-opacity))}.tagGreen,.tagOrange{--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;border-radius:.375rem;display:flex;font-size:.875rem;justify-content:space-between;line-height:1.25rem;max-width:-moz-fit-content;max-width:fit-content;padding:.25rem 1rem}.tagOrange{background-color:rgb(255 244 239/var(--tw-bg-opacity));color:rgb(236 84 17/var(--tw-text-opacity))}.tagRed{background-color:rgb(253 242 242/var(--tw-bg-opacity));color:rgb(255 0 14/var(--tw-text-opacity))}.tagBlue,.tagRed{--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;border-radius:.375rem;display:flex;font-size:.875rem;justify-content:space-between;line-height:1.25rem;max-width:-moz-fit-content;max-width:fit-content;padding:.25rem 1rem}.tagBlue{background-color:rgb(238 243 255/var(--tw-bg-opacity));color:rgb(18 82 247/var(--tw-text-opacity))}.tagGray{--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;background-color:rgb(250 250 250/var(--tw-bg-opacity));border-radius:.375rem;color:rgb(102 102 102/var(--tw-text-opacity));display:flex;font-size:.875rem;justify-content:space-between;line-height:1.25rem;max-width:-moz-fit-content;max-width:fit-content;padding:.25rem 1rem}ol,ul{--tw-text-opacity:1;color:rgb(51 51 51/var(--tw-text-opacity));list-style-position:inside}li{--tw-border-opacity:1;border-bottom-width:1px;border-color:rgb(250 250 250/var(--tw-border-opacity))}ul{list-style-type:disc}ol{list-style-type:decimal}table{--tw-bg-opacity:1;--tw-drop-shadow:drop-shadow(0 4px 3px #00000012) drop-shadow(0 2px 2px #0000000f);background-color:rgb(250 250 250/var(--tw-bg-opacity));border-radius:.5rem;filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);padding-bottom:.75rem;padding-top:.75rem;text-align:left}tr{--tw-border-opacity:1;border-bottom-width:1px;border-color:rgb(222 222 222/var(--tw-border-opacity));padding-bottom:.5rem;padding-top:.5rem}th{--tw-text-opacity:1;color:rgb(165 165 165/var(--tw-text-opacity));font-size:.875rem;font-weight:400;line-height:1.25rem}td,th{min-width:-moz-fit-content;min-width:fit-content;padding:1rem 2rem}td{--tw-text-opacity:1;color:rgb(102 102 102/var(--tw-text-opacity))}tr:last-of-type{border-style:none}hr{--tw-border-opacity:1;border-color:rgb(222 222 222/var(--tw-border-opacity));margin-bottom:1.5rem}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.top-0{top:0}.left-0{left:0}.right-4{right:1rem}.z-50{z-index:50}.z-40{z-index:40}.z-10{z-index:10}.col-span-3{grid-column:span 3/span 3}.col-span-2{grid-column:span 2/span 2}.col-span-1{grid-column:span 1/span 1}.my-4{margin-bottom:1rem;margin-top:1rem}.my-2{margin-bottom:.5rem;margin-top:.5rem}.mb-6{margin-bottom:1.5rem}.mb-12{margin-bottom:3rem}.mt-2{margin-top:.5rem}.mb-4{margin-bottom:1rem}.mt-4{margin-top:1rem}.ml-2{margin-left:.5rem}.mr-1{margin-right:.25rem}.ml-1{margin-left:.25rem}.mt-1{margin-top:.25rem}.mt-6{margin-top:1.5rem}.mr-4{margin-right:1rem}.mb-1{margin-bottom:.25rem}.mr-2{margin-right:.5rem}.mt-8{margin-top:2rem}.mb-2{margin-bottom:.5rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-\\[100\\%\\],.h-full{height:100%}.h-2{height:.5rem}.w-6{width:1.5rem}.w-4{width:1rem}.w-16{width:4rem}.w-full{width:100%}.w-8{width:2rem}.w-56{width:14rem}.w-\\[100\\%\\]{width:100%}.w-3{width:.75rem}.max-w-fit{max-width:-moz-fit-content;max-width:fit-content}.max-w-2xl{max-width:42rem}.max-w-full{max-width:100%}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(1turn)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.list-none{list-style-type:none}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-4{gap:1rem}.gap-2{gap:.5rem}.overflow-x-auto{overflow-x:auto}.rounded-lg{border-radius:.5rem}.rounded-2xl{border-radius:1rem}.rounded-xl{border-radius:.75rem}.rounded-full{border-radius:9999px}.rounded-sm{border-radius:.125rem}.rounded-tr-lg{border-top-right-radius:.5rem}.rounded-br-lg{border-bottom-right-radius:.5rem}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-black-20{--tw-border-opacity:1;border-color:rgb(222 222 222/var(--tw-border-opacity))}.border-black-00{--tw-border-opacity:1;border-color:rgb(250 250 250/var(--tw-border-opacity))}.border-black-15{--tw-border-opacity:1;border-color:rgb(237 237 237/var(--tw-border-opacity))}.border-red-50{--tw-border-opacity:1;border-color:rgb(234 63 73/var(--tw-border-opacity))}.bg-black-10{--tw-bg-opacity:1;background-color:rgb(246 246 246/var(--tw-bg-opacity))}.bg-black-00{--tw-bg-opacity:1;background-color:rgb(250 250 250/var(--tw-bg-opacity))}.bg-black-70{--tw-bg-opacity:1;background-color:rgb(77 77 77/var(--tw-bg-opacity))}.bg-blue-20{--tw-bg-opacity:1;background-color:rgb(209 222 255/var(--tw-bg-opacity))}.bg-blue-50{--tw-bg-opacity:1;background-color:rgb(48 105 254/var(--tw-bg-opacity))}.p-6{padding:1.5rem}.p-4{padding:1rem}.p-3{padding:.75rem}.p-2{padding:.5rem}.p-1{padding:.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.px-12{padding-left:3rem;padding-right:3rem}.pr-4{padding-right:1rem}.pl-8{padding-left:2rem}.pl-12{padding-left:3rem}.pr-6{padding-right:1.5rem}.pt-2{padding-top:.5rem}.pb-1{padding-bottom:.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-semibold{font-weight:600}.font-normal{font-weight:400}.font-medium{font-weight:500}.text-black-60{--tw-text-opacity:1;color:rgb(102 102 102/var(--tw-text-opacity))}.text-blue-50{--tw-text-opacity:1;color:rgb(48 105 254/var(--tw-text-opacity))}.text-black-70{--tw-text-opacity:1;color:rgb(77 77 77/var(--tw-text-opacity))}.text-black-50{--tw-text-opacity:1;color:rgb(128 128 128/var(--tw-text-opacity))}.text-black-40{--tw-text-opacity:1;color:rgb(165 165 165/var(--tw-text-opacity))}.text-red-60{--tw-text-opacity:1;color:rgb(255 0 14/var(--tw-text-opacity))}.text-black-80{--tw-text-opacity:1;color:rgb(51 51 51/var(--tw-text-opacity))}.text-red-50{--tw-text-opacity:1;color:rgb(234 63 73/var(--tw-text-opacity))}.no-underline{text-decoration-line:none}.opacity-50{opacity:.5}.shadow-md{--tw-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow{--tw-shadow:0 1px 3px 0 #0000001a,0 1px 2px -1px #0000001a;--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow-lg{--tw-shadow:0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a;--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-lg,.shadow-sm{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.last-of-type\\:border-0:last-of-type{border-width:0}.hover\\:rounded-lg:hover{border-radius:.5rem}.hover\\:bg-red-60:hover{--tw-bg-opacity:1;background-color:rgb(255 0 14/var(--tw-bg-opacity))}.hover\\:bg-black-50:hover{--tw-bg-opacity:1;background-color:rgb(128 128 128/var(--tw-bg-opacity))}.hover\\:bg-black-30:hover{--tw-bg-opacity:1;background-color:rgb(201 201 201/var(--tw-bg-opacity))}.hover\\:bg-black-10:hover{--tw-bg-opacity:1;background-color:rgb(246 246 246/var(--tw-bg-opacity))}.hover\\:font-semibold:hover{font-weight:600}.hover\\:text-blue-60:hover{--tw-text-opacity:1;color:rgb(18 82 247/var(--tw-text-opacity))}.hover\\:text-blue-50:hover{--tw-text-opacity:1;color:rgb(48 105 254/var(--tw-text-opacity))}.hover\\:text-black-00:hover{--tw-text-opacity:1;color:rgb(250 250 250/var(--tw-text-opacity))}.hover\\:text-black-100:hover{--tw-text-opacity:1;color:rgb(26 25 25/var(--tw-text-opacity))}.hover\\:text-black-80:hover{--tw-text-opacity:1;color:rgb(51 51 51/var(--tw-text-opacity))}.hover\\:shadow-sm:hover{--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:640px){.sm\\:flex{display:flex}.sm\\:items-center{align-items:center}}@media (min-width:768px){.md\\:flex{display:flex}.md\\:h-auto{height:auto}.md\\:flex-col{flex-direction:column}.md\\:items-center{align-items:center}.md\\:justify-between{justify-content:space-between}}@media (min-width:1024px){.lg\\:col-span-4{grid-column:span 4/span 4}.lg\\:my-0{margin-bottom:0;margin-top:0}.lg\\:my-8{margin-bottom:2rem;margin-top:2rem}.lg\\:mt-12{margin-top:3rem}.lg\\:mr-2{margin-right:.5rem}.lg\\:ml-8{margin-left:2rem}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:grid{display:grid}.lg\\:hidden{display:none}.lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:items-center{align-items:center}.lg\\:justify-center{justify-content:center}.lg\\:gap-4{gap:1rem}.lg\\:px-16{padding-left:4rem;padding-right:4rem}}";
styleInject(css_248z);

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return /*#__PURE__*/React__default["default"].createElement("button", _extends({
    className: `${primary && primaryClassName} ${secondary && secondaryClassName} ${small && smallClassName} ${disabled && disabledClassName} ${square && squareClassName} my-4 lg:my-0`
  }, rest), icon && /*#__PURE__*/React__default["default"].createElement(Icon, {
    className: `${children && "mr-1 w-4"}`
  }), children);
};

exports.Button = Button;
