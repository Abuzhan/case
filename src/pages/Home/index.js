import React from 'react';
import styled from 'styled-components';
import {WithOrganizations} from '../../containers/WithOrganization';
import {OrganizationInfo, H1, P1, P2} from '../../components/OrganizationInfo';
import {Wrapper} from '../../components/Wrapper';
import {TeamInfo} from '../../components/TeamInfo';

import {CONFIG} from '../../config';


class Home extends React.Component {

    renderError = (error) => {
        console.log(error);

        return (
            <div>
                <h1>Something went wrong</h1>
            </div>
        );
    };

    render() {

        return (
            <Wrapper>
                <WithOrganizations onError={this.renderError} organizationId={CONFIG.ORGANIZATION_ID}>
                    {({loading, data}) => {
                        if (loading) {
                            return <p>Data is loading</p>;
                        }
                        console.log(data)
                        return (
                            <div>
                                <OrganizationInfo>
                                    <H1>{data.organization.name}</H1>
                                    <P1>Organization ID: {data.organization.id}</P1>
                                    <P1>Created at: {data.organization.created}</P1>
                                </OrganizationInfo>
                                <P2>Organization's Teams:</P2>
                                {data.organization.teams.edges.map(team => {
                                    return (<TeamInfo key={team.node.id} teamData={team.node}></TeamInfo>)
                                })}
                            </div>
                        );
                    }}
                </WithOrganizations>
            </Wrapper>
        );
    }
}

export default Home;
