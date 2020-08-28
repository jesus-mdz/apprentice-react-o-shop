import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/Shared/Table/Table';

function AdminProducts() {
  return (
    <div className="p-5 row col-8 offset-2">
      <Table />
      <Link to="/admin-products/new">
        <button className="btn btn-primary">New Product</button>
      </Link>
    </div>
  );
}

export default AdminProducts;
