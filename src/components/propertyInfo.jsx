import React from 'react';

function PropertyInfo({ title, location, tags, rating, host }) {
    return (
        <div className="property-info">
            <div className='pi1'>
                <h1 className="property-title">{title}</h1>
                <p className="property-location">{location}</p>
                <div className="property-tags">
                    {tags && tags.map((tag, index) => (
                        <span key={index} className="property-tag">{tag}</span>
                    ))}
                </div>
            </div>
            <div>
                <div className="property-host">
                    <img src={host.picture} alt={host.name} className="host-picture" />
                    <p className="host-name">{host.name}</p>
                </div>
                <div className="property-rating">
                    {Array.from({ length: 5 }, (_, index) => (
                        <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
                    ))}
                </div>
                
            </div>
           
        </div>
    );
}

export default PropertyInfo;