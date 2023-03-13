import React from 'react'
import {HommStyle} from "./styles"
import {Timeline} from "antd"
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
                    items={[
                    {
                        children: 'Create a services site 2015-09-01',
                    },
                    {
                        children: 'Solve initial network problems 2015-09-01',
                    },
                    {
                        children: 'Technical testing 2015-09-01',
                    },
                    {
                        children: 'Network problems being solved 2015-09-01',
                    },
                    ]}
                />
            </div>
        </div>
    </HommStyle>
  )
}
