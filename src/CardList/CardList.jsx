import React from 'react';
import Cards from '../Cards/Cards';
import './CardList.css';



export default class CardList extends React.Component {

	

	render(){
	const { galleryItems, handlePreferredItems } = this.props;


	return(

	<div>


		<div className = 'cardsBlock' >

			{galleryItems.map(n=>(

			<Cards key={n.id} id={n.id} name = {n.name } text = {n.text } rating = {n.rating } img = {n.img}  date = {n.date} innerText="+" onClick={() => {
          
          handlePreferredItems(n.id)
          	
          
          
        }}/>
			
			))
			}
		</div >


		
	 
	</div>
		)
	}




}