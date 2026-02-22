import React, { useState } from 'react';
import Top from './components/top'
import Body from './components/body'
import Footer from './components/footer'
import { propertiesData } from './propertiesData';

function App() {
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);

  const handleSearch = (filters) => {
    let filtered = propertiesData.filter(item => {
      const matchLocation = filters.location === '' || item.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchType = filters.type === 'type' || item.type.toLowerCase() === filters.type.toLowerCase();
      const matchBudget = filters.budget === '' || item.price <= parseInt(filters.budget);
      return matchLocation && matchType && matchBudget;
    });
    setFilteredProperties(filtered);
  };

  return (
    <>
      <Top onSearch={handleSearch} />
      <Body properties={filteredProperties} />
      <Footer />
    </>
  );
}

export default App;
