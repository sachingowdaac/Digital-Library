(this["webpackJsonpbooks-library"]=this["webpackJsonpbooks-library"]||[]).push([[6],{33:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(37);r.d(t,"b",(function(){return a.a}));r(48),r(49);a.a.initializeApp({apiKey:"AIzaSyCq0SDkKRSw3LbFEw4_MdEjskMoA47XE0Y",authDomain:"digital-book-library.firebaseapp.com",projectId:"digital-book-library",storageBucket:"digital-book-library.appspot.com",messagingSenderId:"679328723773",appId:"1:679328723773:web:7329db5a0ab23161760b54",measurementId:"G-MSTF04LPPR"});var n=a.a.auth();a.a.firestore()},34:function(e,t,r){"use strict";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return a}))},36:function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return s})),r.d(t,"c",(function(){return o}));var a=r(33),n=function(e,t){return a.a.createUserWithEmailAndPassword(e,t).catch((function(e){alert(e.message)}))},c=function(){var e=new a.b.auth.GoogleAuthProvider;return a.a.signInWithPopup(e)},s=function(e,t){return a.a.signInWithEmailAndPassword(e,t).then((function(e){return console.log(e)})).catch((function(e){var t=e.code;"auth/wrong-password"===t?alert("Useremail and password does not match"):"auth/user-not-found"===t&&alert(e.message)}))},o=function(e){return e.preventDefault(),a.a.signOut()}},50:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r(34);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},95:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(34),c=r(50),s=r(38),o=r(0),i=r(36);t.default=function(){var e=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,t=Object(o.useState)({}),r=Object(s.a)(t,2),l=r[0],u=r[1],d=function(e){var t=e.target,r=t.name,a=t.value;u((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(n.a)({},r,a))}))};return Object(a.jsx)("div",{className:"p-5 mt-16 mb-5 flex flex-col items-center justify-center",children:Object(a.jsxs)("div",{className:"sm:max-w-md max-w-xs  bg-gray-200 w-full mx-auto rounded overflow-hidden",children:[Object(a.jsx)("div",{className:"text-center  m-2 text-sm font-bold text-gray-800",children:"Sign Up"}),Object(a.jsx)("div",{className:"max-w-md w-full mx-auto mt-4 p-8 border border-gray-300",children:Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.test(l.password)?Object(i.d)(l.email,l.password):alert("Password should Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte"),u({})},className:"space-y-6",children:[Object(a.jsx)("label",{className:"text-sm font-bold text-gray-600 block",children:"User Email"}),Object(a.jsx)("input",{type:"email",placeholder:"example@gmail.com",name:"email",value:l.email||"",onChange:d,className:"w-full p-2 border border-gray-400 rounded mt-1"}),Object(a.jsx)("label",{className:"text-sm font-bold text-gray-600 block",children:"Password"}),Object(a.jsx)("input",{type:"password",placeholder:"********",name:"password",value:l.password||"",onChange:d,className:"dark:text-black w-full p-2 border border-gray-400 rounded mt-1"}),Object(a.jsxs)("div",{className:"flex items-center justify-between hidden",children:[Object(a.jsxs)("div",{className:"flex items-center",children:[Object(a.jsx)("input",{type:"checkbox",className:"h-4 v-4 text-blue-300 rounded"}),Object(a.jsx)("label",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]}),Object(a.jsx)("div",{})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",className:"w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white",children:"SIGN UP"})})]})})]})})}}}]);
//# sourceMappingURL=6.89edaad9.chunk.js.map