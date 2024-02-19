import{j as k,r as L,u as te}from"./index-6G1PSNBA.js";import{a as ce,r as de,t as ue,c as pe}from"./classOptions-r3NM5IEw.js";const F="-";function fe(e){const r=ge(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function i(s){const l=s.split(F);return l[0]===""&&l.length!==1&&l.shift(),oe(l,r)||be(s)}function n(s,l){const c=t[s]||[];return l&&o[s]?[...c,...o[s]]:c}return{getClassGroupId:i,getConflictingClassGroupIds:n}}function oe(e,r){var s;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),i=o?oe(e.slice(1),o):void 0;if(i)return i;if(r.validators.length===0)return;const n=e.join(F);return(s=r.validators.find(({validator:l})=>l(n)))==null?void 0:s.classGroupId}const ee=/^\[(.+)\]$/;function be(e){if(ee.test(e)){const r=ee.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function ge(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return he(Object.entries(e.classGroups),t).forEach(([n,s])=>{_(s,o,n,r)}),o}function _(e,r,t,o){e.forEach(i=>{if(typeof i=="string"){const n=i===""?r:re(r,i);n.classGroupId=t;return}if(typeof i=="function"){if(me(i)){_(i(o),r,t,o);return}r.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([n,s])=>{_(s,re(r,n),t,o)})})}function re(e,r){let t=e;return r.split(F).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function me(e){return e.isThemeGetter}function he(e,r){return r?e.map(([t,o])=>{const i=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,l])=>[r+s,l])):n);return[t,i]}):e}function we(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function i(n,s){t.set(n,s),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let s=t.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return i(n,s),s},set(n,s){t.has(n)?t.set(n,s):i(n,s)}}}const ne="!";function xe(e){const r=e.separator,t=r.length===1,o=r[0],i=r.length;return function(s){const l=[];let c=0,f=0,b;for(let u=0;u<s.length;u++){let h=s[u];if(c===0){if(h===o&&(t||s.slice(u,u+i)===r)){l.push(s.slice(f,u)),f=u+i;continue}if(h==="/"){b=u;continue}}h==="["?c++:h==="]"&&c--}const g=l.length===0?s:s.substring(f),m=g.startsWith(ne),x=m?g.substring(1):g,M=b&&b>f?b-f:void 0;return{modifiers:l,hasImportantModifier:m,baseClassName:x,maybePostfixModifierPosition:M}}}function ye(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function ve(e){return{cache:we(e.cacheSize),splitModifiers:xe(e),...fe(e)}}const ke=/\s+/;function Ce(e,r){const{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:i}=r,n=new Set;return e.trim().split(ke).map(s=>{const{modifiers:l,hasImportantModifier:c,baseClassName:f,maybePostfixModifierPosition:b}=t(s);let g=o(b?f.substring(0,b):f),m=!!b;if(!g){if(!b)return{isTailwindClass:!1,originalClassName:s};if(g=o(f),!g)return{isTailwindClass:!1,originalClassName:s};m=!1}const x=ye(l).join(":");return{isTailwindClass:!0,modifierId:c?x+ne:x,classGroupId:g,originalClassName:s,hasPostfixModifier:m}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:l,classGroupId:c,hasPostfixModifier:f}=s,b=l+c;return n.has(b)?!1:(n.add(b),i(c,f).forEach(g=>n.add(l+g)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function se(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=ie(r))&&(o&&(o+=" "),o+=t);return o}function ie(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=ie(e[o]))&&(t&&(t+=" "),t+=r);return t}function ze(e,...r){let t,o,i,n=s;function s(c){const f=r.reduce((b,g)=>g(b),e());return t=ve(f),o=t.cache.get,i=t.cache.set,n=l,l(c)}function l(c){const f=o(c);if(f)return f;const b=Ce(c,t);return i(c,b),b}return function(){return n(se.apply(null,arguments))}}function d(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const ae=/^\[(?:([a-z-]+):)?(.+)\]$/i,Me=/^\d+\/\d+$/,Se=new Set(["px","full","screen"]),Ae=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,je=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Re=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ge=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ie=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function v(e){return S(e)||Se.has(e)||Me.test(e)}function C(e){return A(e,"length",Ve)}function S(e){return!!e&&!Number.isNaN(Number(e))}function N(e){return A(e,"number",S)}function G(e){return!!e&&Number.isInteger(Number(e))}function Ee(e){return e.endsWith("%")&&S(e.slice(0,-1))}function a(e){return ae.test(e)}function z(e){return Ae.test(e)}const Pe=new Set(["length","size","percentage"]);function Te(e){return A(e,Pe,le)}function Le(e){return A(e,"position",le)}const Ne=new Set(["image","url"]);function Oe(e){return A(e,Ne,Be)}function We(e){return A(e,"",$e)}function I(){return!0}function A(e,r,t){const o=ae.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function Ve(e){return je.test(e)&&!Re.test(e)}function le(){return!1}function $e(e){return Ge.test(e)}function Be(e){return Ie.test(e)}function _e(){const e=d("colors"),r=d("spacing"),t=d("blur"),o=d("brightness"),i=d("borderColor"),n=d("borderRadius"),s=d("borderSpacing"),l=d("borderWidth"),c=d("contrast"),f=d("grayscale"),b=d("hueRotate"),g=d("invert"),m=d("gap"),x=d("gradientColorStops"),M=d("gradientColorStopPositions"),u=d("inset"),h=d("margin"),w=d("opacity"),y=d("padding"),q=d("saturate"),O=d("scale"),D=d("sepia"),J=d("skew"),X=d("space"),Z=d("translate"),W=()=>["auto","contain","none"],V=()=>["auto","hidden","clip","visible","scroll"],$=()=>["auto",a,r],p=()=>[a,r],H=()=>["",v,C],E=()=>["auto",S,a],K=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],P=()=>["solid","dashed","dotted","double","none"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],B=()=>["start","end","center","between","around","evenly","stretch"],j=()=>["","0",a],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],R=()=>[S,N],T=()=>[S,a];return{cacheSize:500,separator:":",theme:{colors:[I],spacing:[v,C],blur:["none","",z,a],brightness:R(),borderColor:[e],borderRadius:["none","","full",z,a],borderSpacing:p(),borderWidth:H(),contrast:R(),grayscale:j(),hueRotate:T(),invert:j(),gap:p(),gradientColorStops:[e],gradientColorStopPositions:[Ee,C],inset:$(),margin:$(),opacity:R(),padding:p(),saturate:R(),scale:R(),sepia:j(),skew:T(),space:p(),translate:p()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[z]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...K(),a]}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[u]}],"inset-x":[{"inset-x":[u]}],"inset-y":[{"inset-y":[u]}],start:[{start:[u]}],end:[{end:[u]}],top:[{top:[u]}],right:[{right:[u]}],bottom:[{bottom:[u]}],left:[{left:[u]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",G,a]}],basis:[{basis:$()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:j()}],shrink:[{shrink:j()}],order:[{order:["first","last","none",G,a]}],"grid-cols":[{"grid-cols":[I]}],"col-start-end":[{col:["auto",{span:["full",G,a]},a]}],"col-start":[{"col-start":E()}],"col-end":[{"col-end":E()}],"grid-rows":[{"grid-rows":[I]}],"row-start-end":[{row:["auto",{span:[G,a]},a]}],"row-start":[{"row-start":E()}],"row-end":[{"row-end":E()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[X]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[X]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",a,r]}],"min-w":[{"min-w":[a,r,"min","max","fit"]}],"max-w":[{"max-w":[a,r,"none","full","min","max","fit","prose",{screen:[z]},z]}],h:[{h:[a,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[a,r,"auto","min","max","fit"]}],"font-size":[{text:["base",z,C]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",N]}],"font-family":[{font:[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",S,N]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",v,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[w]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[w]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...P(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",v,C]}],"underline-offset":[{"underline-offset":["auto",v,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:p()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[w]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...K(),Le]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Te]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Oe]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[M]}],"gradient-via-pos":[{via:[M]}],"gradient-to-pos":[{to:[M]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[w]}],"border-style":[{border:[...P(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[w]}],"divide-style":[{divide:P()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...P()]}],"outline-offset":[{"outline-offset":[v,a]}],"outline-w":[{outline:[v,C]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:H()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[w]}],"ring-offset-w":[{"ring-offset":[v,C]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",z,We]}],"shadow-color":[{shadow:[I]}],opacity:[{opacity:[w]}],"mix-blend":[{"mix-blend":Q()}],"bg-blend":[{"bg-blend":Q()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",z,a]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[g]}],saturate:[{saturate:[q]}],sepia:[{sepia:[D]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[w]}],"backdrop-saturate":[{"backdrop-saturate":[q]}],"backdrop-sepia":[{"backdrop-sepia":[D]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:T()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:T()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[G,a]}],"translate-x":[{"translate-x":[Z]}],"translate-y":[{"translate-y":[Z]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":p()}],"scroll-mx":[{"scroll-mx":p()}],"scroll-my":[{"scroll-my":p()}],"scroll-ms":[{"scroll-ms":p()}],"scroll-me":[{"scroll-me":p()}],"scroll-mt":[{"scroll-mt":p()}],"scroll-mr":[{"scroll-mr":p()}],"scroll-mb":[{"scroll-mb":p()}],"scroll-ml":[{"scroll-ml":p()}],"scroll-p":[{"scroll-p":p()}],"scroll-px":[{"scroll-px":p()}],"scroll-py":[{"scroll-py":p()}],"scroll-ps":[{"scroll-ps":p()}],"scroll-pe":[{"scroll-pe":p()}],"scroll-pt":[{"scroll-pt":p()}],"scroll-pr":[{"scroll-pr":p()}],"scroll-pb":[{"scroll-pb":p()}],"scroll-pl":[{"scroll-pl":p()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[v,C,N]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const U=ze(_e);function qe({themeClass:e=te(),radiusClass:r="round",className:t,children:o,onChange:i=null,initialExpanded:n=[],accordion:s=!0,flush:l=!1}){const c=g=>{const[m,x]=L.useState(g);return[m,(u,h)=>{x(h?w=>w.includes(u)?[]:[u]:w=>w.includes(u)?w.filter(y=>y!==u):[...w,u])}]},[f,b]=c(n);return k.jsx("div",{className:U("h-auto overflow-hidden shadow divide-y divide-inherit",ce[e],de[r],ue[e],l?"border-none shadow-none rounded-none":"",t),children:L.Children.map(o,(g,m)=>L.isValidElement(g)?L.cloneElement(g,{ariaId:`id-${m}`,ariaControls:`controls-${m}`,onChange:i,expanded:f.includes(m),onClick:()=>b(m,s)}):g)})}const De=({themeClass:e=te(),title:r,children:t,className:o,onChange:i,expanded:n=!1,onClick:s=()=>{},ariaId:l,ariaControls:c})=>{const f=()=>{i&&i(!n),s()};return k.jsxs("div",{className:U("font-medium",o),children:[k.jsxs("button",{"aria-expanded":n,"aria-controls":c,id:l,role:"button",onClick:f,className:"flex w-full items-center justify-between p-4 group/expandable",children:[k.jsx("h3",{role:"heading",children:r}),k.jsx("svg",{className:"w-3 h-3 rotate-180 shrink-0 group-aria-expanded/expandable:rotate-0 motion-safe:transition-all","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:k.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5 5 1 1 5"})})]}),k.jsx("div",{"aria-labelledby":l,id:c,className:se("grid motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-in-out",n?"grid-rows-[1fr]":"grid-rows-[0fr] invisible"),children:k.jsx("div",{className:"overflow-hidden",children:k.jsx("div",{className:U("p-4 pt-4 motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-in-out","group-aria-expanded/expandable:border-t border-t-0 shadow-inner",pe[e]),children:t})})})]})};export{qe as A,De as D,U as t};
