function Twentyfourth({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(24)}
    >
      {clicked === 24 ?
        <div>Under construction</div>
        : <div className="bigNum">24</div>}
    </div>
  );
}

export default Twentyfourth;