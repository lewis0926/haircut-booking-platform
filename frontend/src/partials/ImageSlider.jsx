import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

const ImageSlider = ({imgSrc}) => {
  console.log("slider JSON URL " + JSON.stringify(imgSrc));
  console.log("slider URL " + imgSrc);
  return (
    <AwesomeSlider cssModule={AwesomeSliderStyles} className='my-5'>
      {imgSrc.map(src => <div data-src={src} />)}
    </AwesomeSlider>
  )
};

export default ImageSlider;