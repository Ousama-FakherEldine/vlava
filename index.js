fetch('https://ousfd1998.herokuapp.com/data')
    .then(response=>response.json())
    .then(
        data=>{
            var people=document.getElementById("people");
            data.Sheet1.forEach(element => {
                var person=document.createElement("option");
                person.innerHTML=element.A+" "+element.B;
                people.appendChild(person);
            });
        }
    )