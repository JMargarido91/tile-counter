import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div>

        <header className="bg-dark text-white p-5 hero-container">
        <h1 className="">Board Games Tile Counter</h1>

      </header>

            <div className="container pt-4">
                <div className="row">
                    <div className="col-6 col-lg-3 text-center">
                        <Link to="/carcassonne" className="gamesTitle">
                            <img src="images/carcassonne/carcassonne.jpg"></img>
                            <h3>Carcassonne</h3>
                            </Link>
                    </div>
                    <div className="col-6 col-lg-3 text-center">
                        <Link to="/cacao" className="gamesTitle">
                            <img src="images/cacao/cacao.jpg"></img>
                            <h3>Cacao</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home