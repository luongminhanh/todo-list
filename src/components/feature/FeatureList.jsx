import React, { useEffect, useState } from 'react'
import FeatureItem from './FeatureItem'
import '../../assets/sass/scss/Feature.scss'
import axios from 'axios'

const FeatureList = () => {
  const [FeatureData, setFeatureData] = useState([]);
  useEffect(() => {
    axios.get("https://test-react.agiletech.vn/galleries")
      .then(response => {
        console.log(response.data);
        setFeatureData(response.data);
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='container'>
      <div className='wrapper'>
        <h1>Feature</h1>
        <span>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</span>
        <div className='feature-list-item'>
          {FeatureData.length > 0 && FeatureData.map(item =>
            <FeatureItem key={item.id} description={item.desctiption} imageUrl={item.imageUrl} />
          )}
        </div>
      </div>
    </div>
  )
}

export default FeatureList