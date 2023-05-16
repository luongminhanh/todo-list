import React from 'react'

const FeatureItem = (props) => {
  const { description, imageUrl } = props;
  return (
    <div class="feature-item">
      <img src={imageUrl} alt=''></img>
      <p className='h-[300px]'>{description}</p>
    </div>
  )
}

export default FeatureItem