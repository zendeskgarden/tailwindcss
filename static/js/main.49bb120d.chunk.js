(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],[,,,,function(e,a,s){e.exports={"message-group":"messagegroup_message-group__3bbIS","message-group--maker":"messagegroup_message-group--maker__lJItP","message-group--user":"messagegroup_message-group--user__2hDAW",title:"messagegroup_title__3znE8",avatar:"messagegroup_avatar__2T2LH"}},function(e,a,s){e.exports={message:"message_message__34WrO","message--maker":"message_message--maker__1cuZs","message--user":"message_message--user__hnc5p","action-list":"message_action-list__pnpm8",action:"message_action__8SDDv"}},function(e,a,s){e.exports={widget:"widget_widget__1i3jR",header:"widget_header__GdrfH",content:"widget_content__32gKa",wordmark:"widget_wordmark__1gUiS"}},,,,function(e,a,s){e.exports={"answer-bot":"app_answer-bot__3DeuL"}},,,,function(e,a,s){e.exports={textarea:"textarea_textarea__3JXC1"}},function(e,a,s){e.exports={log:"conversationlog_log__22O07"}},,,,,,function(e,a,s){},,function(e,a,s){"use strict";s.r(a);var t=s(1),r=s.n(t),c=s(12),n=s.n(c),i=(s(20),s(21),s(9)),l=s(13),o=s(6),j=s.n(o),d=s(0),m=function(e){var a=e.children,s=e.title;return Object(d.jsxs)("div",{className:j.a.widget,children:[Object(d.jsx)("div",{className:j.a.header,children:s}),Object(d.jsxs)("div",{className:j.a.content,children:[a,Object(d.jsx)(l.a,{className:j.a.wordmark,role:"presentation"})]})]})},u=s(7),h=s(8),b=s(3),g=s.n(b),x=s(14),p=s.n(x),O=r.a.forwardRef((function(e,a){var s=e.className,t=Object(h.a)(e,["className"]);return Object(d.jsx)("textarea",Object(u.a)({ref:a,className:g()(p.a.textarea,s)},t))}));O.displayName="Textarea";var _=s(15),w=s.n(_),f=function(e){var a=e.children,s=Object(t.useRef)(null);return Object(t.useLayoutEffect)((function(){s.current&&(s.current.scrollTop=s.current.scrollHeight)}),[]),Object(d.jsx)("div",{className:w.a.log,ref:s,children:a})},v=s(2),y=s(4),N=s.n(y),k=r.a.createContext("user"),S=function(e){var a,s=e.children,t=e.type,r=e.title,c=e.avatar;return Object(d.jsx)(k.Provider,{value:t,children:Object(d.jsxs)("div",{className:g()(N.a["message-group"],(a={},Object(v.a)(a,N.a["message-group--maker"],"maker"===t),Object(v.a)(a,N.a["message-group--user"],"user"===t),a)),children:[r&&Object(d.jsx)("div",{className:N.a.title,children:r}),s,c&&Object(d.jsx)("div",{className:N.a.avatar,children:c})]})})},T=s(5),H=s.n(T),I=function(e){var a,s=e.children,r=e.actions,c=Object(t.useContext)(k);return Object(d.jsxs)("div",{className:g()(H.a.message,(a={},Object(v.a)(a,H.a["message--maker"],"maker"===c),Object(v.a)(a,H.a["message--user"],"user"===c),a)),children:[s,r&&Object(d.jsx)("div",{className:H.a["action-list"],children:r})]})},C=function(e){var a=e.className,s=Object(h.a)(e,["className"]);return Object(d.jsx)("button",Object(u.a)({className:g()(a,H.a.action),type:"button"},s))},q=s(10),z=s.n(q),A=function(){return Object(d.jsxs)("div",{className:"py-4 px-2",children:[Object(d.jsxs)(m,{title:"Help",children:[Object(d.jsxs)(f,{children:[Object(d.jsxs)(S,{type:"maker",title:"Willow Kohlrabi \u2022 Bot",avatar:Object(d.jsx)(i.a,{className:z.a["answer-bot"],role:"presentation"}),children:[Object(d.jsx)(I,{children:"Hi, how can I help you today?"}),Object(d.jsx)(I,{children:"Ask me a question and I\u2019ll find you the answer."}),Object(d.jsx)(I,{children:"Or you can get in touch."})]}),Object(d.jsx)(S,{type:"user",children:Object(d.jsx)(I,{children:"Hours"})}),Object(d.jsxs)(S,{type:"maker",avatar:Object(d.jsx)(i.a,{className:z.a["answer-bot"],role:"presentation"}),children:[Object(d.jsx)(I,{children:"Our shop is open today from 10am to 8pm."}),Object(d.jsx)(I,{children:"Is there anything else I can help you with?"})]}),Object(d.jsx)(S,{type:"user",children:Object(d.jsx)(I,{children:"Get in touch"})}),Object(d.jsx)(S,{type:"maker",title:"Answer Bot",avatar:Object(d.jsx)(i.a,{className:z.a["answer-bot"],role:"presentation"}),children:Object(d.jsx)(I,{actions:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(C,{children:"Chat with a team member"}),Object(d.jsx)(C,{children:"Leave a message"}),Object(d.jsx)(C,{children:"Request a callback"})]}),children:"Here are some ways to get in touch."})})]}),Object(d.jsx)(O,{placeholder:"Type a search query here...","aria-label":"Type a search query here..."})]}),Object(d.jsxs)("div",{className:"max-w-4xl mx-auto mt-16",children:[Object(d.jsx)("h1",{className:"text-3xl leading-3xl font-semibold mb-6",children:"Zendesk Garden Tailwind CSS Example"}),Object(d.jsxs)("p",{className:"mb-5",children:["This is a mock implementation using ",Object(d.jsx)("a",{href:"https://tailwindcss.com/",children:"Tailwind CSS"})," and the ",Object(d.jsx)("a",{href:"https://github.com/zendeskgarden/tailwindcss",children:"@zendeskgarden/tailwindcss"})," ","plugin. No custom styles are used in this example. All styling and states are applied via Garden design tokens."," ",Object(d.jsx)("a",{href:"https://github.com/zendeskgarden/tailwindcss/tree/main/example",children:"View the source"})," ","for more information."]})]})]})};n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.49bb120d.chunk.js.map