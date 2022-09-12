import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setAddCardDetails } from '../redux/persist/wallet/walletSlice';
import "./Checkout.css"
function Checkout(props) {
  const Productcount = useSelector((state) => state.DetailsReducer.Productcount);
const dispatch = useDispatch()

  const handleRemoveCart = ()=>{
    dispatch(setAddCardDetails())
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          CheckOut Page
        </Modal.Title>
      </Modal.Header>
      {Productcount && Productcount.count ?
      <Modal.Body>
      
        <div className='product_Image'>
            <img src={Productcount.image} alt="productImage"/>            
        </div>
        <div className='productCheckoutDetails'>
                <h5>{Productcount.title}</h5>
                <h6>Qnt:{Productcount.count}</h6>
                <span> * Deleviry Date </span>
                <br/>
                <span>{Productcount.date}</span>
                <hr/>
                <div className='product_price'>
                    <div>
                    <h6> Sub-Total</h6>
                    <h6>{Productcount.price}$</h6>

                    </div>
                    <div>
                    <h6>Qnt</h6>
                    <h6>{Productcount.count}</h6>
                    </div>
                    <div>
                    <h6>Eco-Tax (2.00)</h6>
                    <h6>{(Productcount.price*2)/100}$</h6>
                    </div>
                    <div>
                    <h6>VAT (20%)</h6>
                    <h6>{(Productcount.price*20)/100}$</h6>
                    </div>
                    <hr/>
                    <div>
                    <h6>Total</h6>
                    <h6>{(((Productcount.price*2)/100+(Productcount.price*20)/100 + Productcount.price)*Productcount.count).toFixed(2)}$</h6>
                    </div>
                    <div>
                    <button onClick={handleRemoveCart}>Remove</button>

                        <button>View Cart</button>
                        <button>Checkout</button>

                    </div>
                </div>
        </div>
      </Modal.Body>:
      <h3>Nothing In Cart</h3>
    }

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Checkout