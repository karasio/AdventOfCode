function Eighteenth({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(18)}
    >
      {clicked === 18 ?
        <div>Under construction</div>
        : <div className="bigNum">18</div>}
    </div>
  );
}

export default Eighteenth;