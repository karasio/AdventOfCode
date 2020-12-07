import {useEffect, useState} from "react";

function Sixth({clicked, handleClick}) {
  const [input, setInput] = useState([]);
  const [answer1, setAnswer1] = useState(null);
  const [answer2, setAnswer2] = useState(null);
  // const [alphaMap, setAlphaMap] = useState(new Map());
  
  useEffect(() => {
    const handleFile = () => {
      let filename = 'resources/06.txt';
      
      const reader = new XMLHttpRequest();
      
      const loadFile = () => {
        reader.open('get', filename, true);
        reader.onreadystatechange = displayContents;
        reader.send(null);
      };
      
      const displayContents = () => {
        if(reader.readyState === 4) {
          const rawText = reader.responseText;
          const groups = rawText.split('\n\n');
          let answersByGroup = [];
          groups.forEach((g) => {
            const answers = g.split('\n');
            answersByGroup.push(answers);
          });
          setInput(answersByGroup);
        }
      };
      
      loadFile();
    };
    
    handleFile()
  }, []);
  
  const calculateHowManyDifferentAnswersInGroup = () => {
    let yesAnswers = 0;
    input.forEach((group) => {
      let tempMap = new Map();
      const chars='abcdefghijklmnopqrstuvwxyz'.split('');
      chars.forEach((char) => {
        tempMap[char] = 0;
      });
      group.forEach((answer) => {
        chars.forEach((char) => {
          if (answer.indexOf(char) > -1) {
            tempMap[char]++;
          }
        })
      });
      Object.entries(tempMap).forEach(([key, value]) => {
        if (value === group.length) {
          yesAnswers++;
        }
      });
      
      setAnswer2(yesAnswers);
    })
  };
  
  const calculateHowManyYes = () => {
    let yesAnswers = 0;
    input.forEach((group) => {
      let tempMap = new Map();
      const chars='abcdefghijklmnopqrstuvwxyz'.split('');
      chars.forEach((char) => {
        tempMap[char] = 0;
      });
      group.forEach((answer) => {
        chars.forEach((char) => {
          if (answer.indexOf(char) > -1) {
            tempMap[char] = 1;
          }
        })
      });
      Object.entries(tempMap).forEach(([key, value]) => {
        if (value === 1) {
          yesAnswers++;
        }
      });
      setAnswer1(yesAnswers);
    })
  };
  
  return (
    <div
      className="day"
      onClick={() => {
        calculateHowManyYes();
        calculateHowManyDifferentAnswersInGroup();
        handleClick(6);
      }}
    >
      {clicked === 6 ?
        <div>
          <h2>Phase 1</h2>
          <p>{answer1} YES-answers to questions</p>
          <h2>Phase 2</h2>
          <p>{answer2} unique YES-answers to questions</p>
        </div>
        : <div className="bigNum">6</div>}
    </div>
  );
}
export default Sixth;