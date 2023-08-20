function customRender(reactElement, container) {
  // version 1
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);

  //   container.appendChild(domElement);

  //   better version
  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === "children") continue;

    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
}

/*
function APP()
{
    return (
        <a href = "https:// www.google.com" target = "_blank">Visit Google</a>
    )
}

THIS IS CONVERTED INTO reactElement like structure in REACTJS
*/

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },

  children: "Visit Google",
};

const mainContainer = document.querySelector("#root");

// method to render the element;

customRender(reactElement, mainContainer);

/*
THIS IS HAPPEN WHEN we write "<a href = "https:// www.google.com" target = "_blank">Visit Google</a>" this in react
                _||_
                \  /
                 \/

                 const reactElement = React.createElement(
                    'a',
                    {href : "https:// www.google.com",  target : "_blank"},
                    'Visit Google',
                    Varible => directly injected here..
                 )
*/
