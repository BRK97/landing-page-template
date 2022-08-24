import React,{ Suspense } from 'react';

import {NotFound} from './containers';
import {Navbar, Footer,ScrollToTop, Spinner} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const Homepage = React.lazy(()=>import('./containers/Homepage/Homepage.jsx'));
const Leadership = React.lazy(()=>import('./containers/Leadership/Leadership'));
const PersonDisplay = React.lazy(()=>import('./containers/PersonDisplay/PersonDisplay'));
// import {Images} from './constants';
// import {} from './utils';

import './App.scss';

function App() {  

  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar/>
          <Suspense fallback={<Spinner />}>
          <Routes>

            <Route index element={
                <Homepage/>
                }/>
                
            <Route path='/leadership' element={
              <Suspense fallback={<Spinner/>}>
                <Leadership/>
              </Suspense> 
            }/>
            
            <Route path='/leadership/:id' element={
              <Suspense fallback={<Spinner/>}>
                <PersonDisplay/>
              </Suspense> 
            }/>
            
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          </Suspense>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
