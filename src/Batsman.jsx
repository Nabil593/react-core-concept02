import { useState } from "react"

export default function Batsman() {

    const [score, setScore] = useState(0);

    const handle = () => {
        const totatrun = score + 1;
        setScore(totatrun);
    };

    const handleFour = () => {
        const totalFour = score + 4;
        setScore(totalFour);
    };

    const habdleSix = () => {
        const titalSix = score + 6;
        setScore(titalSix);
    } 

    return(
        <div>
            <h3>Player: Bangla Batsman {score}</h3>
            {
                score > 50 && <p>You Got Half Cenchuri</p>
            }
            {
                score > 100 && <p>🎊🎉Cenchuri!🎉🎊</p>
            }
            <button onClick={handle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={habdleSix}>six</button>
        </div>
    )
}