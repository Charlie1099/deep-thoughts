import { gql } from "@apollo/client"

export const QUERY_THOUGHTS = gql`
query thoughts($username: String) {
    thoughts(username: $username) {
        _id
        thoughtText
        createdAt
        username
        reactionCount
        reation {
            _id
            createdAt
            username
            reationBody
        }
    }
}
`;
