const Note = ({ note, onDelete }) => {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{note.text}</span>
        <button onClick={() => onDelete(note.id)}>❌</button>
      </div>
    );
  };
  
  export default Note;
  