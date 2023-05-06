import React from 'react'
import FeatureItem from './FeatureItem'
import FeatureData from './FeatureData.jsx'

const FeatureList = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <h1>Feature</h1>
        <span>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</span>
        <div className='feature-list-item'>
          {FeatureData && FeatureData.map((item) =>
            <FeatureItem key={item.id} title={item.title} img_main={item.img_main} img_background={item.img_background} passage={item.passage} />
          )}
        </div>
      </div>
    </div>
  )
}

export default FeatureList