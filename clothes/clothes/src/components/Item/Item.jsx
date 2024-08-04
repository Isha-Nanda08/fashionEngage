import './item.css'

export default function Item({title, description, cost, img, id}) {
    return <a href={`/item${id}`}>
    <div className='item-container'>
        <img src={img} alt="" />
        <div className="info">
            <h2>{title}</h2>
            <p className='description'>{description}</p>
            <p className='cost'>Rs. {cost}</p>
        </div>
    </div>
    </a>
}