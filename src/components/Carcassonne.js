import {useState} from 'react';
import Tile from './Tile';
import ReturnButton from './ReturnButton';

const Carcassonne = () => {

    let [counter, setCounter] = useState(71)

    return (
        <div className="container">
        <h1 className="text-center py-4 py-sm-1">Carcassonne Tile Counter</h1>
        <div className="container m-auto">

            <div className="row justify-content-md-center pt-4">

                <Tile image="images/carcassonne/road2ns.png" total="8" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/road2sw.png" total="9" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/road3.png" total="4" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/road4.png" total="1" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/cloister.png" total="4" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/cloisterr.png" total="2" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city3s.png" total="1" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city3.png" total="3" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city3sr.png" total="2" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city3r.png" total="1" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city11ne.png" total="2" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city11we.png" total="3" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city2nwsr.png" total="2" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city2nwr.png" total="3" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city2nws.png" total="2" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city2nw.png" total="3" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city2we.png" total="1" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city2wes.png" total="2" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city1rse.png" total="3" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city1rsw.png" total="3" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city1rwe.png" total="3" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city1rswe.png" total="3" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city1.png" total="5" counter={counter} setCounter={setCounter}/>
                <Tile image="images/carcassonne/city4.png" total="1" counter={counter} setCounter={setCounter}/>

            </div>

            <h2 className="text-center">Total: {counter}</h2>
           
        </div>

        <ReturnButton/>

        </div>
    );
}

export default Carcassonne