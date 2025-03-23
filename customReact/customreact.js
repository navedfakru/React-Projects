// function customRender(reactElement, container){
//     /*
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)
//     container.appendChild(domElement)
//     */
//    const domElement = document.createElement(reactElement.type);
//    domElement.innerHTML = reactElement.children
//    for (const prop in reactElement.props) {
//         if (prop === 'children') continue;
//         domElement.setAttribute(prop, reactElement.props[prop])
//    }
//    container.appendChild(domElement)
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blanck'
//     },
//     children: "Cleck me to visit google"
// }

// const mainContainer = document.querySelector('#root');

// customRender(reactElement, mainContainer)

function customRender(reactElement, container){
    // let domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

// const reactElement = {
//     type: "a",
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: "click this link for visit google website"
// }
const reactElement = {
    type: "img",
    props: {
        src: "https://i.ytimg.com/vi/FxgM9k1rg0Q/maxresdefault.jpg",
        height: "200",
        style: "border: 10px solid black; display: block; margin: auto;"

    },
    children: "click this link for visit google website"
}

const mainContainer = document.getElementById("root");


customRender(reactElement, mainContainer)