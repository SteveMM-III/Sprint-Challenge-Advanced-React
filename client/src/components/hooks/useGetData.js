import { useEffect } from 'react';
import axios from 'axios';

import { useLocalStorage } from './useLocalStorage';
import Axios from 'axios';

export const useGetData = ( key, initialValue ) => {
  
  const [ value, setValue ] = useLocalStorage( key, initialValue );

  useEffect( () => {
    const source = axios.CancelToken.source();

    const loadData = async () => {
      try {
        const res = await Axios
          .get( 'http://localhost:5000/api/players', { cancelToken: source.token } );
        
        setValue( res.data );
      } catch ( err ) {
        if ( Axios.isCancel( err ) ) { /* request cancelled */ }
        else { console.error( `Error: ${err}` ); }
      }
    };

    loadData();
/* 
    axios
      .get( 'http://localhost:5000/api/players' )
      .then( res => setValue( res.data ) )
      .catch( err => console.error( `Error: ${err}` ) );
*/

    console.log( 'useEffect' );

    return () => { source.cancel(); }
  }, [] ); 
  

  return [ value ];
};
