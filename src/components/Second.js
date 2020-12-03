import {useEffect, useState} from "react";

function Second({ clicked, handleClick }) {
  const [resourceArray, setResourceArray] = useState([]);
  const [answer1, setAnswer1] = useState(null);
  const [answer2, setAnswer2] = useState(null);
  
  
  useEffect(() => {
    const handleFile = () => {
      let filename = 'resources/02.txt';
    
      const reader = new XMLHttpRequest();
    
      const loadFile = async () => {
        reader.open('get', filename, true);
        reader.onreadystatechange = displayContents;
        reader.send(null);
      };
    
      const displayContents = () => {
        if(reader.readyState === 4) {
          const rawText = reader.responseText;
          const rows = rawText.split('\n');
          const endArray = [];
          rows.forEach((s) => {
            const row = s.split(' ');
            const fromAndTo = row[0].split('-');
            const char = row[1].replace(':', '');
            endArray.push({
              from: fromAndTo[0],
              to: fromAndTo[1],
              char: char,
              password: row[2],
            })
          });
          setResourceArray(endArray);
        }
      };
    
      loadFile()
        .then(() => displayContents());
    };
    
    handleFile()
  }, []);
  
  const calculateFirstTask = () => {
    let okPasswords = 0;
    resourceArray.forEach((entity) => {
      const amountOfChars = entity.password.split(entity.char).length-1;
      if (amountOfChars >= entity.from && amountOfChars <= entity.to) {
        okPasswords++;
      }
      setAnswer1(okPasswords);
    })
  };
  
  const calculateSecondTask = () => {
    let okPasswords = 0;
    resourceArray.forEach((entity) => {
      const firstToCheck = entity.from - 1;
      const secondToCheck = entity.to - 1;
      const first = entity.password.charAt(firstToCheck) === entity.char;
      const second = entity.password.charAt(secondToCheck) === entity.char;
      if ((first && !second) || (!first && second)) {
        okPasswords++;
      }
    });
    setAnswer2(okPasswords);
  };
  
  return (
    <div
      className="day"
      onClick={() => {
            calculateFirstTask();
            calculateSecondTask();
            handleClick(2);
      }}
    >
      {clicked === 2 ?
        <div>
          <h2>Phase 1</h2>
          <p>{answer1} ok passwords</p>
          <h2>Phase 2</h2>
          <p>{answer2} ok passwords</p>
        </div>
        : <div className="bigNum">2</div>}
    </div>
  );
}

export default Second;