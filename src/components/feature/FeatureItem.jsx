import React from 'react'
import '../scss/Feature.scss'

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