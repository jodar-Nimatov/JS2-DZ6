let formLogin = document.querySelector('.login')

formLogin.addEventListener('submit', (e) => {
    e.preventDefault()
    
    fetch('http://localhost:8080/login', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email: e.target[0].value,
        password: e.target[1].value
    })
}).then((res) => alert('succes', res))
.catch((err) => alert('error', err))
})
