import Description from './components/Description'
import Ingredients from './components/Ingredients'
import Preparation from './components/Preparation'
import chaufaLogo from './assets/arroz_chaufa.jpg'
//import './App.css' 

function App() {

  return (
    <>
      {/* 
          Inside the JSX tags this is the way to make comments
          (with curly braces).
          Outside the JSX tags the way to make comments is like the
          regular way of a Javascript file.
      */}
      <h1>Arroz Chaufa</h1>
      <img src={chaufaLogo} alt="Arroz Chaufa Peruano" />
      <Description />
      <Ingredients />
      <Preparation />
    </>
  )
}

export default App
