function Nineth({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(12)}
    >
      {clicked === 12 ?
        <div>Under construction</div>
        : <div className="bigNum">12</div>}
    </div>
  );
}

export default Nineth;