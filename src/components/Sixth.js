function Sixth({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(6)}
    >
      {clicked === 6 ?
        <div>Under construction</div>
        : <div className="bigNum">6</div>}
    </div>
  );
}
export default Sixth;