import React, { Component } from 'react'

export class NewsUpdate extends Component {
    render() {
        let { title, description, imageurl, Newsurl } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "25rem;" }}>
                    <img src={imageurl} className="card-img-top" alt="..." height="200px" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={Newsurl} className="btn btn-primary">Read</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsUpdate
