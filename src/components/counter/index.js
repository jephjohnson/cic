import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { increaseCounter, decreaseCounter, indexCounter} from "../../actions/counterAction"

const mapStateToProps = (state) => ({ count: state.counter.count });
const mapDispatchToProps = (dispatch) => bindActionCreators({increaseCounter, decreaseCounter, indexCounter}, dispatch)


class Counter extends React.Component {
  
  onDotClick (index) {   
    this.props.indexCounter(index);
  }

  render () {
    const { count } = this.props;
    //console.log(this.props)
    return (    
      <div>
        <p>Count: {count}</p>
        <button onClick={this.onDotClick.bind(this, count)}>Increment</button>
      </div>
    )
  }
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

