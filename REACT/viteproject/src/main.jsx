// import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const reactElement = (
//     <a href="https://google.com" target='_blank'>Visit Google</a>
// );

//! const reactElement = {
//!   type: "a",
//!   props: {
//!     href: "https://google.com",
//!     target: "_blank",
//!   },
//!   children: "Click me to visit google",
//! }; 

// const anotherUser = "this is another user";

// const reactElement = React.createElement(
//     'a',
//     {href:'https://google.com',target:'_blank'},
//     'Click me to go to google',
//     anotherUser
// )

// function MyApp() {
//     return(
//         <>
//         <h1>Custom App | webgod</h1>
//         </>
//     )
// }

ReactDOM.createRoot(document.getElementById('root')).render(
    
    // reactElement 
    //! MyApp()
    // <MyApp />
    <App/>
 
)
