import React from 'react';

const Card = (props) =>  {
	return (
		//<h1>Robofriends</h1> villa. Annars er verið að skila meira en einu div-i
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${props.id}?200x200`}/>
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Card;