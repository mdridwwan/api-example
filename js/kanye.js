const loadQoutes = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayQoute(data))
}



const displayQoute = data => {
    const qouantElement = document.getElementById('qoute');
    qouantElement.innerText = data.quote;

}

// loadQoutes()