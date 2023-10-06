// const heading =   React.createElement('h1',{id:'heading', class:'heading'}, 'Hello World from React');
//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(heading);
import React from "react";
import  ReactDOM  from "react-dom/client";


const parent =   React.createElement('div',{id:'parent', class:'parent'},
 [React.createElement('div',{id:'child'},
 [React.createElement('h1',{id:'heading'},'i am new heading'),
 React.createElement('h2',{id:'heading2'}, 'i am h2 tag')]),
 
 React.createElement('div',{id:'child2'},
 [React.createElement('h1',{id:'heading'},'i am heading'),
 React.createElement('h2',{id:'heading2'}, 'i am h2 tag')])]);
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(parent);
