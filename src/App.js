import React, { Component } from 'react';
import './App.css';
import Deck from '../src/deck'
import _ from 'lodash'

const deck = ("Deck", Deck)

const cardBack = <img src={process.env.PUBLIC_URL + "/images/cardBack.jpg"} style={{width: 200, height: 300}}/>
let currentDeck = deck
let cardsDealt = []

class App extends Component {
  constructor() {  // needed to set the initial blank state.
    super()
    this.state = { cards: [] }
  }


  updateCard(card) {  // updates the state of the card once changes are made
      const cards = this.state.cards
      cards.push(card)
      this.setState(Object.assign(this.state, {cards: cards}))
    }


  reset() {
    currentDeck = deck
    cardsDealt = []
    this.setState(Object.assign(this.state, {}))
  }


  render() {

    function drawCard () {
      // shuffle the currentDeck of cards, pop the top card of the deck off, and assign that card
      let card = _.shuffle(currentDeck).pop()
      // update the currentDeck
      cardsDealt.push(card)
      // filter card out of currentDeck
      currentDeck = currentDeck.filter(function(val) {
        return val.name !== card.name})
      this.updateCard(card) // actully update state
      console.log(cardsDealt);
    }


      // populate array with one card at the CLICK OF A BUTTTTTTON
    let drawButton = <button className="drawButton" onClick={drawCard.bind(this)} > I am a button </button>



      // if card0 is defined, display card image, otherwise display cardback
    let card0 = cardsDealt[0] ?  <img src={process.env.PUBLIC_URL + cardsDealt[0].image} style={{width: 200, height: 300}}/> : cardBack

    let card1 = cardsDealt[1] ?  <img src={process.env.PUBLIC_URL + cardsDealt[1].image} style={{width: 200, height: 300}}/> : cardBack

    let card2 = cardsDealt[2] ?  <img src={process.env.PUBLIC_URL + cardsDealt[2].image} style={{width: 200, height: 300}}/> : cardBack



    // let fortune = <div> { cardsDealt ? cardsDealt.map(function(val){
    //   return val.description
    // }).join("") : "" } </div>

    // let weirdArray = ["apples", "puppies", "rainbows"]
    //
    // let weirdDiv = weirdArray.join('\n')

    // description of the cards
    let fortune0 = cardsDealt[0] ? <div>{cardsDealt[0].description}</div> : ""
    let fortune1 = cardsDealt[1] ? <div>{cardsDealt[1].description}</div> : ""
    let fortune2 = cardsDealt[2] ? <div>{cardsDealt[2].description}</div> : ""




     // reset the state
    let newGame = <button className="newGame" onClick={() => this.reset()}>New Game</button>



    return (

      <div className="table">
        {drawButton}
        {newGame}
        {card0}
        {card1}
        {card2}
        {fortune0}
        {fortune1}
        {fortune2}
      </div>




      // {card2}
      // {card3}
      // {fortune}



    );
  }
}

export default App;
