import {useEffect, useState} from "react";

function Third({clicked, handleClick}) {
  const [resourceArray, setResourceArray] = useState([]);
  const [answer1, setAnswer1] = useState(null);
  const [answer2, setAnswer2] = useState(null);
  
  useEffect(() => {
    const handleFile = () => {
      const filename = 'resources/03.txt';
      const reader = new XMLHttpRequest();
      
      const loadFile = () => {
        reader.open('get', filename, true);
        reader.onreadystatechange = displayContents;
        reader.send(null);
      };
      
      const displayContents = () => {
        if (reader.readyState === 4) {
          const rawText = reader.responseText;
          const rows = rawText.split('\n');
          setResourceArray(rows);
        }
      };
      loadFile();
    };
    handleFile();
  }, []);
  
  const calculate = () => {
    const n1 = countTrees(1,1,1);    // Right 1, down 1.
    const n2 = countTrees(3,1,1);    // Right 3, down 1.  = calculateFirst();
    const n3 = countTrees(5,1,1);    // Right 5, down 1.
    const n4 = countTrees(7,1,1);    // Right 7, down 1.
    const n5 = countTrees(1,2, 2);    // Right 1, down 2.
    const mul = n1*n2*n3*n4*n5;
    setAnswer1(n2);
    setAnswer2(mul);
  };
  
  
  const countTrees = (right, down, startAt) => {
    const tree = '#';
    let amountOfTrees = 0;
    let charAtIndex = right;
    for (let i = startAt; i < resourceArray.length; i = i+down) {
      const row = resourceArray[i];
      const modularIndex = charAtIndex % row.length;
      const isItTree =  row.charAt(modularIndex) === tree;
      if (isItTree) {
        amountOfTrees++;
      }
      charAtIndex += right;
    }
    return amountOfTrees;
  };

  
  // style={{backgroundColor: 'rgba(50,50,50, 0.9)', }}
  return (
    <div
      className="day"
      onClick={() => {
        calculate();
        handleClick(3);
      }}
    >
      {clicked === 3 ?
        <div>
          <h2>Phase 1</h2>
          <p>{answer1} trees encountered</p>
          <h2>Phase 2</h2>
          <p>{answer2} trees encountered</p>
        </div>
        : <div className="bigNum">3</div>}
    </div>
  );
}

export default Third;