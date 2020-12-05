import {useEffect, useState} from "react";

function Fourth({clicked, handleClick}) {
  const [arr, setArr] = useState([]);
  const [answer1, setAnswer1] = useState(null);
  const [answer2, setAnswer2] = useState(null);
  
  
  useEffect(() => {
    const handleFile = () => {
      let filename = 'resources/04.txt';
      
      const reader = new XMLHttpRequest();
      
      const loadFile = () => {
        reader.open('get', filename, true);
        reader.onreadystatechange = displayContents;
        reader.send(null);
      };
      
      const displayContents = () => {
        if(reader.readyState === 4) {
          const arrayOfPassports = [];
          const rawText = reader.responseText;
          const rows = rawText.split('\n\n');
          rows.forEach((row) => {
            row = row.replace(/(\r\n|\n|\r)/gm, ' ');
            let passport = {};
            const column = row.split(' ');
            column.forEach((attribute) => {
              const attrAndValue = attribute.split(':');
              passport[attrAndValue[0]] = attrAndValue[1];
            });
            arrayOfPassports.push(passport);
          });
          setArr(arrayOfPassports);
        }
      };
      
      loadFile();
    };
    
    handleFile()
  }, []);
  
  const howManyValidPassports = () => {
    let validPassportsInPhase1 = 0;
    let validPassportsInPhase2 = 0;
    const byr = {min: 1920, max: 2002};
    const iyr = {min: 2010, max: 2020};
    const eyr = {min: 2020, max: 2030};
    const hgt = [
      {unit: 'cm', min: 150, max: 193},
      {unit: 'in', min: 59, max: 76}
      ];
    const hcl = {start: '#', len: 7};
    const ecl = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
    const pid = 9;
    
    arr.forEach((passport) => {
      
      let birthYear =  passport.byr !== undefined;
      let issueYear = passport.iyr !== undefined;
      let expirationYear = passport.eyr !== undefined;
      let height = passport.hgt !== undefined;
      let hairColor = passport.hcl !== undefined;
      let eyeColor = passport.ecl !== undefined;
      let passportId = passport.pid !== undefined;
      // const countryId = passport.cid;   // this doesn't matter
      if (birthYear && issueYear && expirationYear && height &&
      hairColor && eyeColor && passportId) {
        validPassportsInPhase1++;
        
        // check if birth year is on given range
        birthYear = parseInt(passport.byr) >= byr.min && parseInt(passport.byr) <= byr.max;
        // check if issue year is on given range
        issueYear = parseInt(passport.iyr) >= iyr.min && parseInt(passport.iyr) <= iyr.max;
        // check if expiration year is on given range
        expirationYear = parseInt(passport.eyr) >= eyr.min && parseInt(passport.eyr) <= eyr.max;
        // check if height is on given range according to unit.
        const unit = passport.hgt.substring(passport.hgt.length-2, passport.hgt.length);
        height = false;
        hgt.forEach((row) => {
          if (row.unit === unit) {
            const passengerHeight = parseInt(passport.hgt.substring(0,passport.hgt.length-2));
            height = passengerHeight >= row.min && passengerHeight <= row.max;
          }
        });
        // check if hair color is on range
        hairColor = passport.hcl.length === hcl.len  && passport.hcl.substring(0,1) === hcl.start;
        eyeColor = false;
        ecl.forEach((color) => {
          if (color === passport.ecl) {
            eyeColor = true;
          }
        });
  
        passportId =/^\d+$/.test(passport.pid) && passport.pid.length === pid;
        
        
        // check if all above are true
        if (birthYear && issueYear && expirationYear && height &&
          hairColor && eyeColor && passportId) {
          validPassportsInPhase2++;
        }
      }
      
      
    });
    setAnswer1(validPassportsInPhase1);
    setAnswer2(validPassportsInPhase2);
  };
  
  return (
    <div
      className="day"
      onClick={() => {
        //console.log(arr);
        howManyValidPassports();
        handleClick(4);
      }}
    >
      {clicked === 4 ?
        <div>
          <h2>Phase 1</h2>
          <p> {answer1} valid passports of all {arr.length} passports</p>
          <h2>Phase 2</h2>
          <p> {answer2} valid passports of all {arr.length} passports</p>
        </div>
        : <div className="bigNum">4</div>}
    </div>
  );
}

export default Fourth;