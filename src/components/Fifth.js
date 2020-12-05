import {useEffect, useState} from "react";

function Fifth({clicked, handleClick}) {
  const [binSeats, setBinSeats] = useState([]);
  const [answer1, setAnswer1] = useState(null);
  const [answer2, setAnswer2] = useState(null);
  
  useEffect(() => {
    const handleFile = () => {
      let filename = 'resources/05.txt';
    
      const reader = new XMLHttpRequest();
    
      const loadFile = () => {
        reader.open('get', filename, true);
        reader.onreadystatechange = displayContents;
        reader.send(null);
      };
    
      const displayContents = () => {
        if(reader.readyState === 4) {
          const rawText = reader.responseText;
          const rows = rawText.split('\n');
          setBinSeats(rows);
        }
      };
    
      loadFile();
    };
  
    handleFile()
  }, []);
  
  const calculateSeatChart = () => {
    const seats = [];
    binSeats.forEach((seat) => {
      seats.push(parseInt(seat
        .replaceAll('F', 0)
        .replaceAll('L', 0)
        .replaceAll('B', 1)
        .replaceAll('R', 1),2));
    });
    setAnswer1(Math.max(...seats));
    setAnswer2(calculateMyPlace(seats));
  };
  
  const calculateMyPlace = (seats) => {
    const highest = Math.max(...seats);
    const lowest = highest - seats.length;
    const total = seats.reduce((addThis, current) => addThis + current);
    const expectedTotal = (lowest + highest) * (highest - lowest + 1) / 2;
    return expectedTotal - total
  };
  
  
  return (
    <div
      className="day"
      onClick={() => {
        calculateSeatChart();
        handleClick(5);
      }}
    >
      {clicked === 5 ?
        <div>
          <h2>Phase 1</h2>
          <p> {answer1} is the highest seat id on boarding pass</p>
          <h2>Phase 2</h2>
          <p> My seat ID {answer2} </p>
        </div>
        : <div className="bigNum">5</div>}
    </div>
  );
}
export default Fifth;