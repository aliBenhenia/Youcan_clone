import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
    body,html
    {
         overflow-x: hidden;
         /* overflow-y: hidden; */
         max-width: 100%; 
         @media only screen and (max-width: 1000px)
         {
            overflow-y:scroll ;
         }
        
    }
`