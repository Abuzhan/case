import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {UserInfo} from '../../components/UserInfo'
import {Wrapper} from '../../components/Wrapper';
import {OrganizationInfo, P1b, P2, P3, P3u} from '../../components/OrganizationInfo';

export class TeamInfo extends React.Component {
	static propTypes = {
	        teamData: PropTypes.object.isRequired,
	        ave: PropTypes.number
	    };

	calculateAverageScore(employments){
        var sumOfScores = 0;
        for (let i = 0; i < employments.edges.length; i++) {
            const {employment} = employments.edges[i].node;
			sumOfScores += employment.user.logicTest.edges[0].node.score;
        }
        var averageScore = sumOfScores / employments.edges.length;
        this.ave = averageScore
        return averageScore;
	}    

	render() {
        let teamData = this.props.teamData;
         return (
            <Wrapper>
                <P1b>{teamData.name} Team</P1b>
	            <Wrapper>
	                <P3> Average Logic Test Score: {this.calculateAverageScore(teamData.employments)} </P3>
	                <P3u> Workers: </P3u>
	                {teamData.employments.edges.map(employment => {
	                                    return (<UserInfo key={employment.node.employment.user.id} userData={employment.node.employment.user} aveScore={this.ave}></UserInfo>)
	                                })}
	            </Wrapper>
            </Wrapper>
        );
    }
}

export default TeamInfo; 