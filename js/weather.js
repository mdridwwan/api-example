const inputButton = async() => {
    const inputValue = document.getElementById('input-value');
    console.log(inputValue.value);
    const inputKey = inputValue.value;
    inputValue.value = '';
    const key = '7530ca15270de40dea028b62f109d597';
    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${inputKey}&appid=${key}`)
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.coord);
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => console.log(data))

}