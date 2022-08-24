import {useState} from 'react';
import {AiFillPhone} from 'react-icons/Ai';
import {FaMapMarkedAlt} from 'react-icons/Fa';
import {MdEmail} from 'react-icons/Md';
import {HiOutlineMail} from 'react-icons/Hi';
import { Button, Form, Input, Polygon} from '../../../components';
import contactInfo from '../../../data/contact.json';
import './contact.scss';

const Contact = () => {

const [fullNameValue, setFullNameValue] = useState('');
const [organizationValue, setOrganizationValue] = useState('');
const [companyValue, setCompanyValue] = useState('');
const [messageValue, setMessageValue] = useState('');

return(
  <div className="contact" id='Contact'>
    {/* <div className="backgroundIllu"></div> */}
    <div className="contact-container">
      <div className="sections">
        <section className="contact-left">
          <div className="left-header">
            <span className="tag">CONTACT US</span>
            <h3>How can we help you?</h3>
            <p>Fill the form or drop an email
              <span className="contact-icon1">
                <HiOutlineMail/>
              </span>
            </p>
          </div>
          <ul>
            <li className="contact-info">
              <div className="contact-icon">
                <AiFillPhone/>
              </div>
              <span>{contactInfo.phoneNum}</span>
            </li>
            <li className="contact-info">
              <div className="contact-icon">
                <FaMapMarkedAlt/>
              </div>
              <span>{contactInfo.address}</span>
            </li>
            <li className="contact-info">
              <div className="contact-icon">
                <MdEmail/>
              </div>
              <span>{contactInfo.emailUrl}</span>
            </li>
          </ul>
        </section>
        <section className="contact-right">
          <Form>
            <Input
              type='FullName'
              id='contact-fullname'
              label='Full Name'
              value={fullNameValue}
              setValue={setFullNameValue}
            />
            <br/>
            <Input
            type='Orgnaization'
              id='contact-organization'
              label='Organization'
              value={organizationValue}
              setValue={setOrganizationValue}
            />
            <br/>
            <Input
              type='Email'
              id='contact-fullname'
              label='Email'
              value={companyValue}
              setValue={setCompanyValue}/>
            <br/>
            <Input
              isTextArea
              type='message'
              id='contact-fullname'
              label='Message'
              value={messageValue}
              setValue={setMessageValue}/>
            <br/>
            <Button btnClasses = {['btn-Contact']}>
              Submit
            </Button>
          </Form>
        </section>
      </div>
    </div>
  </div>
)

}

export default Contact;