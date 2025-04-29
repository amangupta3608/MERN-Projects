import { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAddNote(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Write your note here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
