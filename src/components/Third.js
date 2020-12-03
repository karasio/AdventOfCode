function Third({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(3)}
    >
      {clicked === 3 ?
        <div>Under construction</div>
        : <div className="bigNum">3</div>}
    </div>
  );
}

export default Third;