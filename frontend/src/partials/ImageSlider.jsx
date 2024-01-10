import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const ImageSlider = () => {
  return (
    <AwesomeSlider className='my-5'
        media={[
        {
            source: 'https://cdn.shopify.com/s/files/1/2384/0833/files/3_Slick_Back_1024x1024.jpg?v=1668876082',
        },
        {
            source: 'https://cdn.shopify.com/s/files/1/2384/0833/files/1_Quiff_1024x1024.jpg?v=1668876008',
        },
        {
            source: 'https://cdn.shopify.com/s/files/1/2384/0833/files/2_French_Crop_1024x1024.jpg?v=1668876039',
        },
        ]}
    />
  )
};

export default ImageSlider;