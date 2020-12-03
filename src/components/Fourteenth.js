function Fourteenth({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(14)}
    >
      {clicked === 14 ?
        <div>Under construction</div>
        : <div className="bigNum">14</div>}
    </div>
  );
}

export default Fourteenth;