import {AiFillFire, AiOutlineFire} from "react-icons/ai";

type prop = {
    rate: number
}

const Rating = ({rate}: prop) => {
    return (
        <div>
            {[...Array(5)].map((_, i) => (
                <span key={i} style={{color: "red"}} >
                { (rate > i) ? (
                 <AiFillFire />
                ) :(<AiOutlineFire />)}
                 </span>
            ))}
        </div>
    )
}
export default Rating;