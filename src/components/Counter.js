import react,{Component} from 'react'
import "../App.css"

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            counter : 0 
        };
        this.addOne = this.addOne.bind(this);
        this.minueOne = this.minueOne.bind(this);
        this.Clear = this.Clear.bind(this)
    }
    addOne(){
        this.setState (number => {
            return{
                counter : number.counter + 1
            }
        })
    }
    minueOne(){
        this.setState(number => {
            return{
                counter : number.counter -1
            }
        })
    }
    Clear(){
        this.setState(number => {
            return {
                counter : 0
            }
        })
    }
    render(){
        return(
            <div>
                <h1 id =  "header1">Your Score : {this.state.counter}</h1>
                <button onClick = {this.addOne} className = 'button'>add one </button>
                <br></br>
                <button onClick = {this.minueOne} className = 'button'>minue one</button>
                <br></br>
                <button onClick = {this.Clear} className = 'button'>Clear</button>

            </div>
        )
    }
    
}

export default Counter ;