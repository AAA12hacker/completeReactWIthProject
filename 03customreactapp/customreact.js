/* 
here in this approach we are need declare prop again and again to over come we will use for in loop
as it will be useful in objects
// function customRender(reactElement, mainContainer) {
//   const domElemet = document.createElement(reactElement.type);
//   domElemet.innerHTML = reactElement.children;
//   domElemet.setAttribute("href", reactElement.props.href);
//   domElemet.setAttribute("target", reactElement.props.target);
//   mainContainer.appendChild(domElemet);
// }
   */

function customRender(reactElement, mainContainer) {
  const domElemet = document.createElement(reactElement.type);
  domElemet.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    domElemet.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.appendChild(domElemet);
}
// this will be the structure of every react element
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#custom-root");
/* according to react it will have two things 
1st container, and the html element object in the render function
*/
customRender(reactElement, mainContainer);
