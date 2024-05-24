import Introduction from '../components/Home/Introduction';
import Menu from '../components/Home/Menu';
import Ratings from '../components/Home/Ratings';
import Reservations from '../components/Home/Reservations';
import Services from '../components/Home/Services';

const Home = () => {
  return (
    <>
      <Introduction />
      <Services />
      <Menu />
      <Ratings />
      <Reservations />
    </>
  );
};

export default Home;
