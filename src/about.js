export {about};

const about = function(page){
    let elements = {
        h1: document.createElement("h1"),
        div1: document.createElement('div'),
        div2: document.createElement('div'),
    };

    elements.h1.innerText = "Our Story";
    elements.div1.innerText = `we decided to start a bakery.
At first, nobody wanted to eat our cookies.
one day, we discoverd employing grandmas to be profitable, but ended up realizing that cookies, comes with a steep price to pay, and end up
discovering a line that should not have been crossed by mankind`;
elements.div2.innerText = 'MAY THE GOLDEN COOKIE BE WITH YOU';

    Object.keys(elements).forEach(key => {
     page.appendChild(elements[key])
    });
}