class Github {

    constructor(){
        this.cliend_id = 'ff706014c7d07c70f55d';
        this.cliend_secret = '0ce2eff2874dfc9026fe162959bad1c2fdfa0f29';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }


    async getUser(user){
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.cliend_id}
             &client_secret=${this.cliend_secret}`);

             const repoResponse = await fetch(
                `https://api.github.com/users/${user}/repos?per_page=${this.repos_count }&sort=${this.repos_sort}&client_id=${this.cliend_id}
                 &client_secret=${this.cliend_secret}`);

             const profile = await profileResponse.json();
             const repos = await repoResponse.json();

             return {
                 profile,
                 repos
             }

    }

}