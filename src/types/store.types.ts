import { FormField } from './form.types';

export interface FormStore {
  fields: FormField[];
  addField: (field: FormField) => void;
  updateField: (id: string, updates: Partial<FormField>) => void;
  removeField: (id: string) => void;
  reorderFields: (dragIndex: number, hoverIndex: number) => void;
  moveField: (dragIndex: number, hoverIndex: number) => void;
  importJson: (json: string) => void;
  exportJson: () => string;
}
