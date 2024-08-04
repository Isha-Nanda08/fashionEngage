import { useState } from "react";
import FullView from "../../components/fullView/FillView";
import './itemPage.css'
import Navbar from "../../components/navbar";

export default function ItemPage1() {
    const item = { clothImg: '1.png', stageColor: 'red', bgColor: 'transparent', title: 'green', description: 'desc 3', cost: '700', img: '1.png', id: 1}
    const [walk, setWalk] = useState(false)
    return <section id="page">
        {/* add navigation section here */}
        <Navbar/>
        <div className="container">
            <div className="left">
                <FullView clothImg={item.clothImg} stageColor={item.stageColor} bgColor={item.bgColor} walk={walk}/>
            </div>
            <div className="right">
                <h2>{item.title}</h2>
                <p className='description'>{item.description}</p>
                <p className='cost'>Rs. {item.cost}</p>

                <button onClick={() => setWalk(!walk)}>walk</button>
                <button>View Ar</button>
                <button>Buy</button>
            </div>
        </div>
    </section>
}