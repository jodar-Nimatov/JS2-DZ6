let form = document.querySelector('.register')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch('http://localhost:8080/users', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        login: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value
        // password: e.target[3].value
    })
    }).then((res) => alert('Account created successfully', res))
    .catch((err) => alert('Account not created', err))
})
