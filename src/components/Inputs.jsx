import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchResponse } from '../store/actions/apiCallsActions'
import { LoadingIndicator } from './LoadingIndicator';

class Inputs extends Component {
    state={
        capShapeInput:"",
        capSurfaceInput:"",
        capColorInput:"",
        capBruisesInput:"",
        odorInput:"",
        inputText1:"Cap shape",
        inputText2:"Cap surface",
        inputText3:"Cap color",
        inputText4:"Bruises",
        inputText5:"Odor"
    }
    updateInput1=(capShapeInput,inputText1)=>{
        this.setState({
            capShapeInput:capShapeInput,
            inputText1:inputText1
        })
    }
    updateInput2=(capSurfaceInput,inputText2)=>{
        this.setState({
            capSurfaceInput:capSurfaceInput,
            inputText2:inputText2
        })
    }
    updateInput3=(capColorInput,inputText3)=>{
        this.setState({
            capColorInput:capColorInput,
            inputText3:inputText3
        })
    }
    updateInput4=(capBruisesInput,inputText4)=>{
        this.setState({
            capBruisesInput:capBruisesInput,
            inputText4:inputText4
        })
    }
    updateInput5=(odorInput,inputText5)=>{
        this.setState({
            odorInput:odorInput,
            inputText5:inputText5
        })
    }
    SubmitRequest=()=>{
        this.props.sendData(this.state.capShapeInput,this.state.capSurfaceInput,this.state.capColorInput,this.state.capBruisesInput,this.state.odorInput);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="dropdown">
                            <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.inputText1}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={()=>{this.updateInput1("b","Bell")}}>Bell</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput1("c","Conical")}}>Conical</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput1("x","Convex")}}>Convex</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput1("f","Flat")}}>Flat</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput1("k","Knobbed")}}>Knobbed</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput1("s","Sunken")}}>Sunken</p>
                            </div>
                        </div>
                        <div className="dropdown topbuffer">
                            <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.inputText2}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={()=>{this.updateInput2("f","Fibrous")}}>Fibrous</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput2("g","Grooves")}}>Grooves</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput2("y","Scaly")}}>Scaly</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput2("s","SMooth")}}>SMooth</p>
                            </div>
                        </div>
                        <div className="dropdown topbuffer">
                            <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.inputText3}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={()=>{this.updateInput3("n","Brown")}}>Brown</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput3("b","Buff")}}>Buff</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput3("c","Cinnamon")}}>Cinnamon</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput3("g","Gray")}}>Gray</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput3("r","Green")}}>Green</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput3("p","Pink")}}>Pink</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput3("u","Purple")}}>Purple</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput3("e","Red")}}>Red</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput3("w","White")}}>White</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput3("y","Yellow")}}>Yellow</p>
                            </div>
                        </div>
                        <div className="dropdown topbuffer">
                            <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.inputText4}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={()=>{this.updateInput4("t","Bruises")}}>Bruises</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput4("f","No bruises")}}>No bruises</p>
                            </div>
                        </div>
                        <div className="dropdown topbuffer">
                            <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.inputText5}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={()=>{this.updateInput5("a","Almond")}}>Almond</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput5("l","Anise")}}>Anise</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput5("c","Creosote")}}>Creosote</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput5("y","Fishy")}}>Fishy</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput5("f","Foul")}}>Foul</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput5("m","Musty")}}>Musty</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput5("p","Pungent")}}>Pungent</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput5("s","Spicy")}}>Spicy</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput5("n","None")}}>None</p>
                            </div>
                        </div>
                        <div className="topbuffer">
                            <button className="btn-lg btn-success" onClick={this.SubmitRequest}>
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <h1>Results:</h1>
                        {this.props.response.ColumnNames && this.props.response.ColumnNames.length>0 &&
                            <div>
                                <p>{this.props.response.ColumnNames[0]}: {this.props.response.Values[0][0]}</p>
                                <p>{this.props.response.ColumnNames[1]}: {this.props.response.Values[0][1]}</p>
                                <p>{this.props.response.ColumnNames[2]}: {this.props.response.Values[0][2]==='e' ? ("Edible") : ("Poisonous")}</p>
                            </div> 
                        }
                        <LoadingIndicator/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        response:state.response
    };
  };
  
  const mapStateToDispatch = dispatch => {
    return {
      sendData: (input1,input2,input3,input4,input5) => dispatch(fetchResponse(input1,input2,input3,input4,input5))
    };
};

export default connect(mapStateToProps,mapStateToDispatch)(Inputs);