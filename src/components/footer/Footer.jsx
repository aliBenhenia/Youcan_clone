import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import {Fot} from './styles'
  import { BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs"
export default function Footer() {
  return (
    <Fot className=' mt-5'>
        <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 mt-4'>
              <h5 className='text-uppercase'>YouCan</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white mt-5'>
                  About us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white mt-5'>
                  Features
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Pricing
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Careers
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Life at YouCan
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol xm = '6' lg='3' md='6' className='mb-4 mb-md-0 mt-4'>
              <h5 className='text-uppercase'>Resources</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Contact us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Help Center
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Developers
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Blog
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  FAQs
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Press
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Learn E-commerce
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol xm = '6' lg='3' md='6' className='mb-4 mb-md-0 mt-4'>
              <h5 className='text-uppercase'>Community</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Partners portal
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Affiliate and Referral
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  YouCan Ambassadors
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Awards
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Become an expert
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Awards
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol xm = '6' lg='3' md='6' className='mb-4 mb-md-0 mt-4'>
              <h5 className='text-uppercase'>Conditions</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Terms of use
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Privacy policy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Cookies
                  </a>
                </li>
              </ul>
            </MDBCol>

           
          </MDBRow>
        </section>
      </MDBContainer>
      <hr />
      <h1>Follow Us</h1>
      <div>
      <BsFacebook className='soc'/>
      <BsTwitter className='soc'/>
      <BsInstagram className='soc'/>
      </div>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright : 
        <a className='text-white' href='https://mdbootstrap.com/'>
          Ali Benhenia
        </a>
      </div>
    </MDBFooter>
    </Fot>
  )
}
