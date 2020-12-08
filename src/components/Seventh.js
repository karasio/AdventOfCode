import {useEffect, useState} from "react";

function Seventh({clicked, handleClick}) {
  const [input, setInput] = useState([]);
  const [answer1, setAnswer1] = useState(null);
  const [answer2, setAnswer2] = useState(undefined);
  // const [alphaMap, setAlphaMap] = useState(new Map());
  
  useEffect(() => {
    const handleFile = () => {
      let filename = 'resources/07.txt';
      
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
          let allRules = [];
          rows.forEach((row) => {
            row = row.replaceAll('bags', 'bag');
            row = row.replaceAll(/([.,])+/g, '');
            row = row.replaceAll('contain', '');
            const colors = row.split('bag');
            // console.log(colors);
            let colorObject = {};
            let colorRuleArray = [];
            for (let i = 0; i < colors.length; i++) {
              let color = colors[i].trim();
              // console.log(color);
              if (i === 0) {
                colorObject = {
                  color: color,
                }
              } else if (color.length !== 0) {
                if (!isNaN(parseInt(color.substring(0,1)))) {
                  colorRuleArray.push({
                    amount: color.substring(0, 1),
                    color: color.substring(2, color.length),
                  });
                }
                colorObject.children = colorRuleArray;
              }
            }
            allRules.push(colorObject);
          });
          setInput(allRules);
        }
      };
      
      loadFile();
    };
    
    handleFile()
  }, []);
  
  const onlyUnique = (value, index, self)  =>{
    return self.indexOf(value) === index;
  };
  
  const howManyColorsContainShinyGold = (searchFor, tempArr) => {
    searchFor.forEach((object) => {
      const searchWord = object.color;
      input.forEach((row) => {
        if (row.color !== searchWord) {
          row.children.forEach((childColor) => {
            if (childColor.color === searchWord) {
              tempArr.push(row);
              howManyColorsContainShinyGold([row], tempArr);
            }
          })
        }
      })
      
    });
    return tempArr;
  };
  
  const howManyBagsInShinyGold = (input, searchFor, calculation) => {
    searchFor.forEach((object) => {
      const searchWord = object.color;
      input.forEach((row) => {          // iterate through rules: row = one rule
        if (row.color === searchWord) {       // rule matching to search word
          if (row.children !== undefined) {
            row.children.forEach((child) => {       // these need to be counted
              calculation = calculation * parseInt(child.amount);
              // console.log(calculation);
              howManyBagsInShinyGold(input, row.children, calculation)      // recursive call to go deeper
            });
          }
        }
      })
    });
    return calculation;
  };
  
  const searchForGold = (firstSearch) => {
  
    const handleFile = () => {
      let filename = 'resources/07small.txt';
  
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
          let allRules = [];
          rows.forEach((row) => {
            row = row.replaceAll('bags', 'bag');
            row = row.replaceAll(/([.,])+/g, '');
            row = row.replaceAll('contain', '');
            const colors = row.split('bag');
            // console.log(colors);
            let colorObject = {};
            let colorRuleArray = [];
            for (let i = 0; i < colors.length; i++) {
              let color = colors[i].trim();
              // console.log(color);
              if (i === 0) {
                colorObject = {
                  color: color,
                }
              } else if (color.length !== 0) {
                if (!isNaN(parseInt(color.substring(0, 1)))) {
                  colorRuleArray.push({
                    amount: color.substring(0, 1),
                    color: color.substring(2, color.length),
                  });
                }
                colorObject.children = colorRuleArray;
              }
            }
            allRules.push(colorObject);
          });
          howManyBagsInShinyGold(allRules, firstSearch, 1);
        }
        
      };
  
      loadFile();
    };
    handleFile();
    const arr1 = howManyColorsContainShinyGold(firstSearch, []);
    let uniqueColors = arr1.filter(onlyUnique);
    setAnswer1(uniqueColors.length);
    
    // const arr2 = howManyBagsInShinyGold(tempBags, firstSearch, 1);
    // console.log('answer is',arr2);
  };
  
  return (
    <div
      className="day"
      onClick={() => {
        searchForGold([{color: 'shiny gold'}]);
        handleClick(7);
      }}
    >
      {clicked === 7 ?
        <div>
          <h2>Phase 1</h2>
          <p>How many bag colors can eventually contain at least one shiny gold bag?</p>
          <p>{answer1}</p>
          <h2>Phase 2</h2>
          <p>How many individual bags are required inside your single shiny gold bag?</p>
          <p>{answer2}</p>
        </div>
        : <div className="bigNum">7</div>}
    </div>
  );
}

export default Seventh;