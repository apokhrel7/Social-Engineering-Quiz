import { BrowserRouter } from "react-router-dom";
import './index.css';
import Question1 from './componentsq1/Question1/Question1.js';
import Choice from './componentsq1/Choice/Choice.js';
import HintAndNext from './componentsq1/HintAndNext/HintAndNext.js';
import Scam from './componentsq1/Scam/Scam.js';
import Footer from '../../components/Footer/Footer.js';
import Header from '../../components/Header/Header.js';

function Quiz1() {
  return (
    <BrowserRouter>
      <div className='back' style={{ backgroundImage: 'url(./circleTest.jpg)' }}>
        <Header />
        <Question1 />
        <Scam
          title='Scam title'
          imageURL='/fake1.png'
          body=''
        />
        <Choice />
        <HintAndNext />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Quiz1;
