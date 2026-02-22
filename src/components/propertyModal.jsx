import React from 'react';

export default function PropertyModal({ property, onClose }) {
    if (!property) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-card" onClick={e => e.stopPropagation()}>
                <button className="modal-close pointer" onClick={onClose}>✕</button>
                <img className="modal-img" src={property.img} alt={property.title} />
                <div className="modal-body">
                    <div className="modal-badges">
                        {property.featured && <span className="modal-badge badge-featured">Featured</span>}
                        <span className={`modal-badge ${property.transaction === 'rent' ? 'badge-rent' : 'badge-sale'}`}>
                            For {property.transaction === 'rent' ? 'Rent' : 'Sale'}
                        </span>
                    </div>
                    <h2 className="modal-title">{property.title}</h2>
                    <p className="modal-location">
                        <i className="fa-solid fa-location-dot"></i> {property.location}
                    </p>
                    <div className="modal-stats">
                        <div className="modal-stat-item">
                            <i className="fa-solid fa-bed"></i>
                            <span>{property.stats.beds} Bedrooms</span>
                        </div>
                        <div className="modal-stat-item">
                            <i className="fa-solid fa-shower"></i>
                            <span>{property.stats.baths} Bathrooms</span>
                        </div>
                        <div className="modal-stat-item">
                            <i className="fa-solid fa-vector-square"></i>
                            <span>{property.stats.sqft.toLocaleString()} sqft</span>
                        </div>
                    </div>
                    <div className="modal-price">
                        <span>${property.price.toLocaleString()}{property.transaction === 'rent' ? '/mo' : ''}</span>
                    </div>
                    <div className="modal-actions">
                        <button className="modal-btn modal-btn-primary pointer" onClick={onClose}>
                            Schedule a Tour
                        </button>
                        <button className="modal-btn modal-btn-secondary pointer" onClick={onClose}>
                            Contact Agent
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
