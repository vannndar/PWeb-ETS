$(document).ready(function() {


    $.get('http://159.223.51.203:81/api/bio', function(bio) {
        console.log(bio);
        const doc = document.getElementById("container");
        
        for(let x in bio){
            const element = document.createElement('div');
            element.classList.add('col-xl-3', 'col-md-3', 'mb-4');
            const element2 = document.createElement('div');
            element2.classList.add('card', 'border-left-primary' , 'border-0', 'border-start','border-5', 'border-primary', 'shadow', 'h-100', 'py-2');
            const element3 = document.createElement('div');
            element3.classList.add('card-body');
            const element4 = document.createElement('div');
            element4.classList.add('row', 'no-gutters', 'align-items-center');
            const element5 = document.createElement('div');
            element5.classList.add('text-xs', 'font-weight-bold', 'text-primary', 'text-uppercase', 'mb-1');
            element5.innerText = bio[x].name;
            const element6 = document.createElement('div');
            element6.classList.add('h5', 'mb-0', 'text-gray-800');
            element6.innerText = bio[x].id;
            element4.appendChild(element5);
            element4.appendChild(element6);
            element3.appendChild(element4);
            element2.appendChild(element3);
            element.appendChild(element2);
            doc.appendChild(element);
            console.log(bio[x].name);
        }
    }, "json");
    return false;

});
