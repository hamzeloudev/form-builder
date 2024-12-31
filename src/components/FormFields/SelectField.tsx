import { FormFieldProps } from '@/types/form.types';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import React, { memo } from 'react';

const SelectField = memo(({ field, onEdit, onRemove }: FormFieldProps) => {
  return (
    <div className="relative group">
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-700">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <select
          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 
                   focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="">Select an option</option>
          {field.options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
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

export default SelectField;
