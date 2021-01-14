(this["webpackJsonpbooks-library"]=this["webpackJsonpbooks-library"]||[]).push([[8],{32:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var r=a(34);a.d(t,"c",(function(){return r.a}));a(37),a(38);r.a.initializeApp({apiKey:"AIzaSyCq0SDkKRSw3LbFEw4_MdEjskMoA47XE0Y",authDomain:"digital-book-library.firebaseapp.com",projectId:"digital-book-library",storageBucket:"digital-book-library.appspot.com",messagingSenderId:"679328723773",appId:"1:679328723773:web:7329db5a0ab23161760b54",measurementId:"G-MSTF04LPPR"});var o=r.a.auth(),s=r.a.firestore()},36:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return c}));var r=a(32),o=function(e,t){return r.a.createUserWithEmailAndPassword(e,t).catch((function(e){alert(e.message)}))},s=function(){var e=new r.c.auth.GoogleAuthProvider;return r.a.signInWithPopup(e)},n=function(e,t){return r.a.signInWithEmailAndPassword(e,t).then((function(e){return console.log(e)})).catch((function(e){var t=e.code;"auth/wrong-password"===t?alert("Useremail and password does not match"):"auth/user-not-found"===t&&alert(e.message)}))},c=function(e){return e.preventDefault(),r.a.signOut()}},51:function(e,t,a){"use strict";a.r(t);var r=a(1),o=a(13),s=a(0),n=a(14),c=a(36),l=a(32);t.default=function(e){var t=e.userin,a=Object(s.useState)(),i=Object(o.a)(a,2),d=i[0],u=i[1],b=Object(s.useState)(localStorage.theme),h=Object(o.a)(b,2),j=h[0],m=h[1],p=Object(s.useState)("dark"!==j),x=Object(o.a)(p,2),v=x[0],g=x[1],k="dark"===j?"light":"dark";Object(s.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(k),e.classList.add(j),localStorage.setItem("theme",j)}),[j,k]);return l.a.onAuthStateChanged((function(e){e?(console.log("user loged in"),u(!0)):(console.log("user sign out"),u(!1)),t(e)})),Object(r.jsx)("nav",{className:"fixed top-0 w-full bg-white dark:bg-gray-900 h-16 shadow",children:Object(r.jsx)("div",{className:"items-center mx-auto sm:w-4/5 p-2",children:Object(r.jsxs)("div",{className:"flex justify-between",children:[Object(r.jsx)("div",{children:Object(r.jsx)(n.b,{exact:!0,to:"/",activeClassName:"text-purple-600",children:Object(r.jsx)("svg",{className:"w-12 h-12",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})})}),Object(r.jsxs)("div",{className:"flex items-center justify-between space-x-5",children:[Object(r.jsx)("div",{className:d?"block":"hidden",children:Object(r.jsx)(n.b,{exact:!0,to:"/",activeClassName:"font-black text-purple-600",className:"hover:text-purple-900",children:"Home"})}),Object(r.jsx)("div",{children:Object(r.jsx)(n.b,{exact:!0,to:"/about",activeClassName:"font-black text-purple-600",className:"hover:text-purple-900",children:"About"})}),Object(r.jsx)("div",{className:d?"block":"hidden",children:Object(r.jsx)(n.b,{exact:!0,to:"/mybooks",activeClassName:"font-black text-purple-600",className:"hover:text-purple-900",title:"My books",children:Object(r.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"})})})}),Object(r.jsx)("div",{className:d?"hidden":"block",children:Object(r.jsx)(n.b,{exact:!0,to:"/signup",activeClassName:"font-black text-purple-600",className:"hover:text-purple-900",children:"SignUp"})}),Object(r.jsx)("div",{className:d?"hidden":"block",children:Object(r.jsx)(n.b,{exact:!0,to:d?"/":"/login",activeClassName:"font-black text-purple-600",className:"hover:text-purple-900",children:"Login"})}),Object(r.jsx)("div",{className:d?"block":"hidden",children:Object(r.jsx)("button",{className:"p-1 rounded-full focus:outline-none focus:shadow-outline hover:bg-purple-500",onClick:c.c,children:"Logout"})})]}),Object(r.jsx)("div",{className:"fixed bottom-5 right-4 bg-transparent",children:Object(r.jsx)("div",{style:v?{backgroundColor:"#312b47"}:{backgroundColor:"#0073e5"},className:"p-2 w-10 h-10 bg-purple-700 rounded-full focus:outline-none  bg-transparent text-white hover:bg-purple-900",onClick:function(){var e=document.querySelector("html").classList;return"dark"===localStorage.theme?(e.remove("dark"),localStorage.removeItem("theme"),g(!0)):(e.add("dark"),localStorage.theme="dark",g(!1)),[k,m]},children:v?Object(r.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}):Object(r.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})})})})]})})})}}}]);
//# sourceMappingURL=8.8fc26c8c.chunk.js.map