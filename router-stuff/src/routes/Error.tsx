import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <h1>Bad things have happened!</h1>
      <Link to={'/'}>Take me to safety</Link>
    </>
  );
};
export default Error;
