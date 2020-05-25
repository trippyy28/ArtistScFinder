import React from 'react';
import '../containers/App.css';
const Card = ({name , email , id }) =>{
	return(
		<div className ='bg-light-yellow dib br3 pa3 ma2 grow tc'>
		<img alt='monsters' src={`https://robohash.org/${id}?set=set2`}/>
		<div>
		<h2>{name}</h2>
		<p>{email}</p>
		<p id= 'font' className = 'br3 '>Dj&Producer</p>
		</div>
		</div>
		)
}

	export default Card;