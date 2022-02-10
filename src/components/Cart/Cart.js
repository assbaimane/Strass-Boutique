import './Cart.sass';
import {useEffect} from 'react';


function Cart(props){
    //const
    return(
        <div>
        {/* ------- EMPTY BAG ------- */}
        {props.shopBag  == "" &&
            <div className="container mx-auto my-auto">
                <h1>Ton panier est vide</h1>
                <p>Tu n'as encore aucun article dans ton panier</p>
            </div>
        }
        {/* ------ COMPLETED BAG ------ */}
        {props.shopBag != "" &&
            <div className="container mx-auto my-auto">
                <h1>Ton panier est rempli</h1> 
                <p>Mais pour 20 minutes maximum alors fais vite !</p>
            </div>
        }
    </div>
    );
}

export default Cart;