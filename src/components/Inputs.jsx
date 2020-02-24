import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchResponse } from '../store/actions/apiCallsActions'
import { LoadingIndicator } from './LoadingIndicator';

class Inputs extends Component {
    state={
        capShapeInput:"",
        capSurfaceInput:"",
        capColorInput:"",
        odorInput:"",
        gillColorInput:"",
        gillSpacingInput:"",
        habitatInput:"",
        populationInput:"",
        gillSizeInput:"",
        inputText1:"Cap shape",
        inputText2:"Cap surface",
        inputText3:"Cap color",
        inputText4:"Bruises",
        inputText5:"Odor",
        inputText6:"Gill color",
        inputText7:"Gill spacing",
        inputText8:"Habitat",
        inputText9:"Population",
        inputText10:"Gill size",
        id:null,
        isChanged:false,
        ratingsAnimation:false,
        ratingsVisibility:false,
    }
    resetId(){
        this.setState({
            id:null
        })
    }
    updateId=(id)=>{
        this.setState({
            id:id
        })
    }
    updateInput=(input,text)=>{
        if(this.state.id===1){
            this.setState({
                capShapeInput:input,
                inputText1:text
            })
        }
        if(this.state.id===2){
            this.setState({
                capSurfaceInput:input,
                inputText2:text
            })
        }
        if(this.state.id===3){
            this.setState({
                capColorInput:input,
                inputText3:text
            })
        }
        if(this.state.id===5){
            this.setState({
                odorInput:input,
                inputText5:text
            })
        }
        if(this.state.id===6){
            this.setState({
                gillColorInput:input,
                inputText6:text
            })
        }
        if(this.state.id===7){
            this.setState({
                gillSpacingInput:input,
                inputText7:text
            })
        }
        if(this.state.id===8){
            this.setState({
                habitatInput:input,
                inputText8:text
            })
        }
        if(this.state.id===9){
            this.setState({
                populationInput:input,
                inputText9:text
            })
        }
        if(this.state.id===10){
            this.setState({
                gillSizeInput:input,
                inputText10:text
            })
        }
        this.resetId();
        this.setState({
            isChanged : true
        });
    }
    SubmitRequest=()=>{
        this.props.sendData(this.state.capShapeInput,this.state.capSurfaceInput,this.state.capColorInput,this.state.odorInput,this.state.gillColorInput,this.state.gillSpacingInput,this.state.habitatInput,
            this.state.populationInput,this.state.gillSizeInput);
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
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <p>Cap shape</p>
                            </div>
                            <div className="col">
                            <div className="dropdown">
                                <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onFocus={()=>{this.updateId(1)}}>
                                    {this.state.inputText1}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <p className="dropdown-item" onClick={()=>{this.updateInput("b","Bell")}}>Bell</p>
                                    <p className="dropdown-item" onClick={()=>{this.updateInput("c","Conical")}}>Conical</p>
                                    <p className="dropdown-item" onClick={()=>{this.updateInput("x","Convex")}}>Convex</p>
                                    <p className="dropdown-item" onClick={()=>{this.updateInput("f","Flat")}}>Flat</p>
                                    <p className="dropdown-item" onClick={()=>{this.updateInput("k","Knobbed")}}>Knobbed</p>
                                    <p className="dropdown-item" onClick={()=>{this.updateInput("s","Sunken")}}>Sunken</p>
                                    <p className="dropdown-item" onClick={()=>{this.updateInput("","Don't know")}}>Don't know</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Cap surface</p>
                            </div>
                            <div className="col">
                            <div className="dropdown">
                                <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onFocus={()=>{this.updateId(2)}}>
                                    {this.state.inputText2}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <p className="dropdown-item" onClick={()=>{this.updateInput("f","Fibrous")}}>Fibrous</p>
                                    <p className="dropdown-item" onClick={()=>{this.updateInput("g","Grooves")}}>Grooves</p>
                                    <p className="dropdown-item" onClick={()=>{this.updateInput("y","Scaly")}}>Scaly</p>
                                    <p className="dropdown-item" onClick={()=>{this.updateInput("s","Smooth")}}>Smooth</p>
                                    <p className="dropdown-item" onClick={()=>{this.updateInput("","Don't know")}}>Don't know</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Cap color</p>
                            </div>
                            <div className="col">
                        <div className="dropdown">
                            <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onFocus={()=>{this.updateId(3)}}>
                                {this.state.inputText3}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={()=>{this.updateInput("n","Brown")}}>Brown</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("b","Buff")}}>Buff</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("c","Cinnamon")}}>Cinnamon</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("g","Gray")}}>Gray</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("r","Green")}}>Green</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("p","Pink")}}>Pink</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("u","Purple")}}>Purple</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("e","Red")}}>Red</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("w","White")}}>White</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("y","Yellow")}}>Yellow</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("","Don't know")}}>Don't know</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Odor</p>
                            </div>
                            <div className="col">
                        <div className="dropdown">
                            <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onFocus={()=>{this.updateId(5)}}>
                                {this.state.inputText5}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={()=>{this.updateInput("a","Almond")}}>Almond</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("l","Anise")}}>Anise</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("c","Creosote")}}>Creosote</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("y","Fishy")}}>Fishy</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("f","Foul")}}>Foul</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("m","Musty")}}>Musty</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("p","Pungent")}}>Pungent</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("s","Spicy")}}>Spicy</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("n","None")}}>None</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("","Don't know")}}>Don't know</p>
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
                            <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onFocus={()=>{this.updateId(6)}}>
                                {this.state.inputText6}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={()=>{this.updateInput("k","Black")}}>Black</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("n","Brown")}}>Brown</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("b","Buff")}}>Buff</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("h","Chocolate")}}>Chocolate</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("g","Gray")}}>Gray</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("r","Green")}}>Green</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("o","Orange")}}>Orange</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("p","Pink")}}>Pink</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("u","Purple")}}>Purple</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("e","Red")}}>Red</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("w","White")}}>White</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("y","Yellow")}}>Yellow</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("","Don't know")}}>Don't know</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Gill spacing</p>
                            </div>
                            <div className="col">
                        <div className="dropdown">
                            <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onFocus={()=>{this.updateId(7)}}>
                                {this.state.inputText7}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={()=>{this.updateInput("c","Close")}}>Close</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("w","Crowded")}}>Crowded</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("d","Distant")}}>Distant</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("","Don't know")}}>Don't know</p>
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
                            <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onFocus={()=>{this.updateId(10)}}>
                                {this.state.inputText10}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={()=>{this.updateInput("b","Broad")}}>Broad</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("n","Narrow")}}>Narrow</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("","Don't know")}}>Don't know</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Habitat</p>
                            </div>
                            <div className="col">
                        <div className="dropdown">
                            <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onFocus={()=>{this.updateId(8)}}>
                                {this.state.inputText8}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={()=>{this.updateInput("g","Grasses")}}>Grasses</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("l","Leaves")}}>Leaves</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("m","Meadows")}}>Meadows</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("p","Paths")}}>Paths</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("u","Urban")}}>Urban</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("w","Waste")}}>Waste</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("d","Woods")}}>Woods</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("","Don't know")}}>Don't know</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Population</p>
                            </div>
                            <div className="col">
                        <div className="dropdown">
                            <button className="btn-lg btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onFocus={()=>{this.updateId(9)}}>
                                {this.state.inputText9}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={()=>{this.updateInput("a","Abundant")}}>Abundant</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("c","Clustered")}}>Clustered</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("n","Numerous")}}>Numerous</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("s","Scattered")}}>Scattered</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("v","Several")}}>Several</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("y","Solitary")}}>Solitary</p>
                                <p className="dropdown-item" onClick={()=>{this.updateInput("","Don't know")}}>Don't know</p>
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
                    <div className={"col"}>
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
      sendData: (input1,input2,input3,input5,input6,input7,input8,input9,input10) => dispatch(fetchResponse(input1,input2,input3,input5,input6,input7,input8,input9,input10))
    };
};

export default connect(mapStateToProps,mapStateToDispatch)(Inputs);