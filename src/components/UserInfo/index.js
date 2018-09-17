import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper, MediumBold, SmallUnderline, SmallRed, SmallGreen} from '../../components/Common';


export class UserInfo extends React.Component {
	static propTypes = {
	        userData: PropTypes.object.isRequired,
	        aveScore: PropTypes.number.isRequired
	    };

	calculateDifference(score, ave){
		var diff = (score/ave-1)*100
		if (diff < 0) {
			return (
				<SmallRed> The test score is {diff}% lower than average </SmallRed>
			)
		}
		return (
			<SmallGreen> The test score is {diff}% higher than average </SmallGreen>
		)
	}

	render() {
        const userData = this.props.userData;
        const aveScore = this.props.aveScore;
        return (
            <Wrapper>
                <MediumBold>{userData.firstName} {userData.lastName}</MediumBold>
                <SmallUnderline>Logic test score - {userData.logicTest.edges[0].node.score} </SmallUnderline>
                {this.calculateDifference(userData.logicTest.edges[0].node.score, aveScore)}
            </Wrapper>
    	);
	}
}

 export default UserInfo; 