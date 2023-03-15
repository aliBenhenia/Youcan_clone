import styled from "styled-components";

export const PriceStyle  = styled.div `
    h1{
        text-align: center;
    }
    #pp{
        color:#555555 ;
        text-align: center;
    }
    .Boxx
    {
        background-color: #fff;
        border-radius: 16px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        .prices
        {
            display: flex;

            .pricesP
            {
                float: left;
                margin-left : 11px;
                color:#555555 ;
            }
            h1{
                float: left;
                margin-left : 4px; 
            }
        }
        button
        {
            width: 100%;
            padding: 15px;
            background-color: #FAFAFA;
            border: 0;
            border-bottom-left-radius : 16px;
            border-bottom-right-radius : 16px;
            transition: all .4s;
            &:hover
            {
                background-color: #B83275;
                color: #fff;
            }
        }
    }
`