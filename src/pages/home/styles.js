import styled,{css} from "styled-components";
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
 export const HommStyle = styled.div    `
    .sect1
    {
        line-height: 2;
        .bl
        {
            max-width : 400px
        }
        h6
        {
            color #5F5F5F;
        }
    }
    .sec2
    {
        background : #b833751c;
        border-radius : 11px;
        h3
        {
            color : #B83275;
            font-size : 20px;
        }
        .bxx
        {
            margin-left : 19px;
            margin-top : 17px;
            background : #fff;
            display : flex;
            flex-direction : column;
            align-item : center;
            border-radius : 11px;
            justify-content : center;
            text-align : center;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            .feat
            {
               width : 55px;
               margin : 0 auto;
            }
            h4
            {
                color : #5F5F5F;
                font-size : 15px;
                display : block
            }
        }
    }
    .sec3
    {
        line-height : 2;

        #gify
        {
            max-width : 366px
        }
        p{
            color : #5F5F5F;
        }
    }
    .sec4
    {
        line-height : 2;
        border-radius : 11px;
        background : #F5F8FF;
        img{
            width : 333px;
            border-radius : 11px;
            margin-top :25px;
        }
    }
    .sec5
    {
        line-height : 2;
        img{
            width : 333px;
            border-radius : 11px;
            margin-top :25px;
        }
    }
 `