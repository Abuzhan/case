import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Wrapper} from '../../components/Wrapper';
import {OrganizationInfo, H1, P1, P1b, P2, P3, P3u, P3r, P3g} from '../../components/OrganizationInfo';

export class UserInfo extends React.Component {
	static propTypes = {
	        userData: PropTypes.object.isRequired,
	        aveScore: PropTypes.number.isRequired
	    };

	calculateDifference(score, ave){
		
		var diff = (score/ave-1)*100
		if (diff < 0) {
			return (
				<P3r> The test score is {diff}% lower than average </P3r>
			)
		}
		else {
			return (
				<P3g> The test score is {diff}% higher than average </P3g>
			)
		}
		return 0;
	}

	render() {
        let userData = this.props.userData;
        let aveScore = this.props.aveScore;
        return (
            <Wrapper>
                <P1b>{userData.firstName} {userData.lastName}</P1b>
                <P3u>Logic test score - {userData.logicTest.edges[0].node.score} </P3u>
                {this.calculateDifference(userData.logicTest.edges[0].node.score, aveScore)}
            </Wrapper>
    	);
	}
}

 export default UserInfo; 