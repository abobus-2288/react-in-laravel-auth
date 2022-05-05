import {gql} from '@apollo/client';

const registerMutationGql = gql`
    mutation register($name: String!, $email: String, $password: String!) {
        register {
            user {
                id
                name
                email
            }
            message
            status
        }
    }
`;

export default registerMutationGql;
