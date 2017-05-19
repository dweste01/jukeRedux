import React from 'react';

const Lyrics = ({text, setArtist, artistQuery, setSong, songQuery, handleSubmit}) => {


	const artistChange = evt => {
		setArtist(evt.target.value);
	}

	const songChange = evt => {
		setSong(evt.target.value);
	}


	return (
		<div id='lyrics'>
			<form onSubmit={handleSubmit}>
				<div>
					<input type='text' value={artistQuery} placeholder="Artist" onChange={artistChange} />
					<input type='text' value={songQuery} placeholder="Song" onChange={songChange} />
				</div>
				<pre>
					{text || "Search for lyrics above!"}
				</pre>

				<button type='submit' className="btn btn-primary">Search for Lyrics</button>
			</form>
		</div>

		)

}

export default Lyrics;
