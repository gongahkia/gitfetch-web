// let userName:string = "gongahkia"

let button1 = document.getElementById("button1");
button1?.addEventListener("click", buttonFunction);

const githubUserName1 = document.getElementById("githubUsername");
const githubBio = document.getElementById("githubBio");
const numPublicRepos = document.getElementById("numPublicRepos");
const numFollowers = document.getElementById("numFollowers");
const githubImage = document.getElementById("githubAvatarImage") as HTMLImageElement;

// --- touching the Github API
const getData = async(targetUrl) => {
    const response = await fetch(targetUrl);
    const data = await response.json();
    // console.log(data)
    const userGitName:string = data["login"];
    const userBio:string = data["bio"];
    const numFollowers1:number = data["followers"];
    const userAvatarImg:string = data["avatar_url"];
    const numPublicRepos1:number = data["public_repos"];
    console.log(userGitName, userBio, numFollowers1, userAvatarImg, numPublicRepos1);
    githubUserName1.textContent = `@${userGitName}`;
    githubBio.textContent = userBio;
    numPublicRepos.textContent = `${numPublicRepos1.toString()} public repos`;
    numFollowers.textContent = `${numFollowers1.toString()} followers`;
    githubImage.src = userAvatarImg;
}

// --- actual code flow

function githubUsername() {
    var userName:string = document.querySelector("input").value;
    alert("Retrieving your data...");
    const targetUrl:string = `https://api.github.com/users/${userName}`;
    getData(targetUrl);
}

function buttonFunction() {
    githubUsername();
}
    
