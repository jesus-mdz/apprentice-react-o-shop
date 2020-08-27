import React from 'react';
import { Link } from 'react-router-dom';

function AdminProducts() {
  return (
    <Link to="/admin-products/new">
      <button className="btn btn-primary">New Product </button>
    </Link>
  );
}

export default AdminProducts;
