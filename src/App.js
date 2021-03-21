import react,{useEffect} from 'react'
import './style/App.css';
import './style/Bolg.css';
import { BiLeftTopArrowCircle } from 'react-icons/bi'
import HOME from './Halpper/Home_Page/Home'



function App() {

  return (
    <>
    <BiLeftTopArrowCircle className="Goto_top" onClick={()=>{
      // console.log("zeel")
      window.scrollTo(1,0)
    }}></BiLeftTopArrowCircle>
    <HOME></HOME>
    </>
  );
}

export default App;
