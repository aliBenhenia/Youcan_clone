import React, { useState } from 'react';
import { Head ,Btn,GlobalStyles} from './styles';
import { Select,Menu } from 'antd';
import {BarsOutlined,CloseCircleTwoTone} from "@ant-design/icons"
const logo = "https://youcan.shop/images/home_page_images_v2/logo.svg";
export default function Header() {
    const [open,setOpen] = useState(true)
    const handleOpen = ()=>
    {
        setOpen(!open);
    }
  return (
    <Head>
        {!open && <GlobalStyles />}
      <div className='container'>
        <div className='logo'>
            <a href='/'>
                 <img src = {logo} alt = "youCan"/>
            </a>
        </div>
        <div className='links'>
            <div className=''>
                <a href='/Features'>Features</a>
                <a href='/Pricing'>Pricing</a>
            </div>
        </div>
        <div id='sign'>
            <Btn pink>Sign up</Btn>
            <Btn>Login</Btn>
            <Select className='select'
                defaultValue="English"
                style={{ width: 120 ,border : 0 }}
                options={[
                    { value: 'English', label: 'English' },
                    { value: 'العربية', label: 'العربية' },
            ]}
            />
        </div>
        <div id='bar' onClick={handleOpen}>
            <BarsOutlined />
        </div>
        <div id={open ? "hide" : "show"} className='leftBar container '>
            <div className='hed'>
                <h5>Youcan</h5>
                <CloseCircleTwoTone onClick={handleOpen} className='close' />
            </div>
            <h5 style={{color : "#333333"}} className="mt-5 text-center">Language</h5>
            <Select className='select'
                defaultValue="English"
                style={{ width: 120 ,border : 0 }}
                options={[
                    { value: 'English', label: 'English' },
                    { value: 'العربية', label: 'العربية' },
            ]}
            />
                <a className='mt-4' href='/Features'>Features</a>
                <a href='/Pricing'>Pricing</a>
             <Btn pink className='mt-4'>Sign up</Btn>
            <Btn>Login</Btn>
        </div>
      </div>
    </Head>
  )
}
 