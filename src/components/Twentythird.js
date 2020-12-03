function Twentythird({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(23)}
    >
      {clicked === 23 ?
        <div>Under construction</div>
        : <div className="bigNum">23</div>}
    </div>
  );
}

export default Twentythird;