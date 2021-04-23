document.addEventListener("DOMContentLoaded", function (event) {
    fetch('https://api.github.com/users/Julia5883703')
        .then(response => response.json())
        .then(user => {
            document.querySelector('.my_photo').src = user.avatar_url;
        })
        .catch(error => console.log(error));    
});
