import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function Home() {
  return (
    
    <div className="Home">
      <p>Home</p>
      <FontAwesomeIcon icon="check-square" /> <br></br>
      <FontAwesomeIcon icon={['fab', 'apple']} />
    </div>
  );
}

export default Home;
