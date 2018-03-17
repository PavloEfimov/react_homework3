import React from 'react';
import './Cards.css';


class Cards extends React.Component { 


	render(){
		const {id, name, text, rating, img, date, innerText, onClick} = this.props;
		
		const image = `https://image.tmdb.org/t/p/w300${img}` 
		const rating_round = (Math.round(`${rating}`*10))/10;
		return(

			<div className = 'Cards'>
			  <span className='Cards__rating'>{rating_round}</span>
			  <img className='Cards__img' src={image} alt=""/>			
			  <div className="Cards__info">
			    <h2 className="Cards__title">{name}</h2>
			    <p className="Cards__descr">{text}</p>
			    <p className="Cards__release">Release date: {date}</p>
			  </div>
			  <button className="MovieCard__btn" onClick={onClick}>{innerText}</button>
			</div>
		)
	}



}

export default Cards;
