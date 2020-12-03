function Fifth({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(5)}
    >
      {clicked === 5 ?
        <div>Under construction</div>
        : <div className="bigNum">5</div>}
    </div>
  );
}
export default Fifth;