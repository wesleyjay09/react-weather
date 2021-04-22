import React from 'react';
import ListItem from './ListItem'


function List(props) {
    return (
        <div className='list'>
            
            
           
            <ListItem  recommendedVideos={props.recommendedVideos}/>
           
        </div>
    )
}

export default List;