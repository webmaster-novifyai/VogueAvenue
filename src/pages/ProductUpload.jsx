import { useState } from 'react';
import axios from 'axios';

export default function ProductUpload() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'men', // default
    texture: '',
    image: null
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare FormData for binary file transfer
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:3000/api/products/add', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': localStorage.getItem('token') // Use the admin token
        }
      });
      alert('Product uploaded successfully!');
    } catch (err) {
      alert('Upload failed: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h2>Upload New Product</h2>
      <input name="name" placeholder="Product Name" onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} required />
      <select name="category" onChange={handleChange}>
        <option value="men">Men</option>
        <option value="women">Women</option>
      </select>
      <input name="texture" placeholder="Texture (e.g. Cotton)" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      
      {/* File Input */}
      <input type="file" name="image" onChange={handleChange} accept="image/*" required />
      
      <button type="submit">Upload Product</button>
    </form>
  );
}







// Old code 
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const formData = new FormData();
//   formData.append('name', name);
//   formData.append('price', price);
//   formData.append('image', imageFile); // The file selected from <input type="file" />

//   await axios.post('http://localhost:3000/api/products/add', formData, {
//     headers: { 
//       'Content-Type': 'multipart/form-data',
//       'Authorization': localStorage.getItem('token') 
//     }
//   });
// };