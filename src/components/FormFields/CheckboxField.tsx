import { FormFieldProps } from '@/types/form.types';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import React, { memo } from 'react';

const CheckboxField = memo(({ field, onEdit, onRemove }: FormFieldProps) => {
  return (
    <div className="relative group">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          className="w-4 h-4 text-primary-600 border-gray-300 rounded 
                   focus:ring-primary-500"
        />
        <label className="text-sm font-medium text-gray-700">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      </div>
      <div className="flex absolute top-0 right-0">
        <button
          onClick={onEdit}
          className=" opacity-0 group-hover:opacity-100 
                 transition-opacity p-2 text-gray-500 hover:text-primary-600"
        >
          <PencilIcon className="w-4 h-4" />
        </button>
        <button
          onClick={onRemove}
          className="opacity-0 group-hover:opacity-100 
                 transition-opacity p-2 text-gray-500 hover:text-primary-600"
        >
          <TrashIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
});

export default CheckboxField;
