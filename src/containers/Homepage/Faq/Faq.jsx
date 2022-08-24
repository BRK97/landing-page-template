// import React from 'react';
import {Accordion, Polygon} from '../../../components';
import questions from '../../../data/faq.json';
import './faq.scss';

const Faq = () => {
  
  return (
    <div className="faq" id="Faq">
      <div className="faq-container">
        <div id="question-bg">Questions...</div>
        <h1 className="faq-title">Have a <span id="faq-question">Question?</span></h1>
        <p className="faq-description">Here are some of our Frequently asked questions.</p>
        <div className="accordion-container">

          {questions.map((item) => (
            <Accordion
              question = {item.q}
              answer = {item.a}
            />
          ))}

        </div>
        <h2 className="faq-bottomTitle">Still not sure?</h2>
        <p className="faq-bottomDescription">If you cannot find answer to your question in our FAQ, you can always contact us, we will answer to you shortly!</p>
      </div>
      <div className="faq-end">
        <Polygon isFlipped={true}/>
      </div>
    </div>
  )
}

export default Faq