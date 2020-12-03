function Twentysecond({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(22)}
    >
      {clicked === 22 ?
        <div>Under construction</div>
        : <div className="bigNum">22</div>}
    </div>
  );
}

export default Twentysecond;