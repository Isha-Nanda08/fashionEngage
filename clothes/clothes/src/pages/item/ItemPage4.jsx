import { useState } from "react";
import FullView from "../../components/fullView/FillView";
import './itemPage.css';
import Navbar from "../../components/navbar";
import { useNavigate } from "react-router-dom";

export default function ItemPage4() {
    const item = { clothImg: '4.png', stageColor: 'slategrey', bgColor: 'transparent', title: 'green', description: 'desc 3', cost: '700', img: '1.png', id: 4 }
    const [walk, setWalk] = useState(false);
    const navigate = useNavigate();

    return (
        <section id="page">
            <Navbar/>
            <div className="container">
                <div className="left">
                    <FullView clothImg={item.clothImg} stageColor={item.stageColor} bgColor={item.bgColor} walk={walk}/>
                </div>
                <div className="right">
                    <h2>{item.title}</h2>
                    <p className='description'>{item.description}</p>
                    <p className='cost'>Rs. {item.cost}</p>

                    <button onClick={() => setWalk(!walk)}>Walk</button>
                    <button onClick={() => navigate(`/arview`)}>View AR</button>
                    <button>Buy</button>
                </div>
            </div>
        </section>
    );
}
