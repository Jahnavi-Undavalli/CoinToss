import {Component} from 'react'

import './index.css'

class CoinToss extends Component{
state={
    heads:0,
    tails:0,
    randomNumber:0,
    total:0,
}


const imgUrl = randomNumber
    ? 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

getRandomNumber = () => Math.ceil(Math.random())

onGenerate=()=>{
  const randomNumber = this.getRandomNumber()

  if(randomNumber==0){
    this.setState(prevState => ({heads: prevState.count + randomNumber}))
  }
  else{
 this.setState(prevState => ({tails: prevState.count + randomNumber}))
  }

this.setState(prevState => ({total: prevState.count + randomNumber}))
}


render(){
    const{heads,tails,total}=this.state 
    return(
        <div className="bg-container">
            <div className="inner-Container">
                <h1 className="heading">
                    Coin Toss Game
                </h1>
                <p className="paragraph">
                    Heads (or) Tails
                </p>
                <img src={this.imgUrl} className="img"/>
            <button className="button" type="button"  onClick={this.onGenerate}>Toss Coin</button>
            <p className="paragraph">Total: {total}</p>
            <p className="paragraph">Heads: {heads}</p>
            <p className="paragraph">Tails: {tails}</p>
            </div>
        </div>
    )
}

}
export default CoinToss
