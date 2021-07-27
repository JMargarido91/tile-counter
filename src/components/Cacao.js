import {useState} from 'react';
import ReturnButton from './ReturnButton';
import Tile from './Tile';

const Carcassonne = () => {

    let [counterJungle, setCounterJungle] = useState(19)
    let [counterWorker, setCounterWorker] = useState(11)
    let [counterOpponent, setCounterOpponent] = useState(11)

    return (
        <div className="container">
        <h1 className="text-center py-4 py-sm-1">Cacao Tile Counter</h1>
        <div className="container m-auto">

            <div className="row justify-content-md-center pt-4">

                <Tile image="images/cacao/cacao1.png" total="3" counter={counterJungle} setCounter={setCounterJungle}/>
                <Tile image="images/cacao/cacao2.png" total="2" counter={counterJungle} setCounter={setCounterJungle}/>
                <Tile image="images/cacao/market2.png" total="1" counter={counterJungle} setCounter={setCounterJungle}/>
                <Tile image="images/cacao/market3.png" total="3" counter={counterJungle} setCounter={setCounterJungle}/>
                <Tile image="images/cacao/market4.png" total="1" counter={counterJungle} setCounter={setCounterJungle}/>
                <Tile image="images/cacao/mine1.png" total="1" counter={counterJungle} setCounter={setCounterJungle}/>
                <Tile image="images/cacao/mine2.png" total="1" counter={counterJungle} setCounter={setCounterJungle}/>
                <Tile image="images/cacao/temple.png" total="4" counter={counterJungle} setCounter={setCounterJungle}/>
                <Tile image="images/cacao/token.png" total="1" counter={counterJungle} setCounter={setCounterJungle}/>
                <Tile image="images/cacao/water.png" total="2" counter={counterJungle} setCounter={setCounterJungle}/>

            </div>

            <h2 className="text-center">Total: {counterJungle}</h2>

            <div className="row justify-content-md-center pt-4">

                <Tile image="images/cacao/worker-4-sides.png" total="4" counter={counterWorker} setCounter={setCounterWorker}/>
                <Tile image="images/cacao/worker-2.png" total="5" counter={counterWorker} setCounter={setCounterWorker}/>
                <Tile image="images/cacao/worker-3-up.png" total="1" counter={counterWorker} setCounter={setCounterWorker}/>
                <Tile image="images/cacao/worker-3-bottom.png" total="1" counter={counterWorker} setCounter={setCounterWorker}/>
                

            </div>

            <h2 className="text-center">Total: {counterWorker}</h2>

            <div className="row justify-content-md-center pt-4">

                <Tile image="images/cacao/opp-worker-4-sides.png" total="4" counter={counterOpponent} setCounter={setCounterOpponent}/>
                <Tile image="images/cacao/opp-worker-2.png" total="5" counter={counterOpponent} setCounter={setCounterOpponent}/>
                <Tile image="images/cacao/opp-worker-3-up.png" total="1" counter={counterOpponent} setCounter={setCounterOpponent}/>
                <Tile image="images/cacao/opp-worker-3-bottom.png" total="1" counter={counterOpponent} setCounter={setCounterOpponent}/>

            </div>

            <h2 className="text-center">Total: {counterOpponent}</h2>
                    
        </div>

        <ReturnButton/>
        
        </div>
    );
}

export default Carcassonne