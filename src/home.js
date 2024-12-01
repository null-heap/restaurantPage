export {home};

const home = function(page){
    let elements = {
        h1: document.createElement("h1"),
        div1: document.createElement('div'),
        div2: document.createElement('div'),
        div3: document.createElement('div'),
    };

    elements.h1.innerText = "Purple's cookie factory";
    elements.div1.innerText = "News : beloved cookie magnate Purple's, erroneously reported as trampled to death by crazed fans, thankfully found to be escaped clone mistaken for original.";
    elements.div2.innerText = "\"Come give grandma a kiss.\" -grandma";
    elements.div3.innerText = "The universe has now turned into cookie dough, to the molecular level.";
    console.log(elements.h1);

    Object.keys(elements).forEach(key => {
     page.appendChild(elements[key])
    });
}