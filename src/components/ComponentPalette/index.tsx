import React from 'react';
import {
  DocumentTextIcon,
  ListBulletIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { DraggableFieldType } from '../Draggable/DraggableFieldType';

export const ComponentPalette: React.FC = () => {
  const components = [
    { type: 'text', label: 'Text Input', icon: DocumentTextIcon },
    { type: 'select', label: 'Dropdown', icon: ListBulletIcon },
    { type: 'checkbox', label: 'Checkbox', icon: CheckCircleIcon },
  ];

  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      <div className="space-y-2">
        {components.map(component => (
          <DraggableFieldType key={component.type} {...component} />
        ))}
      </div>
    </div>
  );
};
