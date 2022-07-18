import React from "react";
import { useState, useEffect } from 'react';
import '../App.css'

const Settings = (props) => {
  //props with the function that change the boolen when switchers are active (onClick)
    const {handleSelection, handleClickPlay, error, updateDeckNumber, handleCardNumberInput, cardNumberInput, allCharacters, repetitions} = props
  
    const renderErrorMessage = () => {
      //if error.showError is = to false
      if(!error.showError){
        return <></>
      } else {
        return <div>{error.errorMessage}</div>
      }
    }

    //to disabled all the other buttons when we select all characters
    const renderButtons = () => {
      if(allCharacters) {

      return(<main className='switchers-section'>
        <div className="switchers-wrapper">
          <div className='switcher-container'>
            <label className='switch'>
              <input type='checkbox' onClick={() => handleSelection('allCharacters')}></input>
              <span className='slider round'></span>
            </label>
            <p className='switcher-text'>All the Characters</p>
          </div>
        
          <div className='switcher-container'>
            <label className='switch'>
              {/*-disabled means you can't click on it
                 -checkd= flase makes it forced to be false
                 so if we've already clicked on some buttons and then all characters it automatically
                 unceck the other buttons for us
                 -also we delete the onclick because we dont need it anymore*/}
              <input disabled checked={false} type='checkbox'></input>
              <span className='slider round slider--disabled'></span>
            </label>
            <p className='switcher-text'>Sets: Vowels, K, S</p>
          </div>
          <div className='switcher-container'>
            <label className='switch'>
              <input disabled checked={false} type='checkbox' ></input>
              <span className='slider round slider--disabled'></span>
            </label>
            <p className='switcher-text'>Sets: T, N, H</p>
          </div>
          <div className='switcher-container'>
            <label className='switch'>
              <input disabled type='checkbox' checked={false}></input>
              <span className='slider round slider--disabled'></span>
            </label>
            <p className='switcher-text'>Sets: M, Y, R, W</p>
          </div>
          <div className='switcher-container'>
            <label className='switch'>
              <input disabled type='checkbox' checked={false}></input>
              <span className='slider round slider--disabled'></span>
            </label>
            <p className='switcher-text'>Diacratics</p>
          </div>  
        </div>

        <p className='deck-number'>Deck: <span>{updateDeckNumber()}</span> cards</p>
      </main>)
      } else {
        return(
          <main className='switchers-section'>
          <div className="switchers-wrapper">
            <div className='switcher-container'>
              <label className='switch'>
                <input type='checkbox' onClick={() => handleSelection('allCharacters')}></input>
                <span className='slider round'></span>
              </label>
              <p className='switcher-text'>All the Characters</p>
            </div>
          
            <div className='switcher-container'>
              <label className='switch'>
                <input type='checkbox' onClick={() => handleSelection('setOne')}></input>
                <span className='slider round'></span>
              </label>
              <p className='switcher-text'>Sets: Vowels, K, S</p>
            </div>
            <div className='switcher-container'>
              <label className='switch'>
                <input type='checkbox' onClick={() => handleSelection('setTwo')}></input>
                <span className='slider round'></span>
              </label>
              <p className='switcher-text'>Sets: T, N, H</p>
            </div>
            <div className='switcher-container'>
              <label className='switch'>
                <input type='checkbox' onClick={() => handleSelection('setThree')}></input>
                <span className='slider round'></span>
              </label>
              <p className='switcher-text'>Sets: M, Y, R, W</p>
            </div>
            <div className='switcher-container'>
              <label className='switch'>
                <input type='checkbox' onClick={() => handleSelection('diacritics')}></input>
                <span className='slider round'></span>
              </label>
              <p className='switcher-text'>Diacratics</p>
            </div>  
          </div>

          <p className='deck-number'>Deck: <span>{updateDeckNumber()}</span> cards</p>
          
        </main>
        )
      }
    }

    const renderTextarea = () => {
      if(repetitions){
        // value forces the thing inside the form to be whatever it is
        // if it's not a number (e.g. a letter), we replace it with an empty string ''
        return(<textarea type='number' maxLength={3} value={isNaN(cardNumberInput) ? '' : cardNumberInput} onChange={handleCardNumberInput}></textarea>)
      } else {
        return(<textarea className="textarea--disabled" disabled type='number' maxLength={3}></textarea>)
      }
      
    }
  
    const renderNumberOfCards = () => {
      if(isNaN(cardNumberInput)){
        return <p className='deck-number'>Please enter a number</p>
      } else {
        return <p className='deck-number'>Number of cards: {cardNumberInput === 0 ? '' : cardNumberInput}</p>
      }
    }

    return(
      <div className='grid'>  
      <div className='wrapper'>
        <h1 className='title'><span className="hiragana">平仮名</span> <span className="title--span">Flash Cards</span></h1>
        <section className='section--intro'>
          <h2>Before starting set your preferences</h2>
          {renderButtons()}
          <h2 className='repeat-title'>Do you want to repeat cards?</h2>
          <div className="switchers-section">
            <div className="switchers-wrapper">
              <div className='switcher-container switcher--repeat'>
                <p className='repeat-text no'>No</p>
                <label className='switch'>
                  <input type='checkbox' onClick={() => handleSelection('repetitions')}></input>
                  <span className='slider round'></span>
                </label>
                <p className='repeat-text yes'>Yes</p>
              </div>
            </div>
            <h2 className='repeat-title'>How many cards?</h2>
            {renderTextarea()}
            {renderNumberOfCards()}
            <div className="error-message">{renderErrorMessage()}</div>
          </div>
  
        </section>
        
          <button className='button button--play' onClick={handleClickPlay}>Play</button>
        
      </div>
      </div>
    )  
}

export default Settings;