import { FormField } from '@/types/form.types';
import React, { lazy, Suspense, useCallback } from 'react';
import FieldSkeleton from '../FieldSkeleton';
import { useFormStore } from '@/store/formStore';

const components = {
  text: lazy(() => import('@/components/FormFields/TextField')),
  select: lazy(() => import('@/components/FormFields/SelectField')),
  checkbox: lazy(() => import('@/components/FormFields/CheckboxField')),
};

interface DynamicFieldProps {
  field: FormField;
}

export const DynamicField: React.FC<DynamicFieldProps> = ({ field }) => {
  const Component = components[field.type];

  const { removeField } = useFormStore();

  const handleRemoveField = useCallback(() => {
    removeField(field.id);
  }, [removeField, field.id]);

  return (
    <Suspense fallback={<FieldSkeleton />}>
      <Component field={field} onRemove={handleRemoveField} />
    </Suspense>
  );
};
