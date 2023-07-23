import { Dna } from 'react-loader-spinner';
import c from './Loader.module.css';

export const Loader = () => (
  <div className={c.loader}>
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>
);
