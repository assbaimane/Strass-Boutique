import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Tenue1 from './images/tenue-1.png'
import Tenue2 from './images/tenue-2.png'
import Tenue3 from './images/tenue-3.png'



function App() {
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


  return (
    <div className="App">
      <Header/>
      <Card
        // tenue = {Tenue1}
        // nom = {}
        // stock = {}
        // prix = {}
      />
      <Card
        // tenue = {Tenue2}
      />
      <Card
        // tenue = {Tenue3}
      />
    </div>
  );
}

export default App;
