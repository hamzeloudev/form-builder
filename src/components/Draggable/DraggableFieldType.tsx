import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '@/types/form.types';

interface DraggableFieldTypeProps {
  type: string;
  label: string;
  icon: React.ElementType;
}

export const DraggableFieldType: React.FC<DraggableFieldTypeProps> = ({
  type,
  label,
  icon: Icon,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.FIELD_COMPONENT,
    item: { type },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`flex items-center space-x-3 p-3 rounded-lg border-2 
                 border-gray-200 cursor-move transition-all
                 ${isDragging ? 'opacity-50' : 'opacity-100'}
                 hover:border-primary-500 hover:bg-gray-50`}
    >
      <Icon className="w-5 h-5 text-gray-500" />
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
  );
};
