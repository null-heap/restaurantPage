export {menu};

const menu = function(page){
    let elements = {
        h1: document.createElement("h1"),
        div1: document.createElement('div'),
        div2: document.createElement('div'),
        div3: document.createElement('div'),
    };




    elements.h1.innerText = "Menu";
    elements.div1.innerText = "\"Oh no. Oh no no no. Ohh this isn't right at all.\" - cat lady";
    elements.div2.innerText = `Fortune upgrades:
    1. Fortune #001 - 1.167 nonillion
    2. Fortune #002	-  7.778 nonillion
    3. Fortune #003	- 85.556 nonillion
    4. Fortune #004	- 933,333 nonillion
    `;
    elements.div3.innerText = "SPECIAL OFFER!: lactose intolerance relief tablets only 900 billion";
    console.log(elements.h1);

    Object.keys(elements).forEach(key => {
     page.appendChild(elements[key])
    });
}