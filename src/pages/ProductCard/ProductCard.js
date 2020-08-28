import React from 'react';

function ProductCard({ title, price, imageUrl }) {
  const url = imageUrl
    ? imageUrl
    : 'https://www.avparty.com/wp-content/uploads/2015/07/image-placeholder-300x300.jpg';

  const cardTitle = title ? title : 'Title';

  return (
    <div className="card m-3">
      <img
        style={{ maxWidth: '16rem', maxHeight: '16rem' }}
        className="card-img-top"
        src={url}
        alt={title}
      ></img>
      <div className="card-body text-left">
        <h5 className="card-title">{cardTitle}</h5>
        <h6 className="card-subtitle mb-2 text-muted justify-content-start">
          {price && price !== isNaN() ? `$${price}` : '$'}
        </h6>
      </div>
    </div>
  );
}

export default ProductCard;
