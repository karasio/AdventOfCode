function Twentyfirst({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(21)}
    >
      {clicked === 21 ?
        <div>Under construction</div>
        : <div className="bigNum">21</div>}
    </div>
  );
}

export default Twentyfirst;