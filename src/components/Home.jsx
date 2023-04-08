import React from 'react';
import ItemCard from './ItemCard';
import data from '../data/data';
const Home = () => {
    return ( <>
    <h1 className='text-center mt-3'>All Items</h1>
    <section className="py-4 container">
        <div className="row justify-content-center">
            {data.ProductData.map((item,index)=>{
                return(
                    <ItemCard img={item.img} dect={item.desc} title={item.title}  price={item.price} key={index} item={item}/>
                )

            })}
            

        </div>
    </section>




    </>
);
}
 
export default Home;