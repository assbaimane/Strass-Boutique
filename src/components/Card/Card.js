import './Card.sass';
import {useEffect} from 'react';

function Card(props){
    //const

    return(
        <div className="col-3 mx-auto my-auto">
            {/* ------ STOCK SUFFISANT ------- */}
            {props.stock>3 &&
                <>
                <div className='pic'>
                    <img src={props.tenue} className="img-fluid" alt="" />
                    <span>{props.stock}</span>
                </div>
                <div className='mt-2'>
                    <h6>{props.nom}</h6>
                    <p>Prix : {props.prix}€</p>
                    <button className='col-12' onClick={props.acheter}><i className="fa-solid fa-bag-shopping"></i></button>
                </div></>
            }

            {/* ------ STOCK FAIBLE ------- */}
            {props.stock<=3 && props.stock > 0 &&
                <>
                <div className='pic'>
                    <img src={props.tenue} className="img-fluid" alt="" />
                    <span className='fluo'>{props.stock}</span>
                </div>
                <div className='mt-2'>
                    <h6>{props.nom}</h6>
                    <p>Prix : {props.prix}€</p>
                    <button className='fluo col-12' onClick={props.acheter}><i className="fa-solid fa-bag-shopping"> LOW IN STOCK</i></button>
                </div></>
            }

            {/* ------ STOCK INSUFFISANT ------- */}
            {props.stock == 0 &&
                <>
                <div className='pic'>
                    <img src={props.tenue} className="grized img-fluid" alt="" />
                    <span>{props.stock}</span>
                </div>
                <div className='mt-2'>
                    <h6>{props.nom}</h6>
                    <p>Prix : {props.prix}€</p>
                    <p>Rupture de stock</p>
                </div></>
            }
        </div>
    );
}

export default Card;