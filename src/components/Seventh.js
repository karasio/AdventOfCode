function Seventh({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(7)}
    >
      {clicked === 7 ?
        <div>Under construction</div>
        : <div className="bigNum">7</div>}
    </div>
  );
}

export default Seventh;