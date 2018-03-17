import React from 'react';
import Cards from '../Cards/Cards';
import './CardList.css';


export default class PreferredCardList extends React.Component {

	

	render(){
	const { preferredItems, deletePreferredItems } = this.props;	

	

return(

	<div>

		<h2>Watchlist</h2>
		<div className = 'cardsBlock' >

			{preferredItems.map(n=>(

			<Cards key={n[0].id} id={n[0].id} name = {n[0].name } text = {n[0].text } rating = {n[0].rating } img = {n[0].img}  date = {n[0].date} innerText="-" onClick={() => {
          
          deletePreferredItems(n[0].id)
          	
          
          
        }} > </Cards>  
			
			))
			}
		</div >


		
	 
	</div>
		)
	}




}