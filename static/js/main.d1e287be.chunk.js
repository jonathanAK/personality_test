(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),c=a(21),o=a.n(c),u=a(18),l=a(14),s=(a(75),a(76),function(){return i.a.createElement("div",null,i.a.createElement("img",{src:"/loading.gif"}))}),m=a(61),E=function(e){return i.a.createElement(u.b,{to:"/quiz/".concat(e.permalink)},i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement("h3",null,e.name),e.img&&i.a.createElement("img",{className:"Question-img",src:"".concat("/personality_test","/img/").concat(e.img)}))))},d=Object(l.b)(function(e){return{quizList:e.data.quizList}},function(e){return{onStart:function(){e({type:"RESET_VIEW"}),e({type:"CLEAR_QUIZ"})}}})(function(e){var t=e.onStart,a=e.quizList;return i.a.useEffect(function(){t()},[]),a.length>2?i.a.createElement("div",null,i.a.createElement("h1",null,"Find Your True Self"),i.a.createElement("p",null,"Select a quiz to start"),a.map(function(e,t){return i.a.createElement(E,{name:e.name,permalink:e.permalink,img:e.img,key:t})})):i.a.createElement(s,null)}),p=a(26),f=a(15),v=a(116),g=(a(80),a(124)),h=a(117),y=Object(l.b)(function(e){return e.data.quiz?{result:e.data.quiz.results[e.scores.results.indexOf(Math.max.apply(Math,Object(p.a)(e.scores.results)))],quizName:e.data.quiz.quizName}:{result:null}},function(e){return{setFinishedQuiz:function(){e({type:"RESET_VIEW"})}}})(function(e){var t=e.result,a=e.setFinishedQuiz,n=e.quizName;return i.a.useEffect(function(){a()},[]),t?i.a.createElement("div",null,i.a.createElement("h1",null,n),i.a.createElement(v.a,null,i.a.createElement(v.a,{className:"Summary-topCard"},i.a.createElement("h1",null,t.title),t.img&&i.a.createElement("img",{className:"Question-img",src:"".concat("/personality_test","/img/").concat(t.img)})),i.a.createElement(v.a,{className:"Summary-bottomCard"},i.a.createElement(h.a,{variant:"body1"},i.a.createElement("p",null,t.description," ")),i.a.createElement(u.b,{to:"/quiz/"},i.a.createElement(g.a,{className:"Summary-buttons",variant:"outlined"},i.a.createElement("h4",null,"Go again"))),i.a.createElement(u.b,{to:"/"},i.a.createElement(g.a,{className:"Summary-buttons",variant:"outlined"},i.a.createElement("h4",null,"Checkout some others")))))):i.a.createElement(f.a,{to:"/"})});!function(e){e[e.start=0]="start",e[e.quiz=1]="quiz",e[e.summary=2]="summary",e[e.create=3]="create"}(n||(n={}));var S=n,N=(a(89),Object(l.b)(function(e){var t=(e.pageView.activeQuestion+1)*e.pageView.questionOrder%e.data.quiz.questions.length;return{activeQuizQuestion:e.data.quiz.questions[t],isLast:e.pageView.activeQuestion===e.data.quiz.questions.length}},function(e){return{onAnswer:function(t,a){a?(e({type:"ADD_SCORES",payload:t}),e({type:"CHANGE_VIEW",payload:S.summary})):(e({type:"ADD_SCORES",payload:t}),e({type:"ADVANCE_QUESTION"}))}}})(function(e){var t=e.activeQuizQuestion,a=e.onAnswer,n=e.isLast;return n?i.a.createElement(f.a,{to:"/summary"}):i.a.createElement("div",null,i.a.createElement(v.a,{className:"Question-questionImg-Card"},i.a.createElement("h2",{className:"Question-question"},t.question),t.img&&i.a.createElement("img",{className:"Question-img",src:"".concat("/personality_test","/img/").concat(t.img)})),i.a.createElement(v.a,{className:"Question-answers-Card"},t.answers.map(function(e,t){return i.a.createElement(g.a,{key:t,className:"Question-answer",variant:"outlined",onClick:function(){a(e.values,n)}},e.answer)})))})),z=a(16),O={quizList:[{}],quiz:null},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[PERSONALITY] SET_QUIZ":return Object(z.a)({},e,{quiz:t.payload});case"[PERSONALITY] SET_LIST":return Object(z.a)({},e,{quizList:Object(p.a)(t.payload)});case"CLEAR_QUIZ":return Object(z.a)({},e,{quiz:null})}return e},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,t=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],a=Math.floor(24*Math.random());return e!==t[a]?t[a]:t[a+1]},q=[function(e){var t=e.dispatch;return function(e){return function(a){return"[PERSONALITY] GET_LIST"===a.type&&fetch("/personality_test/quizList.json").then(function(e){return e.json()}).then(function(e){t({type:"[PERSONALITY] SET_LIST",payload:e})}).catch(function(e){console.log("Page Not Found")}),e(a)}}},function(e){var t=e.dispatch;return function(e){return function(a){return"[PERSONALITY] GET_QUIZ"===a.type&&fetch("/personality_test/quizes/"+a.payload+"/quiz.json").then(function(e){return e.json()}).then(function(e){t({type:"[PERSONALITY] SET_QUIZ",payload:e}),t({type:"SET_QUESTION_ORDER",payload:Q(e.questions.length)})}).catch(function(e){t({type:"FAILED_LOADING_QUIZ"})}),e(a)}}}],w=a(119),I=a(118),T=a(6),L=a(7),_=Object(l.b)(function(e){return{activeQuiz:e.data.quiz,startingNewQuiz:0===e.pageView.activeQuestion,failedToLoadQuiz:e.pageView.failedToLoadQuiz,quiz:e.data.quiz,currentQuestion:e.pageView.activeQuestion}},function(e){return{resetScores:function(){e({type:"RESET_SCORES"})},getQuizData:function(t){return e(function(e){return{type:"[PERSONALITY] GET_QUIZ",payload:e}}(t))}}})(function(e){var t=e.match,a=e.activeQuiz,n=e.startingNewQuiz,r=e.resetScores,c=e.getQuizData,o=e.failedToLoadQuiz,u=e.quiz,l=e.currentQuestion;i.a.useEffect(function(){n&&(t.params.permalink&&c(t.params.permalink),r())},[]);var m=Object(I.a)(function(e){return{root:{flexGrow:1},margin:{margin:e.spacing(1)}}})(),E=Object(T.a)({root:{height:10,backgroundColor:Object(L.d)("#ff6c5c",.5)},bar:{borderRadius:20,backgroundColor:"#ff6c5c"}})(w.a);if(o)return i.a.createElement(f.a,{to:"/"});if(a){var d=l/u.questions.length*100;return i.a.createElement("div",null,i.a.createElement("h1",null,a.quizName),i.a.createElement(E,{className:m.margin,variant:"determinate",color:"secondary",value:d}),i.a.createElement(v.a,null,i.a.createElement(N,null)))}return i.a.createElement(s,null)}),A=a(120),j=a(121),R=a(58),C=a.n(R),k=(a(90),function(){return i.a.createElement("header",null,i.a.createElement(A.a,{position:"static"},i.a.createElement(j.a,null,i.a.createElement("img",{src:C.a,className:"App-logo",alt:"logo"}),i.a.createElement("div",{className:"navBar"},i.a.createElement(u.c,{exact:!0,to:"/",className:"nav-link",activeClassName:"nav-link-active"},i.a.createElement(g.a,{variant:"contained",color:"secondary",className:"navBar-Button"},i.a.createElement(h.a,{variant:"h6",className:"mx-3 cursor-pointer"},"Start New Quiz"))),i.a.createElement(u.c,{exact:!0,to:"/summary",className:"nav-link",activeClassName:"nav-link-active"},i.a.createElement(g.a,{variant:"contained",color:"secondary",className:"navBar-Button"},i.a.createElement(h.a,{variant:"h6",className:"mx-3 cursor-pointer"},"Finish Now")))))))}),V=a(60),D=a(122),x=a(123),U=Object(l.b)(function(e){return{activeView:e.pageView.activeView,isQuizListLoaded:e.data.quizList.length>2}},function(e){return{getData:function(){return e({type:"[PERSONALITY] GET_LIST"})}}})(function(e){e.activeView;var t=e.getData;e.isQuizListLoaded;i.a.useEffect(function(){t()},[]);var a=Object(V.a)({palette:{primary:{main:"#C1A600"}}});return i.a.createElement(D.a,{theme:a},i.a.createElement("div",{className:"App"},i.a.createElement(k,null),i.a.createElement(x.a,{maxWidth:"sm"},i.a.createElement(f.d,null,i.a.createElement(f.b,{exact:!0,path:"/",component:d}),i.a.createElement(f.b,{path:"/start",component:d}),i.a.createElement(f.b,{path:"/quiz/:permalink",component:_}),i.a.createElement(f.b,{path:"/quiz",component:_}),i.a.createElement(f.b,{path:"/summary",component:y})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(27),P={activeQuestion:0,questionOrder:1,failedToLoadQuiz:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUESTION_ORDER":return Object(z.a)({},e,{questionOrder:t.payload});case"ADVANCE_QUESTION":return Object(z.a)({},e,{activeQuestion:e.activeQuestion+1});case"CHANGE_VIEW":return Object(z.a)({},e,{activeView:t.payload,activeQuestion:0});case"RESET_VIEW":return Object(z.a)({},P);case"FAILED_LOADING_QUIZ":return Object(z.a)({},e,{failedToLoadQuiz:!0});default:return e}},W=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}},Z={results:[0,0,0,0]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SCORES":return Object(z.a)({},e,{results:e.results.map(function(e,a){return e+t.payload[a]})});case"RESET_SCORES":return Z;default:return e}};var F=a(59),J=a.n(F),M=function(){var e=G.a.apply(void 0,Object(p.a)(q)),t=W(),a=Object(G.c)({scores:B,data:b,pageView:Y});return Object(G.d)(a,t,e)}();M.subscribe(J()(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log("unable to save to local storage.")}}(M.getState())},1500)),window.location.hostname.indexOf("localhost")>-1&&(window.store=M),o.a.render(i.a.createElement(l.a,{store:M},i.a.createElement(u.a,null,i.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e,t,a){e.exports=a.p+"static/media/logo.d3e32553.png"},66:function(e,t,a){e.exports=a(100)},75:function(e,t,a){},76:function(e,t,a){},80:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.d1e287be.chunk.js.map