import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

const ImageSlider = ({imgSrc}) => {
  return (
    <>
      {imgSrc && imgSrc.length > 0 && (
        <AwesomeSlider cssModule={AwesomeSliderStyles} className='my-5'>
          {imgSrc.map(src =>  <div key={src} data-src={src} />)}
        </AwesomeSlider>
      )}
    </>
  )
};

export default ImageSlider;