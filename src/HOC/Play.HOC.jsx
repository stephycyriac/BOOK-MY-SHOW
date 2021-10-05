import React from 'react'
import { Route } from 'react-router';

import PlaysLayout from '../layouts/Plays.layout';
const PlayHOC = ({component:Component, ...rest}) => {
    return (
        <>
             <Route
    {...rest}
    component = {(props)=>(
        <PlaysLayout>
            <Component {...props}/> 
            </PlaysLayout> 
    )
}
/>
</>
    );
};
export default PlayHOC ;
