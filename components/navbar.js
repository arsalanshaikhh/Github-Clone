function navbar() {
  return `<div id="logo">
    <a href="/">
      <img
        src="https://www.eriklopezalfaro.com/static/portfolio/images/github.png"
        alt=""
      />
    </a>
  </div>
  <div id="search">
    <input type="text" value="coder-arsalan" id="search-input" placeholder="Search or Jump to..." />
  </div>

  <div id="option">
    <ul id="list">
      <li>Pull Request</li>
      <li>Issues</li>
      <li>Market Place</li>
      <li>
        <a href="explore.html">Explore</a>
      </li>
    </ul>
  </div>
  <div id="profile">
    <img
      src="https://www.unoreads.com/user_profile_pic/demo-user.png"
      alt=""
      id="profile-img"
    />
  </div>`;
}

export default navbar;
