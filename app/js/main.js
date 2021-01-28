window.addEventListener('load',()=>{
    let long;
    let lat;
    let tempDescription = document.querySelector('.temp__description');
    let tempDegree = document.querySelector('.temp__section__degree');
    let locTimezone = document.querySelector('.location__timezone');
    let img =document.querySelector("body > div.location > img")
    let apiId='74c2cc5140a4fd8db4ffcb253ac8f149';
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = 'https://cors-anywhere.herokuapp.com/'
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiId}`
            fetch(api)
            .then(resp => {
                return resp.json();
            }).then( data => {
                // console.log(data);
                let main = data.main;
                let {description,icon } = data.weather[0];
                let sityName =data.name;
                tempDegree.textContent = `${273.15 -+main.temp}`;
                tempDescription.textContent =description;
                let imgUrl = `http://openweathermap.org/img/w/${icon}.png`
                locTimezone.textContent = sityName;
                // console.log(sityName)
                // console.log(`${273.15 -+main.temp}`)
                // console.log(icon)
                img.setAttribute('src',imgUrl)
            })
        })
    } else {
        // h1.textContent ='Для корректной работы приложения, нужно разрешить доступ';
    }
});