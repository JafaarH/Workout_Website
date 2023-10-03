import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type prop = {
    rate: number
}

const Rating2 = ({rate}: prop) => {
    return (
        <div style={{color: "gold"}} >
            {[...Array(5)].map((_,i) => (
                <span key={i}>
                    {(rate > i) ? (
                        <AiFillStar />
                    ) : (<AiOutlineStar />)}
                </span>
            ))}
        </div>
    )
}
export default Rating2;