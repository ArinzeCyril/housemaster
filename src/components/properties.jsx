import React, { useState } from 'react';
import PropertyModal from './propertyModal';

const PropertyCard = ({ property, onFavourite, isFavourite, onCompare, isInCompare, onExpand }) => (
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
                        <p>{property.stats.beds} beds</p>
                    </div>
                    <div className='stats-item'>
                        <i className="fa-solid fa-bath"></i>
                        <p>{property.stats.baths} baths</p>
                    </div>
                    <div className='stats-item'>
                        <i className="fa-solid fa-ruler-combined"></i>
                        <p>{property.stats.sqft.toLocaleString()} sqft</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='prptes-card-foot'>
                <p>${property.price.toLocaleString()}{property.transaction === 'rent' ? '/mo' : ''}</p>
                <div className='prptes-foot-icn'>
                    <i
                        className="fa-regular fa-up-right-and-down-left-from-center pointer prop-icon"
                        title="View Details"
                        onClick={() => onExpand(property)}
                    ></i>
                    <i
                        className={`${isFavourite ? 'fa-solid' : 'fa-regular'} fa-heart pointer prop-icon ${isFavourite ? 'icon-active' : ''}`}
                        title={isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
                        onClick={() => onFavourite(property.id)}
                    ></i>
                    <i
                        className={`fa-regular fa-circle-plus pointer prop-icon ${isInCompare ? 'icon-active' : ''}`}
                        title={isInCompare ? 'Remove from Compare' : 'Add to Compare'}
                        onClick={() => onCompare(property)}
                    ></i>
                </div>
            </div>
        </div>
    </div>
);

const CompareBar = ({ compareList, onRemove, onClear }) => {
    if (compareList.length === 0) return null;
    return (
        <div className="compare-bar">
            <span className="compare-bar-title">Compare ({compareList.length}/3):</span>
            {compareList.map(p => (
                <div key={p.id} className="compare-chip">
                    <span>{p.title}</span>
                    <button className="compare-chip-remove pointer" onClick={() => onRemove(p.id)}>✕</button>
                </div>
            ))}
            <button className="compare-clear pointer" onClick={onClear}>Clear All</button>
        </div>
    );
};

export default function Properties({ properties }) {
    const [favourites, setFavourites] = useState([]);
    const [compareList, setCompareList] = useState([]);
    const [expandedProperty, setExpandedProperty] = useState(null);

    const rentProperties = properties.filter(p => p.transaction === 'rent');
    const saleProperties = properties.filter(p => p.transaction === 'buy');

    const handleFavourite = (id) => {
        setFavourites(prev =>
            prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
        );
    };

    const handleCompare = (property) => {
        setCompareList(prev => {
            if (prev.find(p => p.id === property.id)) {
                return prev.filter(p => p.id !== property.id);
            }
            if (prev.length >= 3) {
                alert('You can only compare up to 3 properties at a time.');
                return prev;
            }
            return [...prev, property];
        });
    };

    return (
        <>
            <CompareBar
                compareList={compareList}
                onRemove={id => setCompareList(prev => prev.filter(p => p.id !== id))}
                onClear={() => setCompareList([])}
            />

            <PropertyModal property={expandedProperty} onClose={() => setExpandedProperty(null)} />

            <div id='properties' className="prptes-rent">
                <h1>Properties for Rent</h1>
                <div className='prptes'>
                    {rentProperties.length > 0 ? (
                        rentProperties.map(property => (
                            <PropertyCard
                                key={property.id}
                                property={property}
                                onFavourite={handleFavourite}
                                isFavourite={favourites.includes(property.id)}
                                onCompare={handleCompare}
                                isInCompare={!!compareList.find(p => p.id === property.id)}
                                onExpand={setExpandedProperty}
                            />
                        ))
                    ) : (
                        <p className="no-results">No rental properties found matching your search.</p>
                    )}
                </div>
            </div>
            <hr />
            <div className="prptes-sale">
                <h1>Properties for Sale</h1>
                <div className='prptes'>
                    {saleProperties.length > 0 ? (
                        saleProperties.map(property => (
                            <PropertyCard
                                key={property.id}
                                property={property}
                                onFavourite={handleFavourite}
                                isFavourite={favourites.includes(property.id)}
                                onCompare={handleCompare}
                                isInCompare={!!compareList.find(p => p.id === property.id)}
                                onExpand={setExpandedProperty}
                            />
                        ))
                    ) : (
                        <p className="no-results">No properties for sale found matching your search.</p>
                    )}
                </div>
            </div>
        </>
    );
}
