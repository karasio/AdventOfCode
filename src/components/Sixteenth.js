function Sixteenth({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(16)}
    >
      {clicked === 16 ?
        <div>Under construction</div>
        : <div className="bigNum">16</div>}
    </div>
  );
}

export default Sixteenth;