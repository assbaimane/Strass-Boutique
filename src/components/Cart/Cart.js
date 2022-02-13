import './Cart.sass';
import {useEffect} from 'react';


function Cart(props){
    
    // --------------------------- FUNCTIONS ------------------------
    let deleteItem = (e,i) =>{
        alert("tu essaye de supprimer quelque chose")
        let copyBag = [...props.shopBag];
        copyBag.splice(i, i+1);
        console.log(copyBag);
        props.setShopBag(copyBag)
        {props.fromBagToStock(e,i)}
    }


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
            
                {/* ------ MAP ALL ITEMS IN BAG ------ */}
                {props.shopBag.map((e, i) => {
                    return (
                        <div className="d-flex justify-content-between" className={i,e}>        
                            <p>{e.prix}€ | {e.nom}</p>
                            <button onClick={() => deleteItem(e,i)}><i className="fa-solid fa-trash"></i></button>
                        </div>  
                    )}
                )}
            </div>
        }
        </div>
    );
}

export default Cart;