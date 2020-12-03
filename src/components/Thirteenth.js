function Thirteenth({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(13)}
    >
      {clicked === 13 ?
        <div>Under construction</div>
        : <div className="bigNum">13</div>}
    </div>
  );
}

export default Thirteenth;