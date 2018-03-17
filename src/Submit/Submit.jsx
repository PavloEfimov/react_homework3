import React from 'react';
import './Submit.css';

class Submit extends React.Component{

state = {
    inputTitleValue: '',
    inputDescrValue: '',
    ratingValue:'',
    chips:[]
    
  };

  _handleInputTitleChange = evt => {
    const value = evt.target.value;

    this.setState({
      inputTitleValue: value
    });
  };

  _handleInputDescrChange = evt => {
    const value = evt.target.value;

    this.setState({
      inputDescrValue: value
    });
  };

  _chipsChange = evt => {
    const value = evt.target.value;
    

    this.setState({
      chips: [...this.state.chips, value]
    });


  };

  _handleSubmit = evt => {
    evt.preventDefault();

    this.props.onFormSubmit(this.state.inputTitleValue, this.state.inputDescrValue, this.state.ratingValue, this.state.chips);

    this.setState({
      inputTitleValue: '',
      inputDescrValue: '',
      ratingValue: ''
    });
  };

  _lll = evt => {
    const value = evt.target.value;
    this.setState({
    ratingValue: value
    });
    }


	render(){
	const { inputTitleValue, inputDescrValue, ratingValue, chips} = this.state;
		return(

			<form className='Submit' onSubmit={this._handleSubmit}>
			<label className = 'SubmitForm'>
			<p>Title</p>
			<input className='Title' type="text" value={inputTitleValue} 
			onChange={this._handleInputTitleChange}/>
			</label>
			<label className = 'SubmitForm'>
			<p>Description</p>
			<textarea className='Description' type="text" value={inputDescrValue} onChange={this._handleInputDescrChange}></textarea>
			</label>
			<label className = 'SubmitForm'>
			<p>Rating</p>
			<select onChange={this._lll} value = {ratingValue}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
			</select>
			</label>
			<div className='chips' onChange={this._chipsChange} value = {chips}>
			<label><input type="checkbox" value = 'drama' />'drama'</label>
			<label><input type="checkbox" value = 'action' />'action'</label>
			<label><input type="checkbox" value = 'comedy' />'comedy'</label>
			</div>
			<button className='submit'>SUBMIT</button>
			</form>

		)
	}
}

export default Submit;