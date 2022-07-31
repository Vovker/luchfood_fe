import {
  LoaderGif,
  LoaderWrapper
} from './styled';
import loader from '../../../assets/loader.gif';

const Loader = () => {
  return(
    <LoaderWrapper>
      <LoaderGif src={loader} alt={''}/>
    </LoaderWrapper>
  );
}

export default Loader;
