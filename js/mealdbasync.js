const searchbtn = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    console.log(searchText)
    searchInput.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearch(data.meals))
}

const displaySearch = data => {
    console.log(data)
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    data.forEach(meal => {
        console.log(meal.idMeal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="mealDetails(${meal.idMeal})" class="card h-100">
            <img   src="${meal.strMealThumb}" class="card-img-top " alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 400)}</p>
            </div>
          </div>
            `
        searchResult.appendChild(div);
    })
}

const mealDetails = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.meals[0]);



    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayDetails(data.meals[0]))
}

const displayDetails = mealId => {
    const mealDiv = document.getElementById('meal-details');
    mealDiv.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img height=50%; src="${mealId.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${mealId.strMeal}</h5>
        <p class="card-text">${mealId.strInstructions.slice(0, 400)}</p>
        <a href="${mealId.strYoutube}" target=_blank;  class="btn btn-primary">Go somewhere</a>
    </div>
    `
    mealDiv.appendChild(div);
}