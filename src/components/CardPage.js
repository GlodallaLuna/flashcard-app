import React from 'react';
import { useState } from 'react';
import '../App.css';
import { RiSettings3Fill } from 'react-icons/ri'
import { HiArrowCircleRight } from 'react-icons/hi'

// Helper function that picks a random element from an array
function selectRandomElement(array) {
  const length = array.length
  return array[Math.floor(Math.random()*length)]
}


const CardPage = (props) => {
  const {changePage, gameDeck} = props

  // State variables
  // gameData is an object containing the curent card and the indices of the remaning cards in gameDeck
  const [counter, setCounter] = useState(1)
  const [lastCard, setLastCard] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  // Methods

  // Initialises the gameData variable
  const setUpCardGame = () => {
    // this basically picks a random number from 0 to gameDeck.length - 1
    const firstCard = selectRandomElement(gameDeck)

    const remainingCards = gameDeck.filter(card => {
      return card.id !== firstCard.id
    })

    const gameData = {
      currentCard: firstCard,
      remainingCards: remainingCards
    }

    return gameData
  }
  
  const [gameData, setGameData] = useState(() => setUpCardGame())

  // Update current card on screen when next button is clicked
  const updateGame = () => {
 
    //if we are on the last card just go immediatly go back to settings
    //doing this at the beginning will avoid running the rest of the code which is pointless for the last card
    if(counter === gameDeck.length){
      changePage('settings')
      return
    }
 
    // Get random card that hasn't been used before
    const newCard = selectRandomElement(gameData.remainingCards)
    // Remove newCard from remainingCards (next time it won't get used)
    const newRemainingCards = gameData.remainingCards.filter(card => {
      return card.id !== newCard.id
    })

    const newGameData = {
      currentCard: newCard,
      remainingCards: newRemainingCards
    }
    
    const newCounter = counter + 1

    // If the newcounter is the final card, show the message
    if(newCounter === gameDeck.length){
      setLastCard(true)
    }

    setGameData(newGameData)
    setCounter(newCounter)
    setIsFlipped(false)
  }

  // Render the message showing we're at the last card
  const showLastCardMessage = () => {
    if(lastCard){
      return <p className='last-card-message'>Good Job! Your last card (^ω^)</p> 
    }
    return <></>
  }

  console.log(isFlipped)
  // Render
  return(
      <div className='grid'>
        {showLastCardMessage()}
        <p className='card--number'>{counter}/{gameDeck.length}</p>

        <Card 
          currentCard={gameData.currentCard}
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
        />

        <div className="wrapper--buttons">
          <div className="button-container">
            <div className='button button--settings '>
              <RiSettings3Fill size='2.4rem' style={{color: 'hsl(229, 42%, 59%)'}} 
              onMouseOver={({target})=>target.style.color="hsl(41, 98%, 50%)"} 
              onMouseOut={({target})=>target.style.color="hsl(229, 42%, 59%)"} 
              onClick={() => changePage('settings')}/>
              </div>
            <div className='button button--next' >
              <HiArrowCircleRight size='2.4rem' style={{color: 'hsl(229, 42%, 59%)'}} 
              onMouseOver={({target})=>target.style.color="hsl(41, 98%, 50%)"} 
              onMouseOut={({target})=>target.style.color="hsl(229, 42%, 59%)"}
              onClick={() => updateGame()}
              />
              </div>
          </div>
              </div>
        </div>
    )
}

const Card = (props) => {

  const {currentCard, isFlipped, setIsFlipped} = props
  
  return (
  <div className='flip-container' onClick={() => setIsFlipped(!isFlipped)}>
  <div className='flip-card' id={isFlipped ? 'flip' : ''}>
    <div className='card--front'>
      <div><img src={currentCard.path} alt="hiragana" />
      <p className='flip-text'>Flip the Card</p></div>
    </div>
    <div className='card--back'>
      <div className='text-answer'>{currentCard.answer}</div>
    </div>
  </div>
</div>
  )
}

export default CardPage;