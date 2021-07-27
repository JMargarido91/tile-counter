import {useState} from 'react';


const Tile = ({image, total, counter, setCounter}) => {

    const [number, setNumber] = useState(total)
    const [finished, setFinished] = useState(false)
    const [shift, setShift] = useState(false)

    document.addEventListener('keydown', function(e) {
        if (e.key === "Shift") {
            setShift(true)
        }
    })
    document.addEventListener('keyup', function(e) {
        if (e.key === "Shift") {
            setShift(false)
        }
    })
    

    function handleClick(event) {
    
        if (shift === true) {
            if (number !== total) {
                setNumber(number+1);
                setCounter(counter + 1);
                setFinished(false);
            }

        }
        else {
            if (number !== 0) {
                setNumber(number-1);
                setCounter(counter - 1);

                if (number-1 === 0) {
                    setFinished(true)
                }

            }
        }

        if (number > total) {
            setNumber(total);
            setCounter(counter - 1);
        }

      }


    return (
        <div className="col-lg-2 col-3 text-center">
             <img className={finished ? 'imageOpacity' : null} src={image} alt="" onClick={() => handleClick()}></img>
             <p><span>{number}</span><span> / {total}</span></p>
        </div>
    )
}


export default Tile