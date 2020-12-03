function Tenth({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(10)}
    >
      {clicked === 10 ?
        <div>Under construction</div>
        : <div className="bigNum">10</div>}
    </div>
  );
}

export default Tenth;