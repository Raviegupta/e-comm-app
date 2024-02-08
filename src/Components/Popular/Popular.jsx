import './Popular.css'
// import data_product from '../Assets/popular_data'
import Item from '../Items/Item'
import { useEffect, useState } from 'react'

const Popular = () => {

  const [ data_product, setData_product ] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen')
    .then(response=>response.json())
    .then(data=>setData_product(data))
  }, []);

  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular-item">
            {
                data_product.map((item, index)=>{
                    return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })
            }
        </div>
    </div>
  )
}

export default Popular