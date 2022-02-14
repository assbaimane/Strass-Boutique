import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart'
import Tenue1 from './images/tenue-1.png'
import Tenue2 from './images/tenue-2.png'
import Tenue3 from './images/tenue-3.png'

function App() {
  // --------------------------- DATA ------------------------
  const [currentPage, setCurrentPage] = useState("shop")
  const tenues = [Tenue1,Tenue2,Tenue3]
  const [shopBag, setShopBag] = useState([])  
  const [articles, setArticles] = useState([
    {
      nom: "Tailleur blue baby",
      stock: 3,
      prix: 40
    },
    {
      nom: "White set linnen",
      stock: 4,
      prix: 30
    },
    {
      nom: "Tennis dress candy",
      stock: 5,
      prix: 20
    }
  ]);

  // --------------------------- FUNCTIONS ------------------------
  let inBag = (i) => {
    alert(articles[i].nom + " " + articles[i].prix + " " + 0);
    setShopBag(shopBag => [...shopBag, {id: i, nom: articles[i].nom, nbPiece: 0, prix: articles[i].prix}]);
  }

  let acheter = (i) => {
    let copyArticle = [...articles]
    if (copyArticle[i].stock>3){
      copyArticle[i].stock--
      setArticles(copyArticle)
      inBag(i)
    }
    else if(copyArticle[i].stock>0){
      copyArticle[i].stock--
      setArticles(copyArticle)
      inBag(i)
    }
    else if(copyArticle[i].stock <= 0){
      console.log("Attention, il ne reste plus d'articles");
    }
  }

  let fromBagToStock = (i) =>{
    console.log("on va restooock")
    let updateStock = [...articles];
    updateStock[i.id].stock++;
    setArticles(updateStock);
  }


  // --------------------------- DISPLAY ------------------------
  return (
    <div className="App">
      <Header
        setCurrentPage={setCurrentPage}
      />
      {/* ---------- ESHOP PAGE ---------- */}
      {(currentPage === "shop") &&
          <div className='mt-5 row'>
            {articles.map((e, i) => {
              return (
                  <Card
                      key={i}
                      tenue= {tenues[i]}
                      nom={e.nom}
                      prix={e.prix}
                      stock={e.stock}
                      setArticles={setArticles}
                      acheter={() => acheter(i)}
                  />
              )}
            )}
          </div>
      }
      {/* ---------- CART PAGE ---------- */}
      {(currentPage === "cart") &&
          <div className='mt-5 row'>
              <Cart
                shopBag={shopBag}
                setShopBag={setShopBag}
                fromBagToStock={fromBagToStock}
              />
          </div>
      }
    </div>
  );
}

export default App;