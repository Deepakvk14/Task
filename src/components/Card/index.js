import React from 'react'
import { useEffect } from 'react'
import { ProductsApi } from '../redux/home/homeAction'
import { useSelector,useDispatch } from 'react-redux'
import "./Card.css"
import { setApiData } from '../redux/home/homeSlice'
import { setCardDetails } from '../redux/persist/wallet/walletSlice'
import CardSkeleton from '../../card-skeleton/CardSkeleton'
function Card() {
    const dispatch = useDispatch()
    const cardDetals = useSelector((state) => state.homeReducer.data);
    useEffect(()=>{
        const Data = async()=>{
            const data =  await ProductsApi()

            dispatch(setApiData(data.data))
        }
       
        Data()
    },[dispatch])

    const handleCardDetails = (elem)=>{
        console.log(elem)
        dispatch(setCardDetails(elem))
    }
  return (
    <div className="card_wpr">

        <div className='All_Cards'> 
       

        { cardDetals ?
            cardDetals.map((elem,id)=>{
                return(
                    <div onClick={()=>handleCardDetails(elem)} className='main_card' key= {id}>
                        <img alt="img" src={elem.image}/>
                        <p>{elem.title}</p>
                        <p> Price : {elem.price} $</p>
                    </div>
                )
            }):
            <div className='cardskeleton_wrp'>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((loading) => (
                  <div className='main_card' key={loading}>
                    <CardSkeleton />
                  </div>
                  ))}
              </div>
             
        }

        </div>
    </div>
  )
}

export default Card