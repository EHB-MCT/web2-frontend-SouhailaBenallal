let input = document.getElementById("inputTag");
let imageName = document.getElementById("imageName")

// input.addEventListener("change", ()=>{
//     let inputImage = document.querySelector("input[type=file]").files[0];

//     imageName.innerText = inputImage.name;
// })
let list = [];
let events = [];
fetch('https://web2-backend-souhailabenallal.herokuapp.com/events')
    .then(response => response.json())
    .then(data => {
        events = data;
        console.log(events);
        events.forEach(event => {
            let div = document.createElement('div');
            div.className = 'event';
            // let img = document.createElement('img');
            // img.src = event.image;
            let a = document.createElement('a');
            a.href = event.website;
            a.innerText = event.name;
            let h3 = document.createElement('h3');
            h3.innerText = event.name;
            let p = document.createElement('p');
            p.innerText = event.description;
            let span = document.createElement('span');
            span.innerText = event.location;
            let button = document.createElement('button');
            button.innerText = 'Edit';
            button.className = 'edit';
            button.addEventListener('click', () => {
                editevent(event);
            }
            );
            let buttonDelete = document.createElement('button');
            buttonDelete.innerText = 'Delete';
            buttonDelete.className = 'delete';
            buttonDelete.addEventListener('click', () => {
                deleteEvent(event);
            }
            );
            // div.appendChild(img);
            div.appendChild(a);
            div.appendChild(h3);
            div.appendChild(p);
            div.appendChild(span);
            div.appendChild(button);
            div.appendChild(buttonDelete);
            document.querySelector('.events').appendChild(div);
        }
        );
    }
    );
    function deleteEvent(event) {
        fetch('https://web2-backend-souhailabenallal.herokuapp.com/events/' + event._id, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.querySelector('.events').innerHTML = '';
                fetch('https://web2-backend-souhailabenallal.herokuapp.com/events')
                    .then(response => response.json())
                    .then(data => {
                        events = data;
                        console.log(events);
                        events.forEach(event => {
                            let div = document.createElement('div');
                            div.className = 'event';
                            let a = document.createElement('a');
                            a.href = event.website;
                            a.innerText = event.name;
                            let h3 = document.createElement('h3');
                            h3.innerText = event.name;
                            let p = document.createElement('p');
                            p.innerText = event.description;
                            let span = document.createElement('span');
                            span.innerText = event.location;
                            let button = document.createElement('button');
                            button.innerText = 'Edit';
                            button.className = 'edit';
                            button.addEventListener('click', () => {
                                editevent(event);
                            }
                            );
                            let buttonDelete = document.createElement('button');
                            buttonDelete.innerText = 'Delete';
                            buttonDelete.className = 'delete';
                            buttonDelete.addEventListener('click', () => {
                                deleteEvent(event);
                            }
                            );
                            div.appendChild(a);
                            div.appendChild(h3);
                            div.appendChild(p);
                            div.appendChild(span);
                            div.appendChild(button);
                            div.appendChild(buttonDelete);
                            document.querySelector('.events').appendChild(div);
                        }
                        );
                    }
                    );
            }
            );
    }

