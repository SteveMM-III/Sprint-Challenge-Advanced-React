import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';

import { useGetData } from './hooks/useGetData';

const Card = styled.div`
  max-width: 40%;  
  min-width: 400px;
  padding: 0.5rem 1rem;
  margin: 2rem auto;
  background-color: white;
  box-shadow: 0 0 12px green;
`;

const GetData = () => {
  const [ data ] = useGetData( 'PlayerData', [] );

  return (
    <div>
      {
        data.map( e =>(
          <Card key={ uuid.v4() }>
            <p>Name: { e.name }</p>
            <p>Country: { e.country }</p>
          </Card>
        ) )
      }
    </div>
  );
}

export default GetData;