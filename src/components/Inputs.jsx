import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchResponse } from '../store/actions/apiCallsActions'
import { LoadingIndicator } from './LoadingIndicator';

class Inputs extends Component {
    state={
        ringTypeInput:"",
        odorInput:"",
        sporePrintColorinput: "",
        stalkSurfaceAboveRingInput: "",
        stalkSurfaceBelowRingInput: "",
        stalkColorAboveRingInput: "",
        stalkColorBelowRingInput: "",
        gillColorInput:"",
        gillSizeInput:"",
        odorInputDefault:"Odor",
        sporePrintColorinputDefault: "Spore print color",
        stalkSurfaceAboveRingInputDefault: "Stalk Surface Above Ring",
        stalkSurfaceBelowRingInputDefault: "Stalk Surface Below Ring",
        stalkColorAboveRingInputDefault: "Stalk Color Above Ring",
        stalkColorBelowRingInputDefault: "Stalk Color Below Ring",
        gillColorInputDefault:"Gill color",
        ringTypeInputDefault:"Ring type",
        gillSizeInputDefault:"Gill size",
        isChanged:false,
        ratingsAnimation:false,
        ratingsVisibility:false,
    }
    updateInput=(inputId, input, text)=>{
        this.setState({
            [inputId]:input,
            [`${inputId}Default`]:text
        })
        this.setState({
            isChanged : true
        });
    }
    SubmitRequest=()=>{
        this.props.sendData(
            this.state.odorInput,
            this.state.sporePrintColorinput,
            this.state.gillColorInput,
            this.state.ringTypeInput,
            this.state.stalkSurfaceAboveRingInput,
            this.state.stalkSurfaceBelowRingInput,
            this.state.stalkColorAboveRingInput,
            this.state.stalkSurfaceBelowRingInput,
            this.state.gillSizeInput
        );
    }
    ratings=()=>{
        setTimeout(()=>{
            this.setState({
                ratingsAnimation:true,
                ratingsVisibility:true
            })
        },100);
    }
    render() {
        const odorInputs = [
            {input: "a", text: "Almond"},
            {input: "l", text: "Anise"},
            {input: "c", text: "Creosote"},
            {input: "y", text: "Fishy"},
            {input: "f", text: "Foul"},
            {input: "m", text: "Musty"},
            {input: "p", text: "Pungent"},
            {input: "s", text: "Spicy"},
            {input: "n", text: "None"},
            {input: "", text: "Don't know"},
        ];
        const sporePrintColorInputs=[
            {input: "k", text: "Black"},
            {input: "n", text: "Brown"},
            {input: "b", text: "Buff"},
            {input: "h", text: "Chocolate"},
            {input: "r", text: "Green"},
            {input: "o", text: "Orange"},
            {input: "u", text: "Purple"},
            {input: "w", text: "White"},
            {input: "y", text: "Yellow"},
            {input: "", text: "Don't know"},
        ];
        const gillColorInputs=[
            {input: "k", text: "Black"},
            {input: "n", text: "Brown"},
            {input: "b", text: "Buff"},
            {input: "h", text: "Chocolate"},
            {input: "g", text: "Green"},
            {input: "r", text: "Orange"},
            {input: "o", text: "Purple"},
            {input: "p", text: "White"},
            {input: "u", text: "Yellow"},
            {input: "e", text: "Orange"},
            {input: "w", text: "Purple"},
            {input: "y", text: "White"},
            {input: "", text: "Don't know"},
        ];
        const ringTypeInputs= [
            {input: "c", text: "Cobwebby"},
            {input: "e", text: "Evanescent"},
            {input: "f", text: "Flaring"},
            {input: "l", text: "Large"},
            {input: "n", text: "None"},
            {input: "p", text: "Pendant"},
            {input: "s", text: "Sheathing"},
            {input: "z", text: "Zone"},
            {input: "", text: "Don't know"},
        ];
        const stalkSurfaceAboveRingInputs= [
            {input: "f", text: "Fibrous"},
            {input: "y", text: "Scaly"},
            {input: "k", text: "Silky"},
            {input: "s", text: "Smooth"},
            {input: "", text: "Don't know"},
        ];
        const stalkSurfaceBelowRingInputs= [
            {input: "f", text: "Fibrous"},
            {input: "y", text: "Scaly"},
            {input: "k", text: "Silky"},
            {input: "s", text: "Smooth"},
            {input: "", text: "Don't know"},
        ];
        const stalkColorAboveRingInputs= [
            {input: "n", text: "Brown"},
            {input: "b", text: "Buff"},
            {input: "c", text: "Cinnamon"},
            {input: "g", text: "Gray"},
            {input: "o", text: "Orange"},
            {input: "p", text: "Pink"},
            {input: "e", text: "Red"},
            {input: "w", text: "White"},
            {input: "y", text: "Yellow"},
            {input: "", text: "Don't know"},
        ];
        const stalkColorBelowRingInputs= [
            {input: "n", text: "Brown"},
            {input: "b", text: "Buff"},
            {input: "c", text: "Cinnamon"},
            {input: "g", text: "Gray"},
            {input: "o", text: "Orange"},
            {input: "p", text: "Pink"},
            {input: "e", text: "Red"},
            {input: "w", text: "White"},
            {input: "y", text: "Yellow"},
            {input: "", text: "Don't know"},
        ];
        const gillSizeInputs= [
            {input: "b", text: "Broad"},
            {input: "n", text: "Narrow"},
            {input: "", text: "Don't know"},
        ];
        return (
            <div className="container" style={{ marginLeft: "0", marginRight: "0" }}>
                <div className="row">
                    <div className="col-9">
                        <div className="row-12">
                            <div className="row">
                                <div className="col">
                                    <p>Odor</p>
                                </div>
                                <div className="col">
                                    <div className="dropdown">
                                        <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {this.state.odorInputDefault}
                                        </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        {odorInputs.map(input => {return <p className="dropdown-item" onClick={()=>{this.updateInput("odorInput", input.input, input.text)}}>{input.text}</p>})}
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>Spore print color</p>
                                </div>
                                <div className="col">
                                    <div className="dropdown">
                                        <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {this.state.sporePrintColorinputDefault}
                                        </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        {sporePrintColorInputs.map(input => {return <p className="dropdown-item" onClick={()=>{this.updateInput("sporePrintColorinput", input.input, input.text)}}>{input.text}</p>})}
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>Gill color</p>
                                </div>
                                <div className="col">
                                <div className="dropdown">
                                    <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {this.state.gillColorInputDefault}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        {gillColorInputs.map(input => {return <p className="dropdown-item" onClick={()=>{this.updateInput("gillColorInput", input.input, input.text)}}>{input.text}</p>})}
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>Ring type</p>
                                </div>
                                <div className="col">
                                <div className="dropdown">
                                    <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {this.state.ringTypeInputDefault}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        {ringTypeInputs.map(input => {return <p className="dropdown-item" onClick={()=>{this.updateInput("ringTypeInput", input.input, input.text)}}>{input.text}</p>})}
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>Stalk surface abowe ring</p>
                                </div>
                                <div className="col">
                                <div className="dropdown">
                                    <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {this.state.stalkSurfaceAboveRingInputDefault}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        {stalkSurfaceAboveRingInputs.map(input => {return <p className="dropdown-item" onClick={()=>{this.updateInput("stalkSurfaceAboveRingInput", input.input, input.text)}}>{input.text}</p>})}
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>Stalk surface below ring</p>
                                </div>
                                <div className="col">
                                <div className="dropdown">
                                    <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {this.state.stalkSurfaceBelowRingInputDefault}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        {stalkSurfaceBelowRingInputs.map(input => {return <p className="dropdown-item" onClick={()=>{this.updateInput("stalkSurfaceBelowRingInput", input.input, input.text)}}>{input.text}</p>})}
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>Stalk color above ring</p>
                                </div>
                                <div className="col">
                                <div className="dropdown">
                                    <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {this.state.stalkColorAboveRingInputDefault}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        {stalkColorAboveRingInputs.map(input => {return <p className="dropdown-item" onClick={()=>{this.updateInput("stalkColorAboveRingInput", input.input, input.text)}}>{input.text}</p>})}
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>Stalk color below ring</p>
                                </div>
                                <div className="col">
                                <div className="dropdown">
                                    <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {this.state.stalkColorBelowRingInputDefault}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        {stalkColorBelowRingInputs.map(input => {return <p className="dropdown-item" onClick={()=>{this.updateInput("stalkColorBelowRingInput", input.input, input.text)}}>{input.text}</p>})}
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>Gill size</p>
                                </div>
                                <div className="col">
                            <div className="dropdown">
                                <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.state.gillSizeInputDefault}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {gillSizeInputs.map(input => {return <p className="dropdown-item" onClick={()=>{this.updateInput("gillSizeInput", input.input, input.text)}}>{input.text}</p>})}
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="topbuffer">
                                <button className="btn-lg btn-success" disabled={this.state.isChanged ? false : true} onClick={this.SubmitRequest}>
                                    Submit
                                </button>
                            </div>
                            </div>
                        </div>
                    <div className="col-3">
                        <h1 className={(this.state.ratingsVisibility ? ("") : (" invisible"))}>Results:</h1>
                        {this.props.response.ColumnNames && this.props.response.ColumnNames.length>0 &&
                            <div>
                                <p className={(this.state.ratingsVisibility ? ("") : (" invisible"))}>Your mushrom is: {this.props.response.Values[0][2]==='e' ? ("Edible") : ("Poisonous")}</p>
                                {this.props.response.Values[0] && this.props.response.Values[0].length>0 && this.props.response.Values[0].map((rating,i)=>{
                                    if(rating !== "e" && rating !== 'p'){
                                        return(
                                            <li ratings={this.ratings()}
                                            style={{'--width':rating * 100+'%'}}
                                            className={"list-group-item text-capitalize p-2"+(this.state.ratingsAnimation ? (" animation"): ("")) + (this.state.ratingsVisibility ? ("") : (" invisible"))}
                                            key={rating}
                                            id={i}>
                                                {rating*100}%
                                            </li>
                                        )
                                    }
                                    else{
                                        return null;
                                    }
                                })}
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
      sendData: (odor,sporePrintColor,gillColor,ringType,stalkSurfaceAbove,stalkSurfaceBelow,stalkColorAbove,stalkColorBelow,gillSize) => dispatch(fetchResponse(odor,sporePrintColor,gillColor,ringType,stalkSurfaceAbove,stalkSurfaceBelow,stalkColorAbove,stalkColorBelow,gillSize))
    };
};

export default connect(mapStateToProps,mapStateToDispatch)(Inputs);