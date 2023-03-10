function Header() {
  return (
    <nav className="cyan darken-3">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Riperocks/React-movies/tree/gh-pages">
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
