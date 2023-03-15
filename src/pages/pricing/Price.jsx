import React from 'react'
import {Card,Timeline} from "antd"
import { PriceStyle } from './styles';
const { Meta } = Card;
export default function Price() {
  return (
    <PriceStyle>
        <h1 >Pricing</h1>
        <p id='pp'>Offering the most competitive rates to entrepreneurs in the MEA region and 2 models to choose from :</p>
       <div className='row'>
        <div className='col-md-6 mt-4'>
            <div className='Boxx'>
                <div className='headd p-4'>
                    <h4>Solopreneur</h4>
                    <div className='prices mt-3'>
                            <p className='pricesP ml-4'>$</p>
                            <h1 className=''>27</h1>
                            <p className='pricesP'>per month</p>
                    </div>
                    <hr />
                    <h4>What's included</h4>
                    <Timeline
                        items={[
                        {
                            children: 'Up to 50K monthly sales',
                        },
                        {
                            children: '1 user',
                        },
                        ]}
                    />
                </div>
                <button>Choose plan</button>
            </div>
        </div>
        <div className='col-md-6 mt-4'>
            <div className='Boxx'>
                <div className='headd p-4'>
                    <h4>Starter</h4>
                    <div className='prices mt-3'>
                            <p className='pricesP ml-4'>$</p>
                            <h1 className=''>47</h1>
                            <p className='pricesP'>per month</p>
                    </div>
                    <hr />
                    <h4>What's included</h4>
                    <Timeline
                        items={[
                        {
                            children: 'Up to 100K monthly sales',
                        },
                        {
                            children: '3 users',
                        },
                        ]}
                    />
                </div>
                <button>Choose plan</button>
            </div>
        </div>
        <div className='col-md-6 mt-4'>
            <div className='Boxx'>
                <div className='headd p-4'>
                    <h4>Entrepreneur</h4>
                    <div className='prices mt-3'>
                            <p className='pricesP ml-4'>$</p>
                            <h1 className=''>87</h1>
                            <p className='pricesP'>per month</p>
                    </div>
                    <hr />
                    <h4>What's included</h4>
                    <Timeline
                        items={[
                        {
                            children: 'Up to 300K monthly sales',
                        },
                        {
                            children: '6 users',
                        },
                        ]}
                    />
                </div>
                <button>Choose plan</button>
            </div>
        </div>
        <div className='col-md-6 mt-4'>
            <div className='Boxx'>
                <div className='headd p-4'>
                    <h4>Small Medium Enterprise</h4>
                    <div className='prices mt-3'>
                            <p className='pricesP ml-4'>$</p>
                            <h1 className=''>187</h1>
                            <p className='pricesP'>per month</p>
                    </div>
                    <hr />
                    <h4>What's included</h4>
                    <Timeline
                        items={[
                        {
                            children: 'Up to 1M monthly sales',
                        },
                        {
                            children: '19 users',
                        },
                        ]}
                    />
                </div>
                <button>Choose plan</button>
            </div>
        </div>
       </div>
    </PriceStyle>
  )
}
