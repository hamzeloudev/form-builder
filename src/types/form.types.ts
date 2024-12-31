export interface FormField {
  id: string;
  type: 'text' | 'select' | 'checkbox';
  label: string;
  placeholder?: string;
  options?: string[];
  required?: boolean;
  validation?: {
    pattern?: string;
    message?: string;
  };
}

export interface FieldComponent {
  type: string;
  label: string;
  icon: React.ComponentType;
}

export interface DragItem {
  id: string;
  type: string;
  index: number;
}

export interface FormFieldProps {
  field: FormField;
  onEdit?: () => void;
  onRemove?: () => void;
}

export const ItemTypes = {
  FORM_FIELD: 'form-field',
  FIELD_COMPONENT: 'field-component',
};
