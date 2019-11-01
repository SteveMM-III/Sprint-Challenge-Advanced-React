import { useEffect } from 'react';
import axios from 'axios';

import { useLocalStorage } from './useLocalStorage';

export const useGetData = ( key, initialValue ) => {
  
  const [ value, setValue ] = useLocalStorage( key, initialValue );

  useEffect( () => {
    axios
      .get( 'http://localhost:5000/api/players' )
      .then( res => setValue( res.data ) )
      .catch( err => console.error( `Error: ${err}` ) );
  }, [] ); 
  

  return [ value ];
};
