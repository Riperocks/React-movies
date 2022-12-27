function Footer() {
    return <footer className="page-footer cyan darken-1">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="https://github.com/Riperocks/React-movies/tree/gh-pages">Repo</a>
      </div>
    </div>
  </footer>
}

export {Footer}