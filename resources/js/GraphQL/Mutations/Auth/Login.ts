import {gql} from '@apollo/client';

const loginQuery = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $passwrod) {
            token
            message
            user {
                id
                name
                email
            }
        }
    }
`;

export default loginQuery;
