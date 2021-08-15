(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[926],{1428:function(e,t,r){"use strict";r.d(t,{qE:function(){return b}});var n=r(8327),a=r(7294);var i=r(63),o=r(9676),s=r(6592),l=r(2326),c=r(5284),u=r(4461),d=r(3808);function f(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var v=(0,i.G)(((e,t)=>{var r=p({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},(0,o.yK)().badge);return a.createElement(s.m$.div,p({ref:t},e,{className:(0,u.cx)("chakra-avatar__badge",e.className),__css:r}))}));function h(e){var[t,r]=e.split(" ");return t&&r?""+t.charAt(0)+r.charAt(0):t.charAt(0)}d.Ts&&(v.displayName="AvatarBadge");var m=e=>{var{name:t,getInitials:r}=e,n=f(e,["name","getInitials"]),i=(0,o.yK)();return a.createElement(s.m$.div,p({role:"img","aria-label":t},n,{__css:i.label}),t?null==r?void 0:r(t):null)},g=e=>a.createElement(s.m$.svg,p({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),a.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),a.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})),y={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},b=(0,i.G)(((e,t)=>{var r=(0,l.j)("Avatar",e),n=(0,c.Lr)(e),{src:i,name:d,showBorder:v,borderRadius:m="full",onError:b,getInitials:k=h,icon:O=a.createElement(g,null),iconLabel:E=" avatar",loading:w,children:C,borderColor:_}=n,N=f(n,["src","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor"]),T=p({borderRadius:m,borderWidth:v?"2px":void 0},y,r.container);return _&&(T.borderColor=_),a.createElement(s.m$.span,p({ref:t},N,{className:(0,u.cx)("chakra-avatar",e.className),__css:T}),a.createElement(o.Fo,{value:r},a.createElement(x,{src:i,loading:w,onError:b,getInitials:k,name:d,borderRadius:m,icon:O,iconLabel:E}),C))}));d.Ts&&(b.displayName="Avatar");var x=e=>{var{src:t,onError:r,getInitials:i,name:o,borderRadius:l,loading:c,iconLabel:u,icon:d=a.createElement(g,null)}=e,f=function(e){var{src:t,srcSet:r,onLoad:i,onError:o,crossOrigin:s,sizes:l,ignoreFallback:c}=e,[u,d]=(0,a.useState)("pending");(0,a.useEffect)((()=>{d(t?"loading":"pending")}),[t]);var f=(0,a.useRef)(),p=(0,a.useCallback)((()=>{if(t){v();var e=new Image;e.src=t,s&&(e.crossOrigin=s),r&&(e.srcset=r),l&&(e.sizes=l),e.onload=e=>{v(),d("loaded"),null==i||i(e)},e.onerror=e=>{v(),d("failed"),null==o||o(e)},f.current=e}}),[t,s,r,l,i,o]),v=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,n.G)((()=>{if(!c)return"loading"===u&&p(),()=>{v()}}),[u,p,c]),c?"loaded":u}({src:t,onError:r});return!t||!("loaded"===f)?o?a.createElement(m,{className:"chakra-avatar__initials",getInitials:i,name:o}):a.cloneElement(d,{role:"img","aria-label":u}):a.createElement(s.m$.img,{src:t,alt:o,className:"chakra-avatar__img",loading:c,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:l}})};d.Ts&&(x.displayName="AvatarImage")},8327:function(e,t,r){"use strict";r.d(t,{G:function(){return a}});var n=r(7294),a=r(4461).jU?n.useLayoutEffect:n.useEffect},58:function(e,t,r){"use strict";r.d(t,{J:function(){return u}});var n=r(63),a=r(6592),i=r(4461),o=r(3808),s=r(7294);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c={path:s.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},s.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),s.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),s.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},u=(0,n.G)(((e,t)=>{var{as:r,viewBox:n,color:o="currentColor",focusable:u=!1,children:d,className:f,__css:p}=e,v=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["as","viewBox","color","focusable","children","className","__css"]),h={ref:t,focusable:u,className:(0,i.cx)("chakra-icon",f),__css:l({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:o},p)},m=null!=n?n:c.viewBox;if(r&&"string"!==typeof r)return s.createElement(a.m$.svg,l({as:r},h,v));var g=null!=d?d:c.path;return s.createElement(a.m$.svg,l({verticalAlign:"middle",viewBox:m},h,v),g)}));o.Ts&&(u.displayName="Icon")},8017:function(e,t,r){"use strict";r.d(t,{xu:function(){return c}});var n=r(6592),a=r(63),i=r(3808),o=r(7294);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var c=(0,n.m$)("div");i.Ts&&(c.displayName="Box");var u=(0,a.G)(((e,t)=>{var{size:r,centerContent:n=!0}=e,a=l(e,["size","centerContent"]),i=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return o.createElement(c,s({ref:t,boxSize:r,__css:s({},i,{flexShrink:0,flexGrow:0})},a))}));i.Ts&&(u.displayName="Square");var d=(0,a.G)(((e,t)=>{var{size:r}=e,n=l(e,["size"]);return o.createElement(u,s({size:r,ref:t,borderRadius:"9999px"},n))}));i.Ts&&(d.displayName="Circle")},4096:function(e,t,r){"use strict";r.d(t,{k:function(){return l}});var n=r(63),a=r(6592),i=r(3808),o=r(7294);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=(0,n.G)(((e,t)=>{var{direction:r,align:n,justify:i,wrap:l,basis:c,grow:u,shrink:d}=e,f=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["direction","align","justify","wrap","basis","grow","shrink"]),p={display:"flex",flexDirection:r,alignItems:n,justifyContent:i,flexWrap:l,flexBasis:c,flexGrow:u,flexShrink:d};return o.createElement(a.m$.div,s({ref:t,__css:p},f))}));i.Ts&&(l.displayName="Flex")},4115:function(e,t,r){"use strict";r.d(t,{x:function(){return f}});var n=r(63),a=r(2326),i=r(5284),o=r(6592),s=r(5505),l=r(4461),c=r(3808),u=r(7294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=(0,n.G)(((e,t)=>{var r=(0,a.m)("Text",e),n=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}((0,i.Lr)(e),["className","align","decoration","casing"]),c=(0,s.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return u.createElement(o.m$.p,d({ref:t,className:(0,l.cx)("chakra-text",e.className)},c,n,{__css:r}))}));c.Ts&&(f.displayName="Text")},63:function(e,t,r){"use strict";r.d(t,{G:function(){return a}});var n=r(7294);function a(e){return n.forwardRef(e)}},6592:function(e,t,r){"use strict";r.d(t,{m$:function(){return C}});var n=r(6759),a=r(5505),i=r(658),o=r(7294);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=r(7866),c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=(0,l.Z)((function(e){return c.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),d=r(1897),f=r(444),p=r(4199),v=u,h=function(e){return"theme"!==e},m=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?v:h},g=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!==typeof n&&r&&(n=e.__emotion_forwardProp),n},y=function e(t,r){var n,a,i=t.__emotion_real===t,l=i&&t.__emotion_base||t;void 0!==r&&(n=r.label,a=r.target);var c=g(t,r,i),u=c||m(l),v=!u("as");return function(){var h=arguments,y=i&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&y.push("label:"+n+";"),null==h[0]||void 0===h[0].raw)y.push.apply(y,h);else{0,y.push(h[0][0]);for(var b=h.length,x=1;x<b;x++)y.push(h[x],h[0][x])}var k=(0,d.w)((function(e,t,r){var n=v&&e.as||l,i="",s=[],h=e;if(null==e.theme){for(var g in h={},e)h[g]=e[g];h.theme=(0,o.useContext)(d.T)}"string"===typeof e.className?i=(0,f.f)(t.registered,s,e.className):null!=e.className&&(i=e.className+" ");var b=(0,p.O)(y.concat(s),t.registered,h);(0,f.M)(t,b,"string"===typeof n);i+=t.key+"-"+b.name,void 0!==a&&(i+=" "+a);var x=v&&void 0===c?m(n):u,k={};for(var O in e)v&&"as"===O||x(O)&&(k[O]=e[O]);return k.className=i,k.ref=r,(0,o.createElement)(n,k)}));return k.displayName=void 0!==n?n:"Styled("+("string"===typeof l?l:l.displayName||l.name||"Component")+")",k.defaultProps=t.defaultProps,k.__emotion_real=k,k.__emotion_base=l,k.__emotion_styles=y,k.__emotion_forwardProp=c,Object.defineProperty(k,"toString",{value:function(){return"."+a}}),k.withComponent=function(t,n){return e(t,s({},r,n,{shouldForwardProp:g(k,n,!0)})).apply(void 0,y)},k}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){y[e]=y(e)}));var b=y,x=new Set([...n.propNames,"textStyle","layerStyle","apply","isTruncated","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"]),k=new Set(["htmlWidth","htmlHeight","htmlSize"]),O=e=>k.has(e)||!x.has(e),E=r(5284);function w(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var C=function(e,t){var r=null!=t?t:{},{baseStyle:o}=r,s=w(r,["baseStyle"]);s.shouldForwardProp||(s.shouldForwardProp=O);var l=(e=>{var{baseStyle:t}=e;return e=>{var{css:r,__css:o,sx:s}=e,l=w(e,["theme","css","__css","sx"]),c=(0,a.lw)(l,((e,t)=>(0,n.isStyleProp)(t))),u=(0,i.Pu)(t,e),d=Object.assign({},o,u,(0,a.YU)(c),s),f=(0,n.css)(d)(e.theme);return r?[f,r]:f}})({baseStyle:o});return b(e,s)(l)};E.t6.forEach((e=>{C[e]=C(e)}))},5284:function(e,t,r){"use strict";r.d(t,{t6:function(){return a},Lr:function(){return i}});var n=r(5505),a=["a","b","article","aside","blockquote","button","caption","cite","circle","code","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","img","input","kbd","label","li","main","mark","nav","ol","p","path","pre","q","rect","s","svg","section","select","strong","small","span","sub","sup","table","tbody","td","textarea","tfoot","th","thead","tr","ul"];function i(e){return(0,n.CE)(e,["styleConfig","size","variant","colorScheme"])}},2326:function(e,t,r){"use strict";r.d(t,{j:function(){return h},m:function(){return v}});var n=r(5505),a=r(8554),i=r.n(a),o=r(658),s=r(7294),l=r(9590),c=r.n(l),u=r(4738),d=r(9676);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(){return f({},(0,u.If)(),{theme:(0,d.Fg)()})}function v(e,t,r){var a,l;void 0===t&&(t={}),void 0===r&&(r={});var{styleConfig:u}=t,d=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(t,["styleConfig"]),{theme:f,colorMode:v}=p(),h=(0,n.Wf)(f,"components."+e),m=u||h,g=i()({theme:f,colorMode:v},null!=(a=null==m?void 0:m.defaultProps)?a:{},(0,n.YU)((0,n.CE)(d,["children"]))),y=(0,s.useRef)({});return(0,s.useMemo)((()=>{if(m){var e,t,n,a,s,l,u=(0,o.Pu)(null!=(e=m.baseStyle)?e:{},g),d=(0,o.Pu)(null!=(t=null==(n=m.variants)?void 0:n[g.variant])?t:{},g),f=(0,o.Pu)(null!=(a=null==(s=m.sizes)?void 0:s[g.size])?a:{},g),p=i()({},u,f,d);null!=(l=r)&&l.isMultiPart&&m.parts&&m.parts.forEach((e=>{var t;p[e]=null!=(t=p[e])?t:{}})),c()(y.current,p)||(y.current=p)}return y.current}),[m,g,null==(l=r)?void 0:l.isMultiPart])}function h(e,t){return v(e,t,{isMultiPart:!0})}},6615:function(e,t,r){"use strict";r.d(t,{OK:function(){return Y},td:function(){return X},x4:function(){return Z},nP:function(){return J},mQ:function(){return q}});var n=r(63),a=r(2326),i=r(5284),o=r(9676),s=r(6592),l=r(5505),c=r(4461),u=r(3808),d=r(7294);function f(e,t){if(null!=e)if((0,u.mf)(e))e(t);else try{e.current=t}catch(r){throw new Error("Cannot assign value '"+t+"' to ref '"+e+"'")}}function p(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>{t.forEach((t=>f(t,e)))}}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e){var t=e.target,{tagName:r,isContentEditable:n}=t;return"INPUT"!==r&&"TEXTAREA"!==r&&!0!==n}function m(e){void 0===e&&(e={});var{ref:t,isDisabled:r,isFocusable:n,clickOnEnter:a=!0,clickOnSpace:i=!0,onMouseDown:o,onMouseUp:s,onClick:l,onKeyDown:u,onKeyUp:f,tabIndex:m,onMouseOver:g,onMouseLeave:y}=e,b=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["ref","isDisabled","isFocusable","clickOnEnter","clickOnSpace","onMouseDown","onMouseUp","onClick","onKeyDown","onKeyUp","tabIndex","onMouseOver","onMouseLeave"]),[x,k]=d.useState(!0),[O,E]=d.useState(!1),w=function(){var e=d.useRef(new Map),t=e.current,r=d.useCallback(((t,r,n,a)=>{e.current.set(n,{type:r,el:t,options:a}),t.addEventListener(r,n,a)}),[]),n=d.useCallback(((t,r,n,a)=>{t.removeEventListener(r,n,a),e.current.delete(n)}),[]);return d.useEffect((()=>()=>{t.forEach(((e,t)=>{n(e.el,e.type,t,e.options)}))}),[n,t]),{add:r,remove:n}}(),C=x?m:m||0,_=r&&!n,N=d.useCallback((e=>{if(r)return e.stopPropagation(),void e.preventDefault();e.currentTarget.focus(),null==l||l(e)}),[r,l]),T=d.useCallback((e=>{O&&h(e)&&(e.preventDefault(),e.stopPropagation(),E(!1),w.remove(document,"keyup",T,!1))}),[O,w]),S=d.useCallback((e=>{if(null==u||u(e),!(r||e.defaultPrevented||e.metaKey)&&h(e.nativeEvent)&&!x){var t=a&&"Enter"===e.key;if(i&&" "===e.key&&(e.preventDefault(),E(!0)),t)e.preventDefault(),e.currentTarget.click();w.add(document,"keyup",T,!1)}}),[r,x,u,a,i,w,T]),I=d.useCallback((e=>{(null==f||f(e),r||e.defaultPrevented||e.metaKey)||h(e.nativeEvent)&&!x&&i&&" "===e.key&&(e.preventDefault(),E(!1),e.currentTarget.click())}),[i,x,r,f]),P=d.useCallback((e=>{0===e.button&&(E(!1),w.remove(document,"mouseup",P,!1))}),[w]),M=d.useCallback((e=>{if(!(0,c.dO)(e)){if(r)return e.stopPropagation(),void e.preventDefault();x||E(!0),e.currentTarget.focus({preventScroll:!0}),w.add(document,"mouseup",P,!1),null==o||o(e)}}),[r,x,o,w,P]),j=d.useCallback((e=>{(0,c.dO)(e)||(x||E(!1),null==s||s(e))}),[s,x]),A=d.useCallback((e=>{r?e.preventDefault():null==g||g(e)}),[r,g]),L=d.useCallback((e=>{O&&(e.preventDefault(),E(!1)),null==y||y(e)}),[O,y]),D=p(t,(e=>{e&&"BUTTON"!==e.tagName&&k(!1)}));return v({},b,x?{ref:D,type:"button","aria-disabled":_?void 0:r,disabled:_,onClick:N,onMouseDown:o,onMouseUp:s,onKeyUp:f,onKeyDown:u,onMouseOver:g,onMouseLeave:y}:{ref:D,role:"button","data-active":(0,c.PB)(O),"aria-disabled":r?"true":void 0,tabIndex:_?void 0:C,onClick:N,onMouseDown:M,onMouseUp:j,onKeyUp:I,onKeyDown:S,onMouseOver:A,onMouseLeave:L})}var g=r(8500);function y(e){return e.sort(((e,t)=>{var r=e.compareDocumentPosition(t);if(r&Node.DOCUMENT_POSITION_FOLLOWING||r&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(r&Node.DOCUMENT_POSITION_PRECEDING||r&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(r&Node.DOCUMENT_POSITION_DISCONNECTED||r&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function b(e,t,r){var n=e+1;return r&&n>=t&&(n=0),n}function x(e,t,r){var n=e-1;return r&&n<0&&(n=t),n}var k="undefined"!==typeof window?d.useLayoutEffect:d.useEffect;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class w{constructor(){var e=this;E(this,"descendants",new Map),E(this,"register",(e=>{var t;if(null!=e)return"object"==typeof(t=e)&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE?this.registerNode(e):t=>{this.registerNode(t,e)}})),E(this,"unregister",(e=>{this.descendants.delete(e);var t=y(Array.from(this.descendants.keys()));this.assignIndex(t)})),E(this,"destroy",(()=>{this.descendants.clear()})),E(this,"assignIndex",(e=>{this.descendants.forEach((t=>{var r=e.indexOf(t.node);t.index=r,t.node.dataset.index=t.index.toString()}))})),E(this,"count",(()=>this.descendants.size)),E(this,"enabledCount",(()=>this.enabledValues().length)),E(this,"values",(()=>Array.from(this.descendants.values()).sort(((e,t)=>e.index-t.index)))),E(this,"enabledValues",(()=>this.values().filter((e=>!e.disabled)))),E(this,"item",(e=>{if(0!==this.count())return this.values()[e]})),E(this,"enabledItem",(e=>{if(0!==this.enabledCount())return this.enabledValues()[e]})),E(this,"first",(()=>this.item(0))),E(this,"firstEnabled",(()=>this.enabledItem(0))),E(this,"last",(()=>this.item(this.descendants.size-1))),E(this,"lastEnabled",(()=>{var e=this.enabledValues().length-1;return this.enabledItem(e)})),E(this,"indexOf",(e=>{var t,r;return e&&null!=(t=null==(r=this.descendants.get(e))?void 0:r.index)?t:-1})),E(this,"enabledIndexOf",(e=>null==e?-1:this.enabledValues().findIndex((t=>t.node.isSameNode(e))))),E(this,"next",(function(t,r){void 0===r&&(r=!0);var n=b(t,e.count(),r);return e.item(n)})),E(this,"nextEnabled",(function(t,r){void 0===r&&(r=!0);var n=e.item(t);if(n){var a=b(e.enabledIndexOf(n.node),e.enabledCount(),r);return e.enabledItem(a)}})),E(this,"prev",(function(t,r){void 0===r&&(r=!0);var n=x(t,e.count()-1,r);return e.item(n)})),E(this,"prevEnabled",(function(t,r){void 0===r&&(r=!0);var n=e.item(t);if(n){var a=x(e.enabledIndexOf(n.node),e.enabledCount()-1,r);return e.enabledItem(a)}})),E(this,"registerNode",((e,t)=>{if(e&&!this.descendants.has(e)){var r=y(Array.from(this.descendants.keys()).concat(e));null!=t&&t.disabled&&(t.disabled=!!t.disabled);var n=O({node:e,index:-1},t);this.descendants.set(e,n),this.assignIndex(r)}}))}}var[C,_]=(0,g.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});var N=r(658),T=r(8327);function S(e,t){void 0===t&&(t=[]);var r=d.useRef(e);return(0,T.G)((()=>{r.current=e})),d.useCallback((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return null==r.current?void 0:r.current(...t)}),t)}var I=r(4577);function P(e){return((0,c.Re)(e)?(0,c.lZ)(e):document).activeElement===e}function M(e,t){void 0===t&&(t={});var{isActive:r=P,nextTick:n,preventScroll:a=!0,selectTextIfInput:i=!0}=t;if(!e||r(e))return-1;function o(){if(e){if(function(){if(null==j){j=!1;try{document.createElement("div").focus({get preventScroll(){return j=!0,!0}})}catch(e){}}return j}())e.focus({preventScroll:a});else if(e.focus(),a)!function(e){for(var{element:t,scrollTop:r,scrollLeft:n}of e)t.scrollTop=r,t.scrollLeft=n}(function(e){var t,r=(0,c.lZ)(e),n=null!=(t=r.defaultView)?t:window,a=e.parentNode,i=[],o=r.scrollingElement||r.documentElement;for(;a instanceof n.HTMLElement&&a!==o;)(a.offsetHeight<a.scrollHeight||a.offsetWidth<a.scrollWidth)&&i.push({element:a,scrollTop:a.scrollTop,scrollLeft:a.scrollLeft}),a=a.parentNode;o instanceof n.HTMLElement&&i.push({element:o,scrollTop:o.scrollTop,scrollLeft:o.scrollLeft});return i}(e));(function(e){return(0,c.Re)(e)&&"input"===e.tagName.toLowerCase()&&"select"in e})(e)&&i&&e.select()}else(0,N.ZK)({condition:!0,message:"[chakra-ui]: can't call focus() on `null` or `undefined` element"})}return n?requestAnimationFrame(o):(o(),-1)}var j=null;function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var[D,z,R,B]=[C,()=>_(),()=>function(){var[e]=(0,d.useState)((()=>new w));return k((()=>()=>e.destroy())),e}(),e=>function(e){var t=_(),[r,n]=(0,d.useState)(-1),a=(0,d.useRef)(null);k((()=>()=>{a.current&&t.unregister(a.current)}),[]),k((()=>{if(a.current){var e=Number(a.current.dataset.index);r==e||Number.isNaN(e)||n(e)}}));var i=e?t.register(e):t.register;return{descendants:t,index:r,enabledIndex:t.enabledIndexOf(a.current),register:p(i,a)}}(e)];function F(e){var{defaultIndex:t,onChange:r,index:n,isManual:a,isLazy:i,lazyBehavior:o="unmount",orientation:s="horizontal",direction:l="ltr"}=e,c=L(e,["defaultIndex","onChange","index","isManual","isLazy","lazyBehavior","orientation","direction"]),[u,f]=d.useState(null!=t?t:0),[p,v]=function(e){var{value:t,defaultValue:r,onChange:n,shouldUpdate:a=((e,t)=>e!==t)}=e,i=S(n),o=S(a),[s,l]=d.useState(r),c=void 0!==t,u=c?t:s,f=d.useCallback((e=>{var t=(0,N.Pu)(e,u);o(u,t)&&(c||l(t),i(t))}),[c,i,u,o]);return[u,f]}({defaultValue:null!=t?t:0,value:n,onChange:r});d.useEffect((()=>{null!=n&&f(n)}),[n]);var h=R();return{id:(0,I.Me)(e.id,"tabs"),selectedIndex:p,focusedIndex:u,setSelectedIndex:v,setFocusedIndex:f,isManual:a,isLazy:i,lazyBehavior:o,orientation:s,descendants:h,direction:l,htmlProps:c}}var[U,G]=(0,g.k)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"});function K(e){var t=G(),{id:r,selectedIndex:n}=t;return A({},e,{children:function(e){return d.Children.toArray(e).filter((e=>d.isValidElement(e)))}(e.children).map(((e,t)=>d.cloneElement(e,{isSelected:t===n,id:H(r,t),"aria-labelledby":$(r,t)})))})}function $(e,t){return e+"--tab-"+t}function H(e,t){return e+"--tabpanel-"+t}function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var q=(0,n.G)(((e,t)=>{var r=(0,a.j)("Tabs",e),n=(0,i.Lr)(e),{children:u,className:f}=n,p=F(W(n,["children","className"])),{htmlProps:v,descendants:h}=p,m=W(p,["htmlProps","descendants"]),g=d.useMemo((()=>m),[m]),y=(0,l.CE)(v,["isFitted"]);return d.createElement(D,{value:h},d.createElement(U,{value:g},d.createElement(o.Fo,{value:r},d.createElement(s.m$.div,V({className:(0,c.cx)("chakra-tabs",f),ref:t},y,{__css:r.root}),u))))}));u.Ts&&(q.displayName="Tabs");var Y=(0,n.G)(((e,t)=>{var r=(0,o.yK)(),n=function(e){var{isDisabled:t,isFocusable:r}=e,n=L(e,["isDisabled","isFocusable"]),{setSelectedIndex:a,isManual:i,id:o,setFocusedIndex:s,selectedIndex:l}=G(),{index:c,register:u}=B({disabled:t&&!r}),d=c===l,f=m(A({},n,{ref:p(u,e.ref),isDisabled:t,isFocusable:r,onClick:(0,N.v0)(e.onClick,(()=>{a(c)}))}));return A({},f,{id:$(o,c),role:"tab",tabIndex:d?0:-1,type:"button","aria-selected":d,"aria-controls":H(o,c),onFocus:t?void 0:(0,N.v0)(e.onFocus,(()=>{s(c),!i&&(!t||!r)&&a(c)}))})}(V({},e,{ref:t})),a=V({outline:"0",display:"flex",alignItems:"center",justifyContent:"center"},r.tab);return d.createElement(s.m$.button,V({},n,{className:(0,c.cx)("chakra-tabs__tab",e.className),__css:a}))}));u.Ts&&(Y.displayName="Tab");var X=(0,n.G)(((e,t)=>{var r=function(e){var{focusedIndex:t,orientation:r,direction:n}=G(),a=z(),i=d.useCallback((e=>{var i=()=>{var e=a.nextEnabled(t);e&&M(e.node)},o=()=>{var e=a.prevEnabled(t);e&&M(e.node)},s="horizontal"===r,l="vertical"===r,u=(0,c.uh)(e),d={["ltr"===n?"ArrowLeft":"ArrowRight"]:()=>s&&o(),["ltr"===n?"ArrowRight":"ArrowLeft"]:()=>s&&i(),ArrowDown:()=>l&&i(),ArrowUp:()=>l&&o(),Home:()=>{var e=a.firstEnabled();e&&M(e.node)},End:()=>{var e=a.lastEnabled();e&&M(e.node)}}[u];d&&(e.preventDefault(),d(e))}),[a,t,r,n]);return A({},e,{role:"tablist","aria-orientation":r,onKeyDown:(0,N.v0)(e.onKeyDown,i)})}(V({},e,{ref:t})),n=V({display:"flex"},(0,o.yK)().tablist);return d.createElement(s.m$.div,V({},r,{className:(0,c.cx)("chakra-tabs__tablist",e.className),__css:n}))}));u.Ts&&(X.displayName="TabList");var Z=(0,n.G)(((e,t)=>{var r=function(e){var{isSelected:t,id:r,children:n}=e,a=L(e,["isSelected","id","children"]),{isLazy:i,lazyBehavior:o}=G(),s=d.useRef(!1);return t&&(s.current=!0),A({tabIndex:0},a,{children:function(e){var{hasBeenSelected:t,isLazy:r,isSelected:n,lazyBehavior:a="unmount"}=e;return!r||!!n||!("keepMounted"!==a||!t)}({hasBeenSelected:s.current,isSelected:t,isLazy:i,lazyBehavior:o})?n:null,role:"tabpanel",hidden:!t,id:r})}(V({},e,{ref:t})),n=(0,o.yK)();return d.createElement(s.m$.div,V({outline:"0"},r,{className:(0,c.cx)("chakra-tabs__tab-panel",e.className),__css:n.tabpanel}))}));u.Ts&&(Z.displayName="TabPanel");var J=(0,n.G)(((e,t)=>{var r=K(e),n=(0,o.yK)();return d.createElement(s.m$.div,V({},r,{width:"100%",ref:t,className:(0,c.cx)("chakra-tabs__tab-panels",e.className),__css:n.tabpanels}))}));u.Ts&&(J.displayName="TabPanels");var Q=(0,n.G)(((e,t)=>{var r=function(){var e=G(),t=z(),{selectedIndex:r,orientation:n}=e,a="horizontal"===n,i="vertical"===n,[o,s]=d.useState((()=>a?{left:0,width:0}:i?{top:0,height:0}:void 0)),[l,c]=d.useState(!1);return(0,T.G)((()=>{if(!(0,u.o8)(r)){var e=t.item(r);if(!(0,u.o8)(e)){a&&s({left:e.node.offsetLeft,width:e.node.offsetWidth}),i&&s({top:e.node.offsetTop,height:e.node.offsetHeight});var n=requestAnimationFrame((()=>{c(!0)}));return()=>{n&&cancelAnimationFrame(n)}}}}),[r,a,i,t]),A({position:"absolute",transitionProperty:"left, right, top, bottom",transitionDuration:l?"200ms":"0ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)"},o)}(),n=V({},e.style,r),a=(0,o.yK)();return d.createElement(s.m$.div,V({ref:t},e,{className:(0,c.cx)("chakra-tabs__tab-indicator",e.className),style:n,__css:a.indicator}))}));u.Ts&&(Q.displayName="TabIndicator")},9008:function(e,t,r){e.exports=r(639)},9590:function(e){var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,a="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,l,c,u;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(l=s;0!==l--;)if(!i(e[l],o[l]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],o.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(l=s;0!==l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=s;0!==l--;)if(!Object.prototype.hasOwnProperty.call(o,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!==l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!i(e[c[l]],o[c[l]]))return!1;return!0}return e!==e&&o!==o}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,o({key:t},e.attr),l(e.child))}))}function c(e){return function(t){return n.createElement(u,o({attr:o({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var r,a=e.attr,i=e.size,l=e.title,c=s(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}}}]);