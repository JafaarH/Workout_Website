import { AiFillFire, AiOutlineFire } from "react-icons/ai";

type props = {
    rate: number
}

const RatingTrain = ({rate}: props) => {
    return (
        <div>
            {
                [...Array(5)].map((_,i)=> (
                    <span key={i} style={{color: "red"}}>
                        {(rate > i ) ? (
                            <AiFillFire />
                        ) : (<AiOutlineFire />)}
                    </span>
                ))
            }
        </div>
    )
} 
export default RatingTrain;