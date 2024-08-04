import Item from "../../components/Item/Item";
import Navbar from "../../components/navbar";
import clothList from "../../data";
import './products.css'

export default function Products() {
    return <section id="page">
        {/* add navigation section here */}
        <Navbar/>
        <ul id="item-list">
            {
                clothList.map(item => {
                    return <Item {...item}/>
                })
            }
        </ul>
    </section>
}