import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', 'Poppins', sans-serif; 
   }
   #root{
       margin:0 auto;
   }

   svg {
       width: 1.5rem;
       height: auto;

       cursor: pointer;
   }
`
