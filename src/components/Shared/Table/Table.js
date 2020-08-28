import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import productActions from '../../../store/product/action';

function Table({ data, columns, isEditable, editUrl }) {
  const dispatch = useDispatch();

  const columnsTest = [
    {
      header: 'ID',
      name: 'id',
    },
    {
      header: 'Name',
      name: 'title',
    },
    {
      header: 'Price',
      name: 'price',
    },
  ];

  useEffect(() => {
    dispatch(productActions.getProducts());
  }, []);

  const dataSet = useSelector(({ product }) => {
    if (product.products) {
      return product.products;
    }
  });

  return (
    <>
      {dataSet ? (
        <table className="table">
          <thead>
            <tr>
              {columnsTest.map((object, index) => (
                <th key={index}>{object.header}</th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataSet.map((object, index) => (
              <tr key={index}>
                <th>{object.id}</th>
                <td>{object.title}</td>
                <td>{object.price}.00</td>
                <td>
                  <Link to={`/admin-products/${object.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="table">
          <tbody>
            <tr>
              <th>Loading...</th>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}

export default Table;
