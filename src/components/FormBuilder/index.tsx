import React, { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import { useFormStore } from '../../store/formStore';
import { PlusIcon, EyeIcon } from '@heroicons/react/24/outline';
import { FormField, ItemTypes } from '../../types/form.types';
import { DraggableField } from '../Draggable/DraggableField';
import { FormPreview } from '../FormPreview';

export const FormBuilder: React.FC = () => {
  const { fields, addField, moveField } = useFormStore();
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  // Handle dropping new components from the palette
  const [{ isOver }, drop] = useDrop(() => ({
    accept: [ItemTypes.FIELD_COMPONENT, ItemTypes.FORM_FIELD],
    drop: (item: { type: FormField['type']; id?: string }, monitor) => {
      const didDropOnSelf = monitor.didDrop();
      if (didDropOnSelf) {
        return;
      }

      if (!item.id) {
        addField({
          id: crypto.randomUUID(),
          type: item.type,
          label: `New ${item.type} field`,
          required: false,
        });
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver({ shallow: true }),
    }),
  }));

  const handleMoveField = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      moveField(dragIndex, hoverIndex);
    },
    [moveField],
  );

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex justify-between items-center pb-4 border-b">
        <h2 className="text-xl font-semibold text-gray-900">Form Builder</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 
                     hover:text-gray-900 transition-colors"
          >
            <EyeIcon className="w-5 h-5 mr-2" />
            {isPreviewMode ? 'Edit Mode' : 'Preview'}
          </button>
        </div>
      </div>

      {isPreviewMode ? (
        <FormPreview />
      ) : (
        <div
          ref={drop}
          className={`min-h-[400px] rounded-lg ${
            isOver && fields.length === 0
              ? 'border-2 border-dashed border-primary-500 bg-primary-50'
              : 'border-2 border-dashed border-gray-200'
          }`}
        >
          {fields.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[400px] text-gray-500">
              <PlusIcon className="w-12 h-12 mb-2" />
              <p className="text-lg">Drag and drop form fields here</p>
              <p className="text-sm">or click a component from the palette</p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {fields.map((field, index) => (
                <DraggableField
                  key={field.id}
                  field={field}
                  index={index}
                  moveField={handleMoveField}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
