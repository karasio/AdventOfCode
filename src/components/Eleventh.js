function Eleventh({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(11)}
    >
      {clicked === 11 ?
        <div>Under construction</div>
        : <div className="bigNum">11</div>}
    </div>
  );
}

export default Eleventh;