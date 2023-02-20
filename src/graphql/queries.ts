import { gql } from '@apollo/client';

export const GET_COMPANY = gql`
  query getCompany {
    company {
      ceo
      cto
      name
    }
  }
`;
