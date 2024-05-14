// method to create any element in react actually return an object and it take 3 argument element name, object, content of element
// The main function of an object is to pass an attribute to it so that new element will get some attribites

const heading = React.createElement("h1",{id:"heading", class:"h1"},"I am Heading Written By React");

// method to create root element
const root1 = ReactDOM.createRoot(document.getElementById("root1"));

// method to first convert the heading which is an object to an h1 element after than it append the child in react using render
// vvi - Whenever we do render than whatever there initially in root1 will get replaced by heading, its not append its replace
root1.render(heading);



//  How to make nested div 

//  <div id="parent">
//     <div id="child">
//         <h2>Hi I am under nested div created by react</h2>
//         <h2>Hi I am under nested div created by react</h2>
//     </div>
//  </div>


// note if we want to pass 2 heading inside the child div than we pass the  both h2 in an array []

const nestedDiv = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[ React.createElement("h2",{},"Hi I am under nested div created by react"),
  React.createElement("h2",{},"Hi I am under nested div created by react") ]    
))


const root2 = ReactDOM.createRoot(document.getElementById("root2"));


root2.render(nestedDiv);



