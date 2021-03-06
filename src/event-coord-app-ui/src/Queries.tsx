import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import * as React from 'react';
import ShowGridList from './Components/GridList/GridList';

// get the list of bars
export const GET_BARS = gql`
    query FindAllBusinesses($location: String!)
        {
            businesses(term:"bar", location: $location){
                id
                name
                distance
                image_url
                price
                rating
                location
            }
        }
`

type DataProps = {
    location: string,
}

// export class Data extends React.Component<Props> {
export const Data: React.SFC<DataProps> = ({ location }) => (
    <Query query={GET_BARS} variables={{ location }}>
        {({ data: {businesses}, loading, error }) => {

        if (loading || !businesses) {
            return <div>Loading ...</div>;
        }

        if (error) {
            console.log("error: ", error);
        }

        return(
            <ShowGridList businesses={businesses} />
        )
        }
        }
    </Query>            
)

// export const Data: React.FunctionComponent<{location: string}> = ({location}) => (
//     <Query query={GET_BARS} variables={{ location }}>
//         {({ data: {businesses}, loading, error }) => {

//         if (loading || !businesses) {
//             return <div>Loading ...</div>;
//         }

//         if (error) {
//             console.log("error: ", error);
//         }

//         return(
//             <ShowGridList businesses={businesses} />
//         )
//         }
//         }
//     </Query>
// );