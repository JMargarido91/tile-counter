import { Link } from "react-router-dom"

const ReturnButton = () => {
    return (
        <div className="text-center mb-3">
        <p>Click to mark a tile and shift+click to unmark it</p>
        <Link to="/" className="return">Choose another game</Link>
        </div>
    )
}

export default ReturnButton