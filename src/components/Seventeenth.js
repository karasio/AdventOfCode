function Seventeenth({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(17)}
    >
      {clicked === 17 ?
        <div>Under construction</div>
        : <div className="bigNum">17</div>}
    </div>
  );
}

export default Seventeenth;