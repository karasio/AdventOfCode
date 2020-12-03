function Nineteenth({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(19)}
    >
      {clicked === 19 ?
        <div>Under construction</div>
        : <div className="bigNum">19</div>}
    </div>
  );
}

export default Nineteenth;