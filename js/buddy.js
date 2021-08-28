const loadBudies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBudies(data))
}

loadBudies()

const displayBudies = data => {
    console.log(data.results)
    const budiesDiv = document.getElementById('budiess');
    const buddies = data.results;
    for (const buddy of buddies) {

        const p = document.createElement('p');
        p.innerText = `name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}  Email: ${buddy.email} `
        budiesDiv.appendChild(p)
        console.log(buddy.name.title);
    }
}


// const data = { result: [{ userName: { title: 'Mr.', name: "sakib khan" } }] }
// console.log(data.result[0].userName.name)
// const p = [1, 2, 3];
// const q = p.map(n => Math.pow(n, 3));
// console.log(q)

// const bondCode = ` I am Fake James bond . My new code is: 00${7+1+2}`
// console.log(bondCode)

// const loadBudies = () => {
//     fetch('https://randomuser.me/api/?results=5')
//         .then(res => res.json())
//         .then(data => console.log(data)
//             .try(error => console.log(error)))
// }