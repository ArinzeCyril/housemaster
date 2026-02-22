import React from 'react';

const PropertyCard = ({ property }) => (
    <div className="prptes-card">
        <div className='prptes-img'>
            <img src={property.img} alt={property.title} />
            {property.featured && <p className='featured'>Featured</p>}
            <p className={property.transaction === 'rent' ? 'for-rent' : 'for-sale'}>
                For {property.transaction === 'rent' ? 'Rent' : 'Sale'}
            </p>
            <i className='img-bk-icon fa-regular fa-less-than'></i>
            <i className='img-fr-icon fa-regular fa-greater-than'></i>
        </div>
        <div className='prptes-card-detail'>
            <div className='prptes-detail-text'>
                <h3>{property.title}</h3>
                <p>{property.location}</p>
                <div className='prptes-stats'>
                    <div className='stats-item'>
                        <i className="fa-solid fa-bed"></i>
                        <p>{property.stats.beds}</p>
                    </div>
                    <div className='stats-item'>
                        <i className="fa-solid fa-bath"></i>
                        <p>{property.stats.baths}</p>
                    </div>
                    <div className='stats-item'>
                        <i className="fa-solid fa-ruler-combined"></i>
                        <p>{property.stats.sqft}</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='prptes-card-foot'>
                <p>${property.price.toLocaleString()}{property.transaction === 'rent' ? '/mo' : ''}</p>
                <div className='prptes-foot-icn'>
                    <i className="fa-regular fa-up-right-and-down-left-from-center pointer"></i>
                    <i className="fa-regular fa-heart pointer"></i>
                    <i className="fa-regular fa-circle-plus pointer"></i>
                </div>
            </div>
        </div>
    </div>
);

export default function Properties({ properties }) {
    const rentProperties = properties.filter(p => p.transaction === 'rent');
    const saleProperties = properties.filter(p => p.transaction === 'buy');

    return (
        <>
            <div id='properties' className="prptes-rent">
                <h1>Properties for Rent</h1>
                <div className='prptes'>
                    {rentProperties.length > 0 ? (
                        rentProperties.map(property => (
                            <PropertyCard key={property.id} property={property} />
                        ))
                    ) : (
                        <p style={{ textAlign: 'center', width: '100%', gridColumn: '1/-1' }}>No rental properties found matching your search.</p>
                    )}
                </div>
            </div>
            <hr />
            <div className="prptes-sale">
                <h1>Properties for Sale</h1>
                <div className='prptes'>
                    {saleProperties.length > 0 ? (
                        saleProperties.map(property => (
                            <PropertyCard key={property.id} property={property} />
                        ))
                    ) : (
                        <p style={{ textAlign: 'center', width: '100%', gridColumn: '1/-1' }}>No properties for sale found matching your search.</p>
                    )}
                </div>
            </div>
        </>
    );
}
