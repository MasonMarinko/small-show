import gql from 'graphql-tag';

export const QUERY_ALL_USERS = gql`
  query {
    users {
      _id
      firstName
      lastName
      twitchUserName
      adminApproved
    }
  }
`;

export const QUERY_USER = gql`
{
  user {
    firstName
    lastName
    twitchUserName
    email
    orders {
      _id
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        image
      }
    }
  }
}
`;

export const QUERY_GET_NON_APPROVED_USERS = gql`
  query {
    users(adminApproved: false, admin: false) {
      _id
      firstName
      lastName
      twitchUserName
      adminApproved
    }
  }
`; 