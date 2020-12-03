function Eighth({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(8)}
    >
      {clicked === 8 ?
        <div>Under construction</div>
        : <div className="bigNum">8</div>}
    </div>
  );
}

export default Eighth;