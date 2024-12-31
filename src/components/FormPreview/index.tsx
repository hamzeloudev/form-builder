import { useFormStore } from '@/store/formStore';
import React, { useMemo } from 'react';
import { DynamicField } from '../DynamicField';

export const FormPreview: React.FC = () => {
  const fields = useFormStore(state => state.fields);
  const [formData] = React.useState<Record<string, any>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const isValid = useMemo(() => {
    return fields.every(field => {
      if (field.required) {
        return formData[field.id] != null && formData[field.id] !== '';
      }
      return true;
    });
  }, [fields, formData]);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Form Preview</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map(field => (
          <div key={field.id}>
            <DynamicField field={field} />
          </div>
        ))}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isValid}
            className={`px-4 py-2 rounded-md text-white
              ${
                isValid
                  ? 'bg-primary-600 hover:bg-primary-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
