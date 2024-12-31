import { FormStore } from '@/types/store.types';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useFormStore = create<FormStore>()(
  persist(
    (set, get) => ({
      fields: [],

      addField: field =>
        set(state => ({
          fields: [...state.fields, field],
        })),

      updateField: (id, updates) =>
        set(state => ({
          fields: state.fields.map(field =>
            field.id === id ? { ...field, ...updates } : field,
          ),
        })),

      removeField: id =>
        set(state => ({
          fields: state.fields.filter(field => field.id !== id),
        })),

      reorderFields: (dragIndex, hoverIndex) =>
        set(state => {
          const newFields = [...state.fields];
          const dragField = newFields[dragIndex];
          newFields.splice(dragIndex, 1);
          newFields.splice(hoverIndex, 0, dragField);
          return { fields: newFields };
        }),

      importJson: json => {
        try {
          const fields = JSON.parse(json);
          set({ fields });
        } catch (error) {
          console.error('Failed to import JSON:', error);
        }
      },
      moveField: (dragIndex, hoverIndex) => {
        set(state => {
          const newFields = [...state.fields];
          const dragField = newFields[dragIndex];
          newFields.splice(dragIndex, 1);
          newFields.splice(hoverIndex, 0, dragField);
          return { fields: newFields };
        });
      },
      exportJson: () => JSON.stringify(get().fields, null, 2),
    }),
    {
      name: 'form-builder-storage',
    },
  ),
);
