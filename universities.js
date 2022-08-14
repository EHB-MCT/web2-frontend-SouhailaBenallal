let input = document.getElementById("inputTag");
let imageName = document.getElementById("imageName")

// input.addEventListener("change", ()=>{
//     let inputImage = document.querySelector("input[type=file]").files[0];

//     imageName.innerText = inputImage.name;
// })
let list = [];
let universities = [];
fetch('https://web2-backend-souhailabenallal.herokuapp.com/universities')
    .then(response => response.json())
    .then(data => {
        universities = data;
        console.log(universities);
        universities.forEach(university => {
            let div = document.createElement('div');
            div.className = 'university';
            // let img = document.createElement('img');
            // img.src = university.image;
            let a = document.createElement('a');
            a.href = university.website;
            a.innerText = university.name;
            let h3 = document.createElement('h3');
            h3.innerText = university.name;
            let p = document.createElement('p');
            p.innerText = university.description;
            let span = document.createElement('span');
            span.innerText = university.location;
            let button = document.createElement('button');
            button.innerText = 'Edit';
            button.className = 'edit';
            button.addEventListener('click', () => {
                editUniversity(university);
            }
            );
            let buttonDelete = document.createElement('button');
            buttonDelete.innerText = 'Delete';
            buttonDelete.className = 'delete';
            buttonDelete.addEventListener('click', () => {
                deleteUniversity(university);
            }
            );
            // div.appendChild(img);
            div.appendChild(a);
            div.appendChild(h3);
            div.appendChild(p);
            div.appendChild(span);
            div.appendChild(button);
            div.appendChild(buttonDelete);
            document.querySelector('.universities').appendChild(div);
        }
        );
    }
    );
// function editUniversity(university) {
//     let form = document.createElement('form');
//     form.className = 'form';
//     let inputName = document.createElement('input');
//     inputName.type = 'text';
//     inputName.name = 'name';
//     inputName.value = university.name;
//     let inputDescription = document.createElement('input');
//     inputDescription.type = 'text';
//     inputDescription.name = 'description';
//     inputDescription.value = university.description;
//     let inputLocation = document.createElement('input');
//     inputLocation.type = 'text';
//     inputLocation.name = 'location';
//     inputLocation.value = university.location;
//     let inputWebsite = document.createElement('input');
//     inputWebsite.type = 'text';
//     inputWebsite.name = 'website';
//     inputWebsite.value = university.website;
//     let inputImage = document.createElement('input');
//     inputImage.type = 'file';
//     inputImage.name = 'image';
//     let inputId = document.createElement('input');
//     inputId.type = 'hidden';
//     inputId.name = 'id';
//     inputId.value = university.id;
//     let button = document.createElement('button');
//     button.innerText = 'Save';
//     button.type = 'submit';
//     button.className = 'save';
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         let formData = new FormData(form);
//         fetch('https://web2-backend-souhailabenallal.herokuapp.com/universities/' + university.id, {
//             method: 'PUT',
//             body: formData
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 window.location.reload();
//             }
//             );
//     }
//     );
//     form.appendChild(inputName);
//     form.appendChild(inputDescription);
//     form.appendChild(inputLocation);
//     form.appendChild(inputWebsite);
//     form.appendChild(inputImage);
//     form.appendChild(inputId);
//     form.appendChild(button);
//     document.querySelector('.universities').appendChild(form);
// }


function deleteUniversity(university) {
    fetch('https://web2-backend-souhailabenallal.herokuapp.com/universities/' + university._id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('.universities').innerHTML = '';
            fetch('https://web2-backend-souhailabenallal.herokuapp.com/universities')
                .then(response => response.json())
                .then(data => {
                    universities = data;
                    console.log(universities);
                    universities.forEach(university => {
                        let div = document.createElement('div');
                        div.className = 'university';
                        // let img = document.createElement('img');
                        // img.src = university.image;
                        let a = document.createElement('a');
                        a.href = university.website;
                        a.innerText = university.name;
                        let h3 = document.createElement('h3');
                        h3.innerText = university.name;
                        let p = document.createElement('p');
                        p.innerText = university.description;
                        let span = document.createElement('span');
                        span.innerText = university.location;
                        let button = document.createElement('button');
                        button.innerText = 'Edit';
                        button.className = 'edit';
                        button.addEventListener('click', () => {
                            editUniversity(university);
                        }
                        );
                        let buttonDelete = document.createElement('button');
                        buttonDelete.innerText = 'Delete';
                        buttonDelete.className = 'delete';
                        buttonDelete.addEventListener('click', () => {
                            deleteUniversity(university);
                        }
                        );
                        // div.appendChild(img);
                        div.appendChild(a);
                        div.appendChild(h3);
                        div.appendChild(p);
                        div.appendChild(span);
                        div.appendChild(button);
                        div.appendChild(buttonDelete);
                        document.querySelector('.universities').appendChild(div);
                    }
                    );
                }
                );
        }
        );
} 
