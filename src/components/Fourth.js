function Fourth({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(4)}
    >
      {clicked === 4 ?
        <div>Under construction</div>
        : <div className="bigNum">4</div>}
    </div>
  );
}

export default Fourth;