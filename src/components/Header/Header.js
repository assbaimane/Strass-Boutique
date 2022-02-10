import './Header.sass';


function Header(props){
    //const

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" onClick={()=> props.setCurrentPage("shop")}>STRASS BOUTIQUE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Candidature</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                    </div>
                    <button onClick={()=> props.setCurrentPage("cart")}><i className="fa-solid fa-bag-shopping"></i></button>
                </div>
            </nav>
        </div>
    );
}

export default Header;