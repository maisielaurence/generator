import './App.css';
import { Button, Typography, Box, AppBar, Toolbar } from '@mui/material';
import { useState, useEffect } from 'react';
// @ts-ignore
import { quotes } from './constants';
import { BrowserRouter } from 'react-router-dom'

function App() {

  const [ currentQuote, setCurrentQuote ] = useState("")
  const [ author, setAuthor] = useState("")

  const getQuote = () => {
    const quoteIndex = Math.floor(Math.random() * quotes.length )
    // @ts-ignore
    const newQuote = quotes.find(({ index }) => index === quoteIndex);
    return newQuote
  }
  
  const generate = () => {
    const quote = getQuote()
    setCurrentQuote(quote.quote)
    setAuthor(quote.author)
  }

  useEffect(() => {
    const quote = getQuote()
    setCurrentQuote(quote.quote)
    setAuthor(quote.author)
  }, []);
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Box className="App">
      <AppBar enableColorOnDark sx={{backgroundColor: "#68B0AB", color: "#FAF3DD", display: "flex", alignItems: "center"}}>
        <Toolbar>
          <Typography variant='h5' sx={{paddingTop: "1rem", paddingBottom: "1rem"}} >Welcome to the random quote genrator!</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{height: "max-content"}}>
        <Box sx={{backgroundColor: '#4A7C59', width: "max-content", maxWidth: "80vw", minWidth: "35vw", height: "max-content", alignContent: "center", justifyContent: "center", borderRadius: "2rem", padding: "2rem", marginTop: "2rem", borderColor: "#FFFFFF", borderWidth: "2rem", borderStyle: "thin"}}>
          <Typography variant="h4" sx={{color: "#FAF3DD"}}>{" "+  JSON.stringify(currentQuote) + "'"}</Typography>
          <Typography variant="body1" sx={{paddingTop: "1rem", color: "#FAF3DD"}}> - {author}</Typography>
        </Box>
        <Button onClick={generate} sx={{backgroundColor: "#68B0AB", color: "#FAF3DD", marginTop: "2rem", padding: "10px"}} size="large">Get a new quote!</Button>
        </Box>
    </Box>
    </BrowserRouter>
  );
}

export default App;

