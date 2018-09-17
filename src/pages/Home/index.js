import React from 'react';
import {WithOrganizations} from '../../containers/WithOrganization';
import {OrganizationInfo} from '../../components/OrganizationInfo';
import {Wrapper, Header, Medium, LargeBold} from '../../components/Common';
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
                        return (
                            <div>
                                <OrganizationInfo>
                                    <Header>{data.organization.name}</Header>
                                    <Medium>Organization ID: {data.organization.id}</Medium>
                                    <Medium>Created at: {data.organization.created}</Medium>
                                </OrganizationInfo>
                                <LargeBold>Organization's Teams:</LargeBold>
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
