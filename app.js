// init Github
const github = new Github;

// init UI 
const ui = new UI;

// Search User 
const searchUser = document.getElementById('searchUser');

// search input event listener 
searchUser.addEventListener('keyup', (e) => {
    // get input text 
    const userText = e.target.value;

    if (userText !== '') {

//  console.log(userText);

        // make http call
        github.getUser(userText)
        .then(data => {
            console.log(data);
            if(data.profile.message === 'Not Found') {
                // show ALERT
                ui.showAlert('User Not Found', 'alert alert-danger');
            } else {
                ui.showProfile(data.profile);
            }

        })
    } else {
        // clear profile
        ui.clearProfile();
    }
});

