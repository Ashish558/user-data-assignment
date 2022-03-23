import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Home from './pages/Home'

const theme = createTheme({
   breakpoints: {
      values: {
         xs: 0,
         sm: 568,
         md: 760,
         lg: 970,
         xl: 1200,
      }
   },
   palette: {
      background: {
         blue: '#1081e8c2',
         default: '#f9f8ffe3'
      },
      color: {
         blue: '#1976d2',
         secondary: '#505050',
         white: '#fff',
         black: '#000',
         primary: '#1081e8',
      }
   },
   typography: {
      fontFamily: [
         "Poppins",
         "Sans-Serif",
         "Helvetica Neue",
         "Arial",
         "sans-serif"
      ].join(",")
   },

})
const App = () => {

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles styles={{ listStyle: 'none' }} />
         <CssBaseline />
         <Home />

      </ThemeProvider>
   )
}


export default App
