import React from 'react';
import PropTypes from 'prop-types';

interface Props {
    name:string
    image_url:any
}

const Product = ({ image_url, name}:Props) => {
  const url = image_url;
  return (
    <article className='product'>
      <img src={url} alt={name || 'default name'} />
      <h4>{name}</h4>
      
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
