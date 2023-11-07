// const heading =   React.createElement('h1',{id:'heading', class:'heading'}, 'Hello World from React');
//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(heading);
import React from "react";
import  ReactDOM  from "react-dom/client";

// 2nd assingment

// const parent =   React.createElement('div',{id:'parent', class:'parent'},
//  [React.createElement('div',{id:'child'},
//  [React.createElement('h1',{id:'heading'},'i am new h1 heading'),
//  React.createElement('h2',{id:'heading2'}, 'i am h2 tag')]),
 
//  React.createElement('div',{id:'child2'},
//  [React.createElement('h1',{id:'heading'},'i am heading'),
//  React.createElement('h2',{id:'heading2'}, 'i am h2 tag')])]);

// 3rd assingment

// const Heading = () =>(
// <h1 id="heading" className="head"  tabIndex={1}>Heading using JSX</h1>);

// React Functional Component
// const num = 10;

// const elem = <span>span text</span>
const title = () =>  (
    <h1 className ="head" tabIndex="5">
        
 heading    </h1>
)
const Headingfunctional = () =>(

    <div id="container">  
   {title()}
    {/* <Heading /> */}
     <h1 id="heading">hii</h1>
    <h2>hiiiiiiiiiii</h2> </div>
  
)
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Headingfunctional />);

