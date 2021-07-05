document.addEventListener("DOMContentLoaded", function (event) {
    fetch('https://api.github.com/users/julia-tsyb')
        .then(response => response.json())
        .then(user => {
            document.querySelector('.my_photo').src = user.avatar_url;
        })
        .catch(error => console.log(error));    
});
