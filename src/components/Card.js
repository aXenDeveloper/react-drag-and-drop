const Card = ({ children, id }) => {
  const dragStart = e => {
    e.dataTransfer.setData('card_id', e.target.id);
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  return (
    <div className="card" id={id} draggable onDragStart={dragStart} onDragOver={dragOver}>
      {children}
    </div>
  );
};

export default Card;
