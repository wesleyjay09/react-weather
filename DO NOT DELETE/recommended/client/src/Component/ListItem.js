import React, { Component } from 'react'

class ListItem extends Component {
    render() {
        return(
            <div>
                {this.props.recommendedVideos.map(recommendedVideos => {
                    return(
                        <div key={recommendedVideos.id} className='listItem'>
                            <img id='thumbnail' src={recommendedVideos.thumbnail}></img>
                            <div className='stats'>
                                <div id='title'>{recommendedVideos.title}</div>
                                <div id='publisher'>{recommendedVideos.publisher}</div>
                                <div id='totalViews'>{recommendedVideos.totalviews} views</div>
                                <div id='createdOn'>{recommendedVideos.createdon} ago</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ListItem