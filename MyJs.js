function go(){
     setTimeout(() => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = '<h2> Unknown emotions </h2>' + rest;
     }, 2000);
};

