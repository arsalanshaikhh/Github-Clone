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
    let id = document.createElement("p");
    id.textContent = repo.id;
    let repoElement = document.createElement("p");
    repoElement.textContent = repo.full_name;
    repoCard.append(id, repoElement);
    parentContainer.append(repoCard);
  });
}

export { getData, displayRepos };
