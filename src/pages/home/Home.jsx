import React from 'react'
import {HommStyle} from "./styles"
import {Timeline,Collapse} from "antd"
import {HomeOutlined}  from "@ant-design/icons"
import {Btn} from "./styles"
const { Panel } = Collapse;
export default function Home() {
  return (
    <HommStyle>
        <div className='row sect1'>  
            <div className='col-md-6'>
                <h2 className='text-grey'>
                Selling online has never been easier
                </h2>
                <p>
                Start your online store in a few clicks and take advantage of our powerful e-commerce tools to build a profitable business 
                </p>
                <Timeline
                className = "mt-5"
                    items={[
                    {
                        children: 'Easy and intuitive store setup',
                    },
                    {
                        children: 'No charge until you succeed',
                    },
                    {
                        children: 'All the e-commerce tools you need in one place',
                    },
                    {
                        children: 'Network problems being solved ',
                    },
                    ]}
                />
                <Btn pink>Get Started</Btn>
            </div>
            <div className = "col-md-6 mt-5">
                <img className = "bl" src ="https://youcan.shop/images/new_portal_design/home/shop-global-2.webp"/>
                 <div className="row mt-3">
                    <div className = "col-4">
                        <h4>+150K</h4>
                        <h6>Active stores</h6>
                    </div>
                    <div className = "col-4">
                        <h4>+20</h4>
                        <h6>Served countries</h6>
                    </div>
                    <div className = "col-4">
                        <h4>+20%</h4>
                        <h6>Conversion rate</h6>
                    </div>
                 </div>
            </div>
        </div>
        <div className = "sec2 mt-5 pt-2 pb-2 container pb-5">
            <h3 className="text-center mt-5 mb-5">How does it work? </h3>
            <div className = "row container ">
                <div className="col-md-5 bxx p-5">
                      <img className="feat mb-4 ml-5" src="https://youcan.shop/images/home_page_images_v2/feature-1.svg"/>
                      <h4>1. Setup your store</h4>
                 </div>
                <div className="col-md-5 bxx p-5 ">
                      <img className="feat mb-4 ml-5" src="https://youcan.shop/images/home_page_images_v2/feature-2.svg"/>
                      <h4>2. List your products</h4>
                 </div>
                <div className="col-md-5 bxx p-5 ">
                      <img className="feat mb-4 ml-5" src="https://youcan.shop/images/home_page_images_v2/feature-3.svg"/>
                      <h4>3. Drive traffic and sales</h4>
                 </div>
                <div className="col-md-5 bxx p-5 ">
                      <img className="feat mb-4 ml-5" src="https://youcan.shop/images/home_page_images_v2/feature-4.svg"/>
                      <h4>4. Get paid</h4>
                 </div>
            </div>
        </div>
        <div className = "container sec3 mt-5">
          <div className = "row">
            <div className="col-md-7 pr-5">
                    <img id ="gify" src = "https://youcan.shop/images/new_portal_design/home/setup-store-animation.gif"/>
                </div>
                <div className="col-md-5 pl-3">
                    <h1> Easy and intuitive store setup</h1>
                    <p>
                    Save yourself hours of hassle with our well-optimized, highly convertible, simple, and easy to setup store themes.
                    </p>
                    <Btn>
                        Learn more
                    </Btn>
                </div>
          </div>
        </div>
        <div className = "container sec4 mt-5 mt-5 container p-5">
          <div className = "row">
                <div className="col-md-5 pl-3">
                    <h3> No charge until you succeed</h3>
                    <p>
                    Enjoy all YouCan features and services without any limitations and without having to pay until you reach $10,000 in sales.
                    </p>
                    <Btn>
                        Learn more
                    </Btn>
                </div>
            <div className="col-md-7 pr-5 ">
                    <img id ="gify" src = "https://youcan.shop/images/new_portal_design/home/navigate-illustration-3.webp"/>
             </div>
          </div>
        </div>
        <div className = "container sec5 mt-5 mt-5 container p-5">
          <div className = "row">
            <div className="col-md-7 pr-5 ">
                    <img id ="gify" src = "https://youcan.shop/images/home_page_images_v2/store-setup.png"/>
             </div>
                <div className="col-md-5 pl-3 mt-3">
                    <h3 > No charge until you succeed</h3>
                    <p>
                    Enjoy all YouCan features and services without any limitations and without having to pay until you reach $10,000 in sales.
                    </p>
                    <Btn>
                        Learn more
                    </Btn>
                </div>
          </div>
        </div>
        <div className = "container sec6 mt-5  container p-5">
        <Collapse defaultActiveKey={['1']}>
            <Panel header="How can I change my store name and email?" key="1">
                <p>To change your store name, you can do it manually from your store settings, for your store slug and your store/seller email, please send an email to support@youcan.shop</p>
            </Panel>
            <Panel header="Why should I buy credit to activate my store?" key="2">
                <p>To avoid fake accounts and robots. The amount bought will be a deposit in your balance that you can always use later.</p>
            </Panel>
            <Panel header="Is there a limit on the number of products I can add to my store?" key="3">
                <p>You can add an unlimited number of products and receive an unlimited number of qualified visitors excluding fake visitors. YouCan enables you to create, develop and manage your store without limitations.</p>
            </Panel>
            <Panel header="Does YouCan take care of storage and shipping of my products?" key="4">
                <p>
arrow down
We do not currently support storage and shipping, but we have an aggregator service (YouCan Ship) that provides you with a list of local shipping companies and you can choose from it.</p>
            </Panel>
            <Panel header="Can I use YouCan for dropshipping" key="5">
                <p>Yes, YouCan can be used for dropshipping. All the tools you need to do so are available to you. Please read our terms and conditions for cases where you are not allowed to use dropshipping.</p>
            </Panel>
            </Collapse>
        </div>
    </HommStyle>
  )
}
