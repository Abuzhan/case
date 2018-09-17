import React from 'react';
import PropTypes from 'prop-types';
import {UserInfo} from '../../components/UserInfo'
import {Wrapper, Small, SmallUnderline, MediumBold} from '../../components/Common';


export class TeamInfo extends React.Component {
	static propTypes = {
	        teamData: PropTypes.object.isRequired,
	        averageScore: PropTypes.number
	    };

	calculateAverageScore(employments){
        const employmentsArray = employments.edges;
        const averageScore = employmentsArray.reduce(function(acc, obj) {return acc + obj.node.employment.user.logicTest.edges[0].node.score}, 0)/employmentsArray.length;
        this.averageScore = averageScore;
        return averageScore;
	}    

	render() {
        const teamData = this.props.teamData;
         return (
            <Wrapper>
                <MediumBold>{teamData.name} Team</MediumBold>
	            <Wrapper>
	                <Small> Average Logic Test Score: {this.calculateAverageScore(teamData.employments)} </Small>
	                <SmallUnderline> Workers: </SmallUnderline>
	                {teamData.employments.edges.map(employment => {
	                                    return (<UserInfo key={employment.node.employment.user.id} userData={employment.node.employment.user} aveScore={this.averageScore}></UserInfo>)
	                                })}
	            </Wrapper>
            </Wrapper>
        );
    }
}

export default TeamInfo; 