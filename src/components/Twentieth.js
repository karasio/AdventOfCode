function Twentieth({clicked, handleClick}) {
  
  return (
    <div
      className="day"
      onClick={() => handleClick(20)}
    >
      {clicked === 20 ?
        <div>Under construction</div>
        : <div className="bigNum">20</div>}
    </div>
  );
}

export default Twentieth;