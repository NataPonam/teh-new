import './App.css';
import { Route, Routes } from 'react-router-dom';
import Form from './components/Form/Form';
import Update from './components/Update/Update';
import Header from './components/Header/Header';
import ModalUpdata from './components/ModalUpdata/ModalUpdata';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {
  const [isModal, setModal] = useState(false);
  const [modalChild, setModalChild] = useState('');
  const [job, setJob] = useState({});
  return (
    <div className='App'>
      <ModalUpdata
        active={isModal}
        setModal={setModal}
        modalChild={modalChild}
        setJob={setJob}
      ></ModalUpdata>
      <Header></Header>
      <Routes>
        <Route
          path='/techoavia-roman'
          element={
            <Form
              setModalChild={setModalChild}
              setModal={setModal}
              job={job}
              setJob={setJob}
            ></Form>
          }
        ></Route>
        <Route
          path='/update'
          element={
            <Update setModalChild={setModalChild} setModal={setModal}></Update>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
