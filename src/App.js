import { useEffect, useState } from 'react';
import './App.css';
import Settings from './components/Settings';
import Card from './components/Card';
import CardRepetitions from './components/CardRepetitions';

const completeDeck = [
  {
      "path": require("./images/set1-a.png"),
      "id": 1,
      "group": 1,
      "answer": "a"
  },

  {
      "path": require("./images/set1-e.png"),
      "id": 2,
      "group": 1,
      "answer": "e"
  },

  {
      "path": require("./images/set1-i.png"),
      "id": 3,
      "group": 1,
      "answer": "i"
  },

  {
      "path": require("./images/set1-o.png"),
      "id": 4,
      "group": 1,
      "answer": "o"
  },

  {
      "path": require("./images/set1-u.png"),
      "id": 5,
      "group": 1,
      "answer": "u"
  },

  {
      "path": require("./images/set2-ka.png"),
      "id": 6,
      "group": 1,
      "answer": "ka"
  },

  {
      "path": require("./images/set2-ke.png"),
      "id": 7,
      "group": 1,
      "answer": "ke"
  },

  {
      "path": require("./images/set2-ki.png"),
      "id": 8,
      "group": 1,
      "answer": "ki"
  },

  {
      "path": require("./images/set2-ko.png"),
      "id": 9,
      "group": 1,
      "answer": "ko"
  },

  {
      "path": require("./images/set2-ku.png"),
      "id": 10,
      "group": 1,
      "answer": "ku"
  },

  {
      "path": require("./images/set3-sa.png"),
      "id": 11,
      "group": 1,
      "answer": "sa"
  },

  {
      "path": require("./images/set3-se.png"),
      "id": 12,
      "group": 1,
      "answer": "se"
  },

  {
      "path": require("./images/set3-shi.png"),
      "id": 13,
      "group": 1,
      "answer": "shi"
  },

  {
      "path": require("./images/set3-so.png"),
      "id": 14,
      "group": 1,
      "answer": "so"
  },

  {
      "path": require("./images/set3-su.png"),
      "id": 15,
      "group": 1,
      "answer": "su"
  },

  {
      "path": require("./images/set4-chi.png"),
      "id": 16,
      "group": 2,
      "answer": "chi"
  },

  {
      "path": require("./images/set4-ta.png"),
      "id": 17,
      "group": 2,
      "answer": "ta"
  },

  {
      "path": require("./images/set4-te.png"),
      "id": 18,
      "group": 2,
      "answer": "te"
  },

  {
      "path": require("./images/set4-to.png"),
      "id": 19,
      "group": 2,
      "answer": "to"
  },

  {
      "path": require("./images/set4-tsu.png"),
      "id": 20,
      "group": 2,
      "answer": "tsu"
  },

  {
      "path": require("./images/set5-na.png"),
      "id": 21,
      "group": 2,
      "answer": "na"
  },

  {
      "path": require("./images/set5-ne.png"),
      "id": 22,
      "group": 2,
      "answer": "ne"
  },

  {
      "path": require("./images/set5-ni.png"),
      "id": 23,
      "group": 2,
      "answer": "ni"
  },

  {
      "path": require("./images/set5-no.png"),
      "id": 24,
      "group": 2,
      "answer": "no"
  },

  {
      "path": require("./images/set5-nu.png"),
      "id": 25,
      "group": 2,
      "answer": "nu"
  },


  {
      "path": require("./images/set6-fu.png"),
      "id": 26,
      "group": 2,
      "answer": "fu"
  },

  {
      "path": require("./images/set6-ha.png"),
      "id": 27,
      "group": 2,
      "answer": "ha"
  },

  {
      "path": require("./images/set6-he.png"),
      "id": 28,
      "group": 2,
      "answer": "he"
  },

  {
      "path": require("./images/set6-hi.png"),
      "id": 29,
      "group": 2,
      "answer": "hi"
  },


  {
      "path": require("./images/set6-ho.png"),
      "id": 30,
      "group": 2,
      "answer": "ho"
  },

  {
      "path": require("./images/set7-ma.png"),
      "id": 31,
      "group": 3,
      "answer": "ma"
  },

  {
      "path": require("./images/set7-me.png"),
      "id": 32,
      "group": 3,
      "answer": "me"
  },

  {
      "path": require("./images/set7-mi.png"),
      "id": 33,
      "group": 3,
      "answer": "mi"
  },

  {
      "path": require("./images/set7-mo.png"),
      "id": 34,
      "group": 3,
      "answer": "mo"
  },

  {
      "path": require("./images/set7-mu.png"),
      "id": 35,
      "group": 3,
      "answer": "mu"
  },

  {
      "path": require("./images/set8-ya.png"),
      "id": 36,
      "group": 3,
      "answer": "ya"
  },

  {
      "path": require("./images/set8-yo.png"),
      "id": 37,
      "group": 3,
      "answer": "yo"
  },

  {
      "path": require("./images/set8-yu.png"),
      "id": 38,
      "group": 3,
      "answer": "yu"
  },

  {
      "path": require("./images/set9-ra.png"),
      "id": 39,
      "group": 3,
      "answer": "ra"
  },

  {
      "path": require("./images/set9-re.png"),
      "id": 40,
      "group": 3,
      "answer": "re"
  },

  {
      "path": require("./images/set9-ri.png"),
      "id": 41,
      "group": 3,
      "answer": "ri"
  },

  {
      "path": require("./images/set9-ro.png"),
      "id": 42,
      "group": 3,
      "answer": "ro"
  },

  {
      "path": require("./images/set9-ru.png"),
      "id": 43,
      "group": 3,
      "answer": "ru"
  },

  {
      "path": require("./images/set-10-wa.png"),
      "id": 44,
      "group": 3,
      "answer": "wa"
  },

  {
      "path": require("./images/set-10-wo.png"),
      "id": 45,
      "group": 3,
      "answer": "wo"
  },

  {
      "path": require("./images/set-11-ga.png"),
      "id": 46,
      "group": 4,
      "answer": "ga"
  },

  {
      "path": require("./images/set-11-ge.png"),
      "id": 47,
      "group": 4,
      "answer": "ge"
  },

  {
      "path": require("./images/set-11-gi.png"),
      "id": 48,
      "group": 4,
      "answer": "gi"
  },

  {
      "path": require("./images/set-11-go.png"),
      "id": 49,
      "group": 4,
      "answer": "go"
  },

  {
      "path": require("./images/set-11-gu.png"),
      "id": 50,
      "group": 4,
      "answer": "gu"
  },

  {
      "path": require("./images/set-12-za.png"),
      "id": 51,
      "group": 4,
      "answer": "za"
  },

  {
      "path": require("./images/set-12-ze.png"),
      "id": 52,
      "group": 4,
      "answer": "ze"
  },

  {
      "path": require("./images/set-12-zi.png"),
      "id": 53,
      "group": 4,
      "answer": "zi"
  },

  {
      "path": require("./images/set-12-zo.png"),
      "id": 54,
      "group": 4,
      "answer": "zo"
  },

  {
      "path": require("./images/set-12-zu.png"),
      "id": 55,
      "group": 4,
      "answer": "zu"
  },

  {
      "path": require("./images/set-13-da.png"),
      "id": 56,
      "group": 4,
      "answer": "da"
  },

  {
      "path": require("./images/set-13-de.png"),
      "id": 57,
      "group": 4,
      "answer": "de"
  },

  {
      "path": require("./images/set-13-di.png"),
      "id": 58,
      "group": 4,
      "answer": "di"
  },

  {
      "path": require("./images/set-13-do.png"),
      "id": 59,
      "group": 4,
      "answer": "do"
  },

  {
      "path": require("./images/set-13-du.png"),
      "id": 60,
      "group": 4,
      "answer": "du"
  },

  {
      "path": require("./images/set-14-ba.png"),
      "id": 61,
      "group": 4,
      "answer": "ba"
  },

  {
      "path": require("./images/set-14-be.png"),
      "id": 62,
      "group": 4,
      "answer": "be"
  },

  {
      "path": require("./images/set-14-bi.png"),
      "id": 63,
      "group": 4,
      "answer": "bi"
  },

  {
      "path": require("./images/set-14-bo.png"),
      "id": 64,
      "group": 4,
      "answer": "bo"
  },

  {
      "path": require("./images/set-14-bu.png"),
      "id": 65,
      "group": 4,
      "answer": "bu"
  },

  {
      "path": require("./images/set-15-pa.png"),
      "id": 66,
      "group": 4,
      "answer": "pa"
  },

  {
      "path": require("./images/set-15-pe.png"),
      "id": 67,
      "group": 4,
      "answer": "pe"
  },

  {
      "path": require("./images/set-15-pi.png"),
      "id": 68,
      "group": 4,
      "answer": "pi"
  },

  {
      "path": require("./images/set-15-po.png"),
      "id": 69,
      "group": 4,
      "answer": "po"
  },

  {
      "path": require("./images/set-15-pu.png"),
      "id": 70,
      "group": 4,
      "answer": "pu"
  },

  {
      "path": require("./images/set-10-n.png"),
      "id": 71,
      "group": 3,
      "answer": "n"
  }
]

function App() {

  /*
  const [completeDeck, setCompleteDeck] = useState([])
  //useEffect to load the data at the start of the app
  useEffect(
    //useEeffect always needs two parameters if you want to render it only once
    //the second parameter needs to be []
    () => {
      async function fetchData() {
        const response = await fetch('./data.json');
        const data = await response.json();
        //setCompleteDeck to save the data to the state
        setCompleteDeck(data)
      }
      
      fetchData();
  }, [])
  */
  /////////////////////////////
  //State variables

  //Variable for the switchers
    const [selectedCharacters, setSelectedCharacters] = useState({
        allCharacters: false,
        setOne: false,
        setTwo: false,
        setThree: false,
        diacritics: false,
        repetitions: false
    })
    const [error, setError] = useState({
    showError: false,
    errorMessage: ''
    })
    const [gameDeck, setGameDeck] = useState([])
    //state and function to render the correct page on the screen
    const [currentPage, setCurrentPage]  = useState('settings');
    
    //////////////////
    // Methods

    //function to change the boolean of the swithcers
    const toggleSelection = (key) => {
    
        let newSelectedCharacters;

        // clicking on allCharacters is a special case
        // so we deal with it separately using an if statement
        if(key === 'allCharacters'){
            // Flip the value of allCharacters and reset all the rest to false (those buttons will turn off anyway)
            newSelectedCharacters = {
                allCharacters: !selectedCharacters.allCharacters,
                setOne: false,
                setTwo: false,
                setThree: false,
                diacritics: false,
                repetitions: selectedCharacters.repetitions
            }
            setSelectedCharacters(newSelectedCharacters)
            return
        }
        
        newSelectedCharacters = {...selectedCharacters}
        //key it's a string so we can't use the dot notation

            // the code below can be done in one line using
            //newSelectedCharacters[key] = !newSelectedCharacters[key]

        if(newSelectedCharacters[key] === true) {
            newSelectedCharacters[key] = false
        } else {
            newSelectedCharacters[key]= true
        }
        setSelectedCharacters(newSelectedCharacters)
    } 

    const [cardNumberInput, setCardNumberInput] = useState(0)

    const handleCardNumberInput = (e) => {
      setCardNumberInput(Number(e.target.value))
    }

    const buildGameDeck = () => {
    //if complete deck is selected we can just return the array with the cards(objects) we got from our file
    if(selectedCharacters.allCharacters) {
        return completeDeck
    } 

    //creating the game deck setting 
    //we need a pair condition to check that both the values on the array and the selectedCharacters satisfy it to return true
    //aka to add the cards to the deck
    const newGameDeck = completeDeck.filter((card) => {
        if(card.group === 1 && selectedCharacters.setOne) {
        return true
        } else if(card.group === 2 && selectedCharacters.setTwo) {
        return true
        } else if(card.group === 3 && selectedCharacters.setThree) {
        return true
        } else if(card.group === 4 && selectedCharacters.diacritics) {
        return true
        //else, if the conditions are not satisfiedmeans that we won't add the cards
        } else {
        return false
        }
    })

    //new deck created
    return newGameDeck
    }

    

    const renderPage = () => {
    if(currentPage === 'settings') {
        return <Settings 
                
                handleSelection={toggleSelection} 
                handleClickPlay={handleClickPlay}
                error={error}
                gameDeck={gameDeck}
                selectedCharacters={selectedCharacters}
                updateDeckNumber={updateDeckNumber}
                handleCardNumberInput={handleCardNumberInput}
                cardNumberInput={cardNumberInput}
                allCharacters={selectedCharacters.allCharacters}
                repetitions={selectedCharacters.repetitions}
                />
    } else if(currentPage === 'card') {
        return <Card 
                changePage={setCurrentPage} 
                gameDeck={gameDeck}
                />
    } else if(currentPage === 'repetitions') {
        return <CardRepetitions 
                changePage={setCurrentPage} 
                gameDeck={gameDeck}
                cardNumberInput={cardNumberInput}
                setCardNumberInput={setCardNumberInput}
               />
    }
    }

    const handleClickPlay = () => {
        const newGameDeck = buildGameDeck()

        // Check for errors
        if(newGameDeck.length === 0) {
            
            const newError = {
                showError: true,
                errorMessage: 'You must select at least one set!'
            }
            setError(newError)
            return

        } else if(isNaN(cardNumberInput)){
                        
            const newError = {
                showError: true,
                errorMessage: 'You must enter a number!'
            }
            setError(newError)
            return
        }


        // Clean up error message
        setError({
            showError: false,
            errorMessage: ''
        })
        resetSettingsButtons()
        setGameDeck(newGameDeck)

        
        if(selectedCharacters.repetitions) {
            setCurrentPage('repetitions')
        } else if(selectedCharacters.repetitions === false) {
            setCurrentPage('card')
        }
        
    }

    const resetSettingsButtons = () => {
        // Clean up selectedCharacters
        setSelectedCharacters({
            allCharacters: false,
            setOne: false,
            setTwo: false,
            setThree: false,
            diacritics: false,
            repetitions: false
        })
    }

    //to update Deck on the screen
    const updateDeckNumber = () => {
        let number = 0 
        if (selectedCharacters.allCharacters) {
            return 71
        }
        if(selectedCharacters.setOne) {
        number += 15
        } 
        if(selectedCharacters.setTwo) {
            number += 15
        } 
        if(selectedCharacters.setThree) {
            number += 16
        }
        if(selectedCharacters.diacritics) {
            number += 25 
        } 
        return number  
    }


    

    return (
    <>
    {renderPage()}
    </>
    );
}

export default App;