let selectOption = document.querySelector('#selectList')

function BreedList() {


    fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then((data) => {

            //  console.log(data.message)

            for (let breed in data.message) {
                let option = document.createElement('option');
                option.value = breed;
                option.innerHTML = breed;
                selectOption.append(option)
            }
        })
        .catch(err => console.log(err))
}
BreedList();

document.querySelector('#serch-btn').addEventListener('click', () => {

    let breed = selectOption.value;
    console.log(breed);

    let imgDiv = document.querySelector('#dog-img');
    imgDiv.innerHTML = " "


    fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => res.json())
        .then((data) => {
            data.message.forEach(element => {
                let imges = document.createElement('img');
                imges.setAttribute('src', element)
                imges.style.height = "200px"
                imges.style.width = "300px"
                imges.style.margin = "10px" 

                imgDiv.append(imges);
                
            });
            
        }).catch(err => console.log(err));
            // console.log(data.message)
        });


