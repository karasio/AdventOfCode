function Nineth({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(9)}
    >
      {clicked === 9 ?
        <div>Under construction</div>
        : <div className="bigNum">9</div>}
    </div>
  );
}

export default Nineth;