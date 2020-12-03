function Fifteenth({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(15)}
    >
      {clicked === 15 ?
        <div>Under construction</div>
        : <div className="bigNum">15</div>}
    </div>
  );
}

export default Fifteenth;