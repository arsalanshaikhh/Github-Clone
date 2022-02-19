async function getData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

function displayRepos(repos, parentContainer) {
  repos.forEach((repo) => {
    let repoCard = document.createElement("div");
    repoCard.setAttribute("id", "card");
    let visibility = document.createElement("p");
    visibility.textContent = repo.visibility;
    visibility.setAttribute("id", "vis");
    let lang = document.createElement("p");
    lang.innerHTML = repo.language;
    lang.setAttribute("class", "lang");

    let repoElement = document.createElement("h3");
    repoElement.textContent = repo.name;
    repoElement.setAttribute("class", "he");
    repoCard.append(repoElement, visibility, lang);
    parentContainer.append(repoCard);
  });
}

export { getData, displayRepos };
