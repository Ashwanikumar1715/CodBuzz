import Link from "next/link"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/"><h1>CodBuzz</h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Service
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="/appdevelopment">Mobile App Development</Link></li>
            <li><Link className="dropdown-item" href="/webdevelopment">Web Development</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/internship">Internship</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           jobs
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="/">Action</Link></li>
            <li><Link className="dropdown-item" href="/">Another action</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/about">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/contact">Contact us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
