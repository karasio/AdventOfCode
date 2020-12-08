import './App.css';

import React, {useState} from "react";

import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";
import Seventh from "./components/Seventh";
import Eighth from "./components/Eighth";
import Nineth from "./components/Nineth";
import Tenth from "./components/Tenth";
import Eleventh from "./components/Eleventh";
import Twelfth from "./components/Twelfth";
import Thirteenth from "./components/Thirteenth";
import Fourteenth from "./components/Fourteenth";
import Fifteenth from "./components/Fifteenth";
import Sixteenth from "./components/Sixteenth";
import Seventeenth from "./components/Seventeenth";
import Eighteenth from "./components/Eighteenth";
import Nineteenth from "./components/Nineteenth";
import Twentieth from "./components/Twentieth";
import Twentyfirst from "./components/Twentyfirst";
import Twentysecond from "./components/Twentysecond";
import Twentythird from "./components/Twentythird";
import Twentyfourth from "./components/Twentyfourth";

function App() {
  const [clicked, setClicked] = useState(null);
  
  const handleClick = (num) =>{
    // console.log("handleClick with value: ", num);
    // handleFile(num);
    clicked !== num ? setClicked(num) : setClicked(null);
  };
  
  return (
    <div className="App">
      <div id="calendar">
            <First clicked={clicked} handleClick={handleClick}/>
            <Second clicked={clicked} handleClick={handleClick}/>
            <Third clicked={clicked} handleClick={handleClick}/>
            <Fourth clicked={clicked} handleClick={handleClick}/>
            <Fifth clicked={clicked} handleClick={handleClick}/>
            <Sixth clicked={clicked} handleClick={handleClick}/>
            <Seventh clicked={clicked} handleClick={handleClick}/>
            <Eighth clicked={clicked} handleClick={handleClick} />
            <Nineth clicked={clicked} handleClick={handleClick} />
            <Tenth clicked={clicked} handleClick={handleClick} />
            <Eleventh clicked={clicked} handleClick={handleClick} />
            <Twelfth clicked={clicked} handleClick={handleClick} />
            <Thirteenth clicked={clicked} handleClick={handleClick} />
            <Fourteenth clicked={clicked} handleClick={handleClick} />
            <Fifteenth clicked={clicked} handleClick={handleClick} />
            <Sixteenth clicked={clicked} handleClick={handleClick} />
            <Seventeenth clicked={clicked} handleClick={handleClick} />
            <Eighteenth clicked={clicked} handleClick={handleClick} />
            <Nineteenth clicked={clicked} handleClick={handleClick} />
            <Twentieth clicked={clicked} handleClick={handleClick} />
            <Twentyfirst clicked={clicked} handleClick={handleClick} />
            <Twentysecond clicked={clicked} handleClick={handleClick} />
            <Twentythird clicked={clicked} handleClick={handleClick} />
            <Twentyfourth clicked={clicked} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
