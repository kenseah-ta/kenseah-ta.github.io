"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[312],{9319:e=>{e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(l=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,l[o]))return!1;for(o=r;0!=o--;){var r,o,l,a=l[o];if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},3312:(e,t,n)=>{n.d(t,{Fu:()=>J,J8:()=>j,T5:()=>x,c4:()=>f,ko:()=>_,vH:()=>H});var r=n(282),o=n(3607),l=n(9319);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}function i(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function s(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}let u={NOT_LOADED:"NOT_LOADED",LOADING:"LOADING",LOADED:"LOADED",FAILED:"FAILED",AUTH_FAILURE:"AUTH_FAILURE"};class c{static async load(e,t){var n;let r=e.libraries?e.libraries.split(","):[],o=this.serializeParams(e);this.listeners.push(t),null!=(n=window.google)&&null!=(n=n.maps)&&n.importLibrary?(this.serializedApiParams||(this.loadingStatus=u.LOADED),this.notifyLoadingStatusListeners()):(this.serializedApiParams=o,this.initImportLibrary(e)),this.serializedApiParams&&this.serializedApiParams!==o&&console.warn("[google-maps-api-loader] The maps API has already been loaded with different parameters and will not be loaded again. Refresh the page for new values to have effect.");let l=["maps",...r];await Promise.all(l.map(e=>google.maps.importLibrary(e)))}static serializeParams(e){return[e.v,e.key,e.language,e.region,e.authReferrerPolicy,e.solutionChannel].join("/")}static initImportLibrary(e){if(window.google||(window.google={}),window.google.maps||(window.google.maps={}),window.google.maps.importLibrary){console.error("[google-maps-api-loader-internal]: initImportLibrary must only be called once");return}let t=null,n=()=>t||(t=new Promise((t,n)=>{var r;let o=document.createElement("script"),l=new URLSearchParams;for(let[t,n]of Object.entries(e)){let e=t.replace(/[A-Z]/g,e=>"_"+e[0].toLowerCase());l.set(e,String(n))}l.set("loading","async"),l.set("callback","__googleMapsCallback__"),o.async=!0,o.src="https://maps.googleapis.com/maps/api/js?"+l.toString(),o.nonce=(null==(r=document.querySelector("script[nonce]"))?void 0:r.nonce)||"",o.onerror=()=>{this.loadingStatus=u.FAILED,this.notifyLoadingStatusListeners(),n(Error("The Google Maps JavaScript API could not load."))},window.__googleMapsCallback__=()=>{this.loadingStatus=u.LOADED,this.notifyLoadingStatusListeners(),t()},window.gm_authFailure=()=>{this.loadingStatus=u.AUTH_FAILURE,this.notifyLoadingStatusListeners()},this.loadingStatus=u.LOADING,this.notifyLoadingStatusListeners(),document.head.append(o)}));google.maps.importLibrary=e=>n().then(()=>google.maps.importLibrary(e))}static notifyLoadingStatusListeners(){for(let e of this.listeners)e(this.loadingStatus)}}c.loadingStatus=u.NOT_LOADED,c.serializedApiParams=void 0,c.listeners=[];let d=["onLoad","onError","apiKey","version","libraries"],g=["children"],m=r.createContext(null),f=e=>{let{children:t}=e,n=i(e,g),{mapInstances:o,addMapInstance:l,removeMapInstance:u,clearMapInstances:f}=function(){let[e,t]=(0,r.useState)({});return{mapInstances:e,addMapInstance:(e,n="default")=>{t(t=>a({},t,{[n]:e}))},removeMapInstance:(e="default")=>{t(t=>i(t,[e].map(s)))},clearMapInstances:()=>{t({})}}}(),{status:p,loadedLibraries:h,importLibrary:v}=function(e){let{onLoad:t,onError:n,apiKey:o,version:l,libraries:s=[]}=e,u=i(e,d),[g,m]=(0,r.useState)(c.loadingStatus),[f,p]=(0,r.useReducer)((e,t)=>e[t.name]?e:a({},e,{[t.name]:t.value}),{}),h=(0,r.useMemo)(()=>null==s?void 0:s.join(","),[s]),v=(0,r.useMemo)(()=>JSON.stringify(a({apiKey:o,version:l},u)),[o,l,u]),b=(0,r.useCallback)(async e=>{var t;if(f[e])return f[e];if(!(null!=(t=google)&&null!=(t=t.maps)&&t.importLibrary))throw Error("[api-provider-internal] importLibrary was called before google.maps.importLibrary was defined.");let n=await window.google.maps.importLibrary(e);return p({name:e,value:n}),n},[f]);return(0,r.useEffect)(()=>{(async()=>{try{let e=a({key:o},u);for(let t of(l&&(e.v=l),(null==h?void 0:h.length)>0&&(e.libraries=h),(void 0===e.channel||e.channel<0||e.channel>999)&&delete e.channel,void 0===e.solutionChannel?e.solutionChannel="GMP_visgl_rgmlibrary_v1_default":""===e.solutionChannel&&delete e.solutionChannel,await c.load(e,e=>m(e)),["core","maps",...s]))await b(t);t&&t()}catch(e){n?n(e):console.error("<ApiProvider> failed to load the Google Maps JavaScript API",e)}})()},[o,h,v]),{status:g,loadedLibraries:f,importLibrary:b}}(n),b=(0,r.useMemo)(()=>({mapInstances:o,addMapInstance:l,removeMapInstance:u,clearMapInstances:f,status:p,loadedLibraries:h,importLibrary:v}),[o,l,u,f,p,h,v]);return r.createElement(m.Provider,{value:b},t)},p={onBoundsChanged:"bounds_changed",onCenterChanged:"center_changed",onClick:"click",onContextmenu:"contextmenu",onDblclick:"dblclick",onDrag:"drag",onDragend:"dragend",onDragstart:"dragstart",onHeadingChanged:"heading_changed",onIdle:"idle",onIsFractionalZoomEnabledChanged:"isfractionalzoomenabled_changed",onMapCapabilitiesChanged:"mapcapabilities_changed",onMapTypeIdChanged:"maptypeid_changed",onMousemove:"mousemove",onMouseout:"mouseout",onMouseover:"mouseover",onProjectionChanged:"projection_changed",onRenderingTypeChanged:"renderingtype_changed",onTilesLoaded:"tilesloaded",onTiltChanged:"tilt_changed",onZoomChanged:"zoom_changed",onCameraChanged:"bounds_changed"},h=["bounds_changed","center_changed","heading_changed","tilt_changed","zoom_changed"],v=["click","contextmenu","dblclick","mousemove","mouseout","mouseover"],b=Object.keys(p);function y(e,t){let n=(0,r.useRef)(void 0);n.current&&l(t,n.current)||(n.current=t),(0,r.useEffect)(e,n.current)}let C=new Set(["backgroundColor","clickableIcons","controlSize","disableDefaultUI","disableDoubleClickZoom","draggable","draggableCursor","draggingCursor","fullscreenControl","fullscreenControlOptions","gestureHandling","headingInteractionEnabled","isFractionalZoomEnabled","keyboardShortcuts","mapTypeControl","mapTypeControlOptions","mapTypeId","maxZoom","minZoom","noClear","panControl","panControlOptions","restriction","rotateControl","rotateControlOptions","scaleControl","scaleControlOptions","scrollwheel","streetView","streetViewControl","streetViewControlOptions","styles","tiltInteractionEnabled","zoomControl","zoomControlOptions"]);function E(){var e;return(null==(e=(0,r.useContext)(m))?void 0:e.status)||u.NOT_LOADED}function w(e){return e&&"object"==typeof e&&"lat"in e&&"lng"in e&&Number.isFinite(e.lat)&&Number.isFinite(e.lng)?e:e.toJSON()}let O=()=>r.createElement("div",{style:{position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:999,display:"flex",flexFlow:"column nowrap",textAlign:"center",justifyContent:"center",fontSize:".8rem",color:"rgba(0,0,0,0.6)",background:"#dddddd",padding:"1rem 1.5rem"}},r.createElement("h2",null,"Error: AuthFailure"),r.createElement("p",null,"A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ",r.createElement("code",null,"APIProvider.apiKey")," prop is correct. Check the error-message in the console for further details."));function L(){return E()===u.LOADED}let S=["id","defaultBounds","defaultCenter","defaultZoom","defaultHeading","defaultTilt","reuseMaps","renderingType","colorScheme"],k=["padding"];class P{static has(e){return this.entries[e]&&this.entries[e].length>0}static pop(e){return this.entries[e]&&this.entries[e].pop()||null}static push(e,t){this.entries[e]||(this.entries[e]=[]),this.entries[e].push(t)}}P.entries={};let I=r.createContext(null),x=e=>{let{children:t,id:n,className:o,style:l}=e,s=(0,r.useContext)(m),c=E();if(!s)throw Error("<Map> can only be used inside an <ApiProvider> component.");let[d,g,f]=function(e,t){let n=L(),[o,l]=(0,r.useState)(null),[s,u]=function(){let[e,t]=(0,r.useState)(null);return[e,(0,r.useCallback)(e=>t(e),[t])]}(),c=function(e){let t=function(){let[,e]=(0,r.useReducer)(e=>e+1,0);return e}(),n=(0,r.useRef)({center:{lat:0,lng:0},heading:0,tilt:0,zoom:0});return(0,r.useEffect)(()=>{if(!e)return;let r=google.maps.event.addListener(e,"bounds_changed",()=>{(function(e,t){let n=e.getCenter(),r=e.getZoom(),o=e.getHeading()||0,l=e.getTilt()||0,a=e.getBounds();n&&a&&Number.isFinite(r)||console.warn("[useTrackedCameraState] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),Object.assign(t.current,{center:(null==n?void 0:n.toJSON())||{lat:0,lng:0},zoom:r||0,heading:o,tilt:l})})(e,n),t()});return()=>r.remove()},[e,t]),n}(o),{id:d,defaultBounds:g,defaultCenter:m,defaultZoom:f,defaultHeading:p,defaultTilt:h,reuseMaps:v,renderingType:b,colorScheme:y}=e,C=i(e,S),E=void 0!==e.zoom||void 0!==e.defaultZoom,w=void 0!==e.center||void 0!==e.defaultCenter;for(let e of(g||E&&w||console.warn("<Map> component is missing configuration. You have to provide zoom and center (via the `zoom`/`defaultZoom` and `center`/`defaultCenter` props) or specify the region to show using `defaultBounds`. See https://visgl.github.io/react-google-maps/docs/api-reference/components/map#required"),!C.center&&m&&(C.center=m),!C.zoom&&Number.isFinite(f)&&(C.zoom=f),!C.heading&&Number.isFinite(p)&&(C.heading=p),!C.tilt&&Number.isFinite(h)&&(C.tilt=h),Object.keys(C)))void 0===C[e]&&delete C[e];let O=(0,r.useRef)(void 0);return(0,r.useEffect)(()=>{let r,o;if(!s||!n)return;let{addMapInstance:u,removeMapInstance:m}=t,{mapId:f}=e,p=`${f||"default"}:${b||"default"}:${y||"LIGHT"}`;if(v&&P.has(p)?(r=(o=P.pop(p)).getDiv(),s.appendChild(r),o.setOptions(C),setTimeout(()=>o.setCenter(o.getCenter()),0)):((r=document.createElement("div")).style.height="100%",s.appendChild(r),o=new google.maps.Map(r,a({},C,b?{renderingType:b}:{},y?{colorScheme:y}:{}))),l(o),u(o,d),g){let{padding:e}=g,t=i(g,k);o.fitBounds(t,e)}else E&&w||o.fitBounds({east:180,west:-180,south:-90,north:90});if(O.current){let{mapId:e,cameraState:t}=O.current;e!==f&&o.setOptions(t)}return()=>{O.current={mapId:f,cameraState:c.current},r.remove(),v?P.push(p,o):google.maps.event.clearInstanceListeners(o),l(null),m(d)}},[s,n,d,e.mapId,e.renderingType,e.colorScheme]),[o,u,c]}(e,s);!function(e,t,n){let o=n.center?w(n.center):null,l=null,a=null;o&&Number.isFinite(o.lat)&&Number.isFinite(o.lng)&&(l=o.lat,a=o.lng);let i=Number.isFinite(n.zoom)?n.zoom:null,s=Number.isFinite(n.heading)?n.heading:null,u=Number.isFinite(n.tilt)?n.tilt:null;(0,r.useLayoutEffect)(()=>{if(!e)return;let n={},r=!1;null!==l&&null!==a&&(t.current.center.lat!==l||t.current.center.lng!==a)&&(n.center={lat:l,lng:a},r=!0),null!==i&&t.current.zoom!==i&&(n.zoom=i,r=!0),null!==s&&t.current.heading!==s&&(n.heading=s,r=!0),null!==u&&t.current.tilt!==u&&(n.tilt=u,r=!0),r&&e.moveCamera(n)})}(d,f,e),function(e,t){for(let n of b){let o=t[n],l=p[n];(0,r.useEffect)(()=>{if(!e||!o)return;let t=google.maps.event.addListener(e,l,t=>{o(function(e,t,n){let r={type:e,map:t,detail:{},stoppable:!1,stop:()=>{}};if(h.includes(e)){let e=t.getCenter(),n=t.getZoom(),o=t.getHeading()||0,l=t.getTilt()||0,a=t.getBounds();return e&&a&&Number.isFinite(n)||console.warn("[createEvent] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),r.detail={center:(null==e?void 0:e.toJSON())||{lat:0,lng:0},zoom:n||0,heading:o,tilt:l,bounds:(null==a?void 0:a.toJSON())||{north:90,east:180,south:-90,west:-180}},r}if(v.includes(e)){var o;if(!n)throw Error("[createEvent] mouse events must provide a srcEvent");return r.domEvent=n.domEvent,r.stoppable=!0,r.stop=()=>n.stop(),r.detail={latLng:(null==(o=n.latLng)?void 0:o.toJSON())||null,placeId:n.placeId},r}return r}(l,e,t))});return()=>t.remove()},[e,l,o])}}(d,e),function(e,t){let n={};for(let e of Object.keys(t))C.has(e)&&(n[e]=t[e]);y(()=>{e&&e.setOptions(n)},[n])}(d,e);let x=function(e,t){let{viewport:n,viewState:o}=t;return(0,r.useLayoutEffect)(()=>{if(!e||!o)return;let{latitude:t,longitude:n,bearing:r,pitch:l,zoom:a}=o;e.moveCamera({center:{lat:t,lng:n},heading:r,tilt:l,zoom:a+1})},[e,o]),!!n}(d,e),A=!!e.controlled;(0,r.useEffect)(()=>{if(d)return x&&d.setOptions({disableDefaultUI:!0}),(x||A)&&d.setOptions({gestureHandling:"none",keyboardShortcuts:!1}),()=>{d.setOptions({gestureHandling:e.gestureHandling,keyboardShortcuts:e.keyboardShortcuts})}},[d,x,A,e.gestureHandling,e.keyboardShortcuts]);let _=e.center?w(e.center):null,N=null,D=null;_&&Number.isFinite(_.lat)&&Number.isFinite(_.lng)&&(N=_.lat,D=_.lng);let M=(0,r.useMemo)(()=>{var t,n,r,o,l;return{center:{lat:null!=(t=N)?t:0,lng:null!=(n=D)?n:0},zoom:null!=(r=e.zoom)?r:0,heading:null!=(o=e.heading)?o:0,tilt:null!=(l=e.tilt)?l:0}},[N,D,e.zoom,e.heading,e.tilt]);(0,r.useLayoutEffect)(()=>{if(!d||!A)return;d.moveCamera(M);let e=d.addListener("bounds_changed",()=>{d.moveCamera(M)});return()=>e.remove()},[d,A,M]);let z=(0,r.useMemo)(()=>a({width:"100%",height:"100%",position:"relative",zIndex:x?-1:0},l),[l,x]),F=(0,r.useMemo)(()=>({map:d}),[d]);return c===u.AUTH_FAILURE?r.createElement("div",{style:a({position:"relative"},o?{}:z),className:o},r.createElement(O,null)):r.createElement("div",a({ref:g,"data-testid":"map",style:o?void 0:z,className:o},n?{id:n}:{}),d?r.createElement(I.Provider,{value:F},t):null)};x.deckGLViewProps=!0;let A=new Set,_=(e=null)=>{let t=(0,r.useContext)(m),{map:n}=(0,r.useContext)(I)||{};if(null===t)return!function(...e){let t=JSON.stringify(e);A.has(t)||(A.add(t),console.error(...e))}("useMap(): failed to retrieve APIProviderContext. Make sure that the <APIProvider> component exists and that the component you are calling `useMap()` from is a sibling of the <APIProvider>."),null;let{mapInstances:o}=t;return null!==e?o[e]||null:n||o.default||null};function N(e){let t=L(),n=(0,r.useContext)(m);return(0,r.useEffect)(()=>{t&&n&&n.importLibrary(e)},[t,n,e]),(null==n?void 0:n.loadedLibraries[e])||null}function D(e,t,n){(0,r.useEffect)(()=>{if(!e||!t||!n)return;let r=google.maps.event.addListener(e,t,n);return()=>r.remove()},[e,t,n])}function M(e,t,n){(0,r.useEffect)(()=>{e&&(e[t]=n)},[e,t,n])}function z(e,t,n){(0,r.useEffect)(()=>{if(e&&t&&n)return e.addEventListener(t,n),()=>e.removeEventListener(t,n)},[e,t,n])}let F=r.createContext(null),T={BOTTOM:["50%","100%"]},R=({children:e,styles:t,className:n,anchorPoint:o})=>{let[l,a]=null!=o?o:T.BOTTOM,i=`translate(50%, 100%) translate(-${l}, -${a})`;return r.createElement("div",{style:{transform:i}},r.createElement("div",{className:n,style:t},e))},j=(0,r.forwardRef)((e,t)=>{let{children:n,style:l,className:a,anchorPoint:i}=e,[s,u]=function(e){let[t,n]=(0,r.useState)(null),[o,l]=(0,r.useState)(null),a=_(),i=N("marker"),{children:s,onClick:u,className:c,onMouseEnter:d,onMouseLeave:g,onDrag:m,onDragStart:f,onDragEnd:p,collisionBehavior:h,clickable:v,draggable:b,position:y,title:C,zIndex:E}=e,w=r.Children.count(s);return(0,r.useEffect)(()=>{if(!a||!i)return;let e=new i.AdvancedMarkerElement;e.map=a,n(e);let t=null;return w>0&&((t=document.createElement("div")).isCustomMarker=!0,e.content=t,l(t)),()=>{var r;e.map=null,null==(r=t)||r.remove(),n(null),l(null)}},[a,i,w]),(0,r.useEffect)(()=>{t&&t.content&&!(w>0)&&(t.content.className=c||"")},[t,c,w]),M(t,"position",y),M(t,"title",null!=C?C:""),M(t,"zIndex",E),M(t,"collisionBehavior",h),(0,r.useEffect)(()=>{t&&(void 0!==b?t.gmpDraggable=b:m||f||p?t.gmpDraggable=!0:t.gmpDraggable=!1)},[t,b,m,p,f]),(0,r.useEffect)(()=>{if(!t)return;let e=void 0!==v||!!u||!!d||!!g;t.gmpClickable=e,e&&null!=t&&t.content&&t.content.nodeType===Node.ELEMENT_NODE&&(t.content.style.pointerEvents="none",t.content.firstElementChild&&(t.content.firstElementChild.style.pointerEvents="all"))},[t,v,u,d,g]),D(t,"click",u),D(t,"drag",m),D(t,"dragstart",f),D(t,"dragend",p),z(null==t?void 0:t.element,"mouseenter",d),z(null==t?void 0:t.element,"mouseleave",g),[t,o]}(e),c=(0,r.useMemo)(()=>s?{marker:s}:null,[s]);return((0,r.useImperativeHandle)(t,()=>s,[s]),u)?r.createElement(F.Provider,{value:c},(0,o.createPortal)(r.createElement(R,{anchorPoint:i,styles:l,className:a},n),u)):null});function H(){let[e,t]=(0,r.useState)(null);return[(0,r.useCallback)(e=>{t(e)},[]),e]}function B(e,t,n){let r=0===t.indexOf("--");null==n||"boolean"==typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!=typeof n||0===n||Z.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}let Z=new Set(["animationIterationCount","aspectRatio","borderImageOutset","borderImageSlice","borderImageWidth","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","columns","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridArea","gridRow","gridRowEnd","gridRowSpan","gridRowStart","gridColumn","gridColumnEnd","gridColumnSpan","gridColumnStart","fontWeight","lineClamp","lineHeight","opacity","order","orphans","scale","tabSize","widows","zIndex","zoom","fillOpacity","floodOpacity","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth"]),G=["children","headerContent","style","className","pixelOffset","anchor","shouldFocus","onClose","onCloseClick"],J=e=>{let{children:t,headerContent:n,style:l,className:a,pixelOffset:s,anchor:u,shouldFocus:c,onClose:d,onCloseClick:g}=e,m=i(e,G),f=N("maps"),[p,h]=(0,r.useState)(null),v=(0,r.useRef)(null),b=(0,r.useRef)(null);(0,r.useEffect)(()=>{if(!f)return;v.current=document.createElement("div"),b.current=document.createElement("div"),s&&(m.pixelOffset=new google.maps.Size(s[0],s[1])),n&&(m.headerContent="string"==typeof n?n:b.current);let e=new google.maps.InfoWindow(m);return e.setContent(v.current),h(e),()=>{var t,n;e.setContent(null),null==(t=v.current)||t.remove(),null==(n=b.current)||n.remove(),v.current=null,b.current=null,h(null)}},[f]);let C=(0,r.useRef)(null);(0,r.useEffect)(()=>{p&&v.current&&(function(e,t,n){if(null!=t&&"object"!=typeof t)throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");let r=e.style;if(null==n){if(null==t)return;for(let e in t)t.hasOwnProperty(e)&&B(r,e,t[e]);return}for(let e in n)n.hasOwnProperty(e)&&(null==t||!t.hasOwnProperty(e))&&(0===e.indexOf("--")?r.setProperty(e,""):"float"===e?r.cssFloat="":r[e]="");if(null!=t)for(let e in t){let o=t[e];t.hasOwnProperty(e)&&n[e]!==o&&B(r,e,o)}}(v.current,l||null,C.current),C.current=l||null,a!==v.current.className&&(v.current.className=a||""))},[p,a,l]),y(()=>{p&&(s?m.pixelOffset=new google.maps.Size(s[0],s[1]):m.pixelOffset=null,n?m.headerContent="string"==typeof n?n:b.current:m.headerContent=null,p.setOptions(m))},[m,s,n]),D(p,"close",d),D(p,"closeclick",g);let E=_();return y(()=>{if(!E||!p||null===u)return;let e=!!u,t={map:E};if(u&&(t.anchor=u,void 0!==u.content&&u.content instanceof Element)){let e=u.content,t=null==e?void 0:e.getBoundingClientRect();if(t&&null!=e&&e.isCustomMarker){var n;let e=null==(n=u.content.firstElementChild)?void 0:n.firstElementChild,r=null==e?void 0:e.getBoundingClientRect(),o=r.x-t.x+(r.width-t.width)/2,l=r.y-t.y;m.pixelOffset=new google.maps.Size(s?s[0]+o:o,s?s[1]+l:l),p.setOptions(m)}}return void 0!==c&&(t.shouldFocus=c),p.open(t),()=>{e&&p.set("anchor",null),p.close()}},[p,u,E,c,m,s]),r.createElement(r.Fragment,null,v.current&&(0,o.createPortal)(t,v.current),null!==b.current&&(0,o.createPortal)(n,b.current))},U=["onClick","onDrag","onDragStart","onDragEnd","onMouseOver","onMouseOut"];(0,r.forwardRef)((e,t)=>{let n=function(e){let[t,n]=(0,r.useState)(null),o=_(),{onClick:l,onDrag:a,onDragStart:s,onDragEnd:u,onMouseOver:c,onMouseOut:d}=e,g=i(e,U),{position:m,draggable:f}=g;return(0,r.useEffect)(()=>{if(!o){void 0===o&&console.error("<Marker> has to be inside a Map component.");return}let e=new google.maps.Marker(g);return e.setMap(o),n(e),()=>{e.setMap(null),n(null)}},[o]),(0,r.useEffect)(()=>{if(!t)return;let e=google.maps.event;return l&&e.addListener(t,"click",l),a&&e.addListener(t,"drag",a),s&&e.addListener(t,"dragstart",s),u&&e.addListener(t,"dragend",u),c&&e.addListener(t,"mouseover",c),d&&e.addListener(t,"mouseout",d),t.setDraggable(!!f),()=>{e.clearInstanceListeners(t)}},[t,f,l,a,s,u,c,d]),(0,r.useEffect)(()=>{t&&g&&t.setOptions(g)},[t,g]),(0,r.useEffect)(()=>{!f&&m&&t&&t.setPosition(m)},[f,m,t]),t}(e);return(0,r.useImperativeHandle)(t,()=>n,[n]),r.createElement(r.Fragment,null)})}}]);