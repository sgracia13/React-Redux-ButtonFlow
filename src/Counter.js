import React,{Component} from 'react';
import { connect } from 'react-redux'

class Counter extends Component{



    render() {
        return(
            <div>
                <h1 className="number">{this.props.ctr}</h1>
                <button className='button'onClick={() => this.props.onIncrementCounter()}> Increase </button>
                <button className='button'onClick={() => this.props.onDecrementCounter()}>Decrease </button>
                <button className='button'onClick={() => this.props.onAddTen()}>Add 10</button>
                <button className='button'onClick={() => this.props.onSubtractTen()}>Subtract 10</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        ctr:state.counter//this.props.ctr
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

        onIncrementCounter: () => dispatch ({type: 'INC_COUNTER'}),
        onDecrementCounter: () => dispatch ({type:'DEC_COUNTER'}),
        onAddTen:() => dispatch ({type:'ADD_TEN'}),
        onSubtractTen:() => dispatch ({type:'SUBTRACT_TEN'})

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)