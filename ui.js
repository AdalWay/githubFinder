class UI {
    constructor(){
        this.profile = document.getElementById('profile');

    }

    showProfile(user){
        this.profile.innerHTML = //html
        `
        <div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-3">
        <img src="${user.avatar_url}" class="img-fluid mb-2">
        <a class="btn btn-primary btn-block mb-4" href="${user.url}" target="_blank">
        View profile
        </a>
        </div>

        <div class="col-md-3">
        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-success">Follower: ${user.followers}</span>
        <span class="badge badge-info">Fallowin: ${user.following}</span>
        <br><br>
        <ul class="list-group">
        <li class="list-group-item">Company: ${!user.company ? 'No name' : user.company }</li>
        <li class="list-group-item">Website/Blog: ${user.blog}</li>
        <li class="list-group-item">Location: ${user.location}</li>
        <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>

        </div>
        </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
`;
    }

    //show user repos
    showRepos(repos){
        let output = '';
        repos.forEach(repo => {
            output += `
            <div class="card card-body mb-2">
            <div class="row">
            <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6>
        <span class="badge badge-success">Stars: ${repo.stargazers_count}</span>
        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
        <span class="badge badge-success">Forks: ${repo.forks_count}</span>

            </div>
            </div>
            </div>
            `;
        });

        document.getElementById('repos').innerHTML = output;


    }

    clearProfile(){
        this.profile.innerHTML = '';
        this.clearAlert();
    }

    showAlert(message, className){
        //clear any remaining alert
        this.clearAlert();
        //create a div
        const div = document.createElement('div');
        //add classes
        div.className = className;
        //add text
        div.appendChild(document.createTextNode(message));
        //get the parent
        const container = document.querySelector('.searchContainer');
        //seach box
        const search = document.querySelector('.search');
        //insert the alert
        container.insertBefore(div, search);

        //Timeout after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);


    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }

}