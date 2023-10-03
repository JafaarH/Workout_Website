import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type props = {
    rate: number
}

const BDRating = ({rate}: props) => {
    return (
        <div>
            {
                [...Array(5)].map((_, i)=> (
                    <span key={i} style={{color: "gold"}}>
                        {(rate > i) ? (
                            <AiFillStar />
                        ) : (<AiOutlineStar />)}
                    </span>
                ))
            }
        </div>
    )
}
export default BDRating;