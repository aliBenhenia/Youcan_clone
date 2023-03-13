import styled,{css} from 'styled-components'
export const Btn = styled.button `
    padding: 11px;
    border: 0;
    border-radius : 7px;
    padding-left: 19px;
    padding-right: 19px;
    margin-left: 18px;
    ${props =>
    props.pink ?
    css`
      background: #B83275;
      color: white;
    ` :  css`
      background: #fff;
      color: #333333;
      border: 1px solid #333333;
    ` 
    };
    transition : .6s all ;
    &:hover
    {
       opacity : .8
    }
`
export const Head = styled.div `
    background-color: #FFFFFF;
    padding-top: 9px;
    padding-bottom: 19px;
    height: 80px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    .logo
    {
        float: left;
    }
    .links
    {
        float: left;
        margin-left: 22px;
        a
        {
            text-decoration: none;
            margin-left: 27px;
            color: #333333;
        }
    }
    #sign
    {
        float: right;
        .select
        {
            margin-left: 18px;
        }
    }
    #bar
    {
            display: none;
    }
    .leftBar
    {
            display: none;
    }
    @media only screen and (max-width: 900px) {
                .links , #sign
                {
                    display: none;
                }
                #bar
                {
                    display: block;
                    float: right;
                    font-size: 2rem;\
                    margin-bottom: 10px;
                }
                .leftBar
                {
                    transition: all .3s;
                    display: block;
                    background-color: #fff;
                    width: 333px;
                    z-index: 333;
                    position: absolute;
                    height: 100vh;
                    left: 0;
                    top: 0;
                    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                    .hed
                    {
                        padding-top: 10px;
                        h5
                        {
                            float: left;
                        }
                        .close
                        {
                            float: right;
                            font-size: 1.4rem;
                        }
                    }
                    a
                    {
                        text-decoration: none;
                        margin-left: 27px;
                        display: block;
                        padding: 10px;
                        color: #333333;
                        width: 60%;
                        border-radius: 10px;
                        &:hover
                        {
                            background-color: #b8327545;
                        }
                    }  
                }
                #hide
                {
                    left: -200%;
                }
                #show
                {
                    left: 0;
                }
        }

`