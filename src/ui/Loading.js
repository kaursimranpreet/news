import React, { Component } from "react";
import ReactLoading from 'react-loading';

export default class Loading extends Component {
	render() {
		return (
			<div
			    style={{
                    height: "-webkit-fill-available",
                    textAlign: 'center',
                    margin: 'auto',
                    width: '10%',
    			    }}
			>
				    <ReactLoading type={'balls'} color={'#000000'} height={100} width={100} />
			</div>
		);
	}
}
