const Block = ({ id, children }) => {
  const drop = e => {
    console.log('Drop');
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');

    const card = document.getElementById(card_id);
    card.style.display = 'block';

    document.getElementById(id).appendChild(card);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <div id={id} onDrop={drop} onDragOver={dragOver}>
      {children}
    </div>
  );
};

export default Block;
