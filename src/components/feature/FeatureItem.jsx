import React from 'react'

const FeatureItem = ({ description, imageUrl }) => {
  return (
    <div class="feature-item">
      <img src={imageUrl} alt=''></img>
      <p className='h-[300px]'>{description}</p>
    </div>
  )
}

export default FeatureItem