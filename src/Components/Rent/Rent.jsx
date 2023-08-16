import React from 'react'
import "./Rent.css"
import {BiChevronDown} from "react-icons/bi"
import {FiHeart} from "react-icons/fi"
import {LuBedSingle} from "react-icons/lu"
import {TbBath} from "react-icons/tb"
import {RxDimensions} from "react-icons/rx"
import {data} from "./Data"





const Rent = () => {
const [location, setLocation] =React.useState("New York, USA")
const [type, setType] = React.useState("Houses")
const [price, setPrice] = React.useState("price")






    const net = data.filter((ele) => ele.location === location )
    
    const good = net.filter((ele) => ele.type === type )
    
    const better = good.sort((a, b) => {
    
        if (price === 'asc') {
          return a.price - b.price;
        } else if(price === 'desc') {
          return b.price - a.price;
        } else if(price === 'price') {
            return 
        }
      });

    





  return (
    <div className='Rent'>
        <div className='search-title'>
            <h1>Search property to rent</h1>
            <div className='s-input'><input placeholder='Search with Search Bar'/> <BiChevronDown className='fa'/></div>
        </div>

        <div className='filters'>

            <div>
                <p>Location</p>
                <select className='select-box'   onChange={(e) => setLocation(e.target.value)} >
                    
                    <option  value="New York, USA" >New York, USA</option>
                    <option value="Florida, USA" >Florida, USA</option>
                    <option value="Texus, USA" >Texus, USA</option>
                    <option value="Georgia, USA" >Georgia, USA</option>
                    
                </select>
            </div>
            <hr/>
            <div>
                 <p>When</p>
                 <select>
                 <option> New York, USA</option>
                 <option>Chicago, USA</option>
                 <option>San Diego, USA</option>
                 <option>Los Angeles, USA</option>
                 <option>Seattle, USA</option>
                 <option>Washington, USA</option>
             </select>
            </div>
            <hr/>
            <div>
                <p>Price</p>
                <select onChange={(e) => setPrice(e.target.value)}>
                <option value="price">price</option>
                <option value="asc">Low - High</option>
                <option value="desc" >Hight - Low</option>
            
            
            </select>
            </div>
            <hr/>
            <div>
                <p>Property Type</p> 
                <select onChange={(e) => setType(e.target.value)}>
                <option value="Houses" >Houses</option>
                <option value="Appartment" >Appartment</option>
                <option value="Condo" >Condo</option>
                <option value="TownHome" >TownHome</option>   
              
            </select>
            </div>
            <hr/>
            <button  className='f-search'>Search</button>
        </div>

        <div className='properties'>
     
       { 

        better.map((ele) => (
                
        <div className='property'>
            <img src={ele.img} alt=""/>
            <FiHeart className='p-heart'/>
            <div className='p-details'>
            
                <p><h2>${ele.price}</h2>/month</p>
                
                <h2 className='p-name'>{ele.name}</h2>
                <p style={{marginBottom:"20px"}}>{ele.address}</p>
                <hr />
                <div className='p-areas'>
                     <p><LuBedSingle className='ar'/>{ele.bed} Beds</p>
                     <p><TbBath className='ar'/>{ele.bath} Bathrooms</p>
                     <p><RxDimensions className='ar'/>{ele.area} m2</p>
                </div>
            </div>
        </div>
         
           
       ))}
        </div>


    </div>
  )
}

export default Rent