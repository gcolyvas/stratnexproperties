import React from 'react';
import { Property } from '../types';
import { PropertyCard } from './PropertyCard';

interface PropertyGridProps {
  properties: Property[];
  onPropertyClick: (property: Property) => void;
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({ properties, onPropertyClick }) => {
  if (properties.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-none border border-dashed border-slate-300">
        <h3 className="text-xl font-bold text-slate-900">No properties found</h3>
        <p className="text-slate-500 mt-2">Try adjusting your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map(property => (
        <PropertyCard 
          key={property.id} 
          property={property} 
          onClick={onPropertyClick} 
        />
      ))}
    </div>
  );
};