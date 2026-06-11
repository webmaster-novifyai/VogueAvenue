export default function AdminDashboard() {
  const handleUpload = async (e) => {
    // Logic to send POST request to /api/products/add with Authorization header
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      {/* Inputs for Name, Price, Texture, Image Uploads */}
      <button onClick={handleUpload}>Upload Product</button>
    </div>
  );
}