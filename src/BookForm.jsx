import { useState } from "react";
import "./AddBookForm.css";

function AddBookForm() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    published_year: "",
    isbn: "",
    cover_image: "",
    is_available: true,
  });

  // Handle input change
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  // Handle form submit
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/addBook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save book");
      }

      const result = await response.json();
      alert("Book added successfully!");
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
      alert("Error while adding book!");
    }
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>

      <div className="form-group">
        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Author</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
      </div>

      <div className="form-group">
        <label>Published Year</label>
        <input type="number" name="published_year" value={formData.published_year} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>ISBN</label>
        <input type="text" name="isbn" value={formData.isbn} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Cover Image URL</label>
        <input type="text" name="cover_image" value={formData.cover_image} onChange={handleChange} />
      </div>

      <div className="form-group checkbox">
        <label>
          <input type="checkbox" name="is_available" checked={formData.is_available} onChange={handleChange} />
          Available
        </label>
      </div>

      <button type="submit" className="submit-btn">Add Book</button>
    </form>
  );
}

export default AddBookForm;
