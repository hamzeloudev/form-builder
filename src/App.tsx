import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { FormBuilder } from './components/FormBuilder';
import { ComponentPalette } from './components/ComponentPalette';
import { useMemo } from 'react';

const App = () => {
  const dndBackend = useMemo(
    () => ('ontouchstart' in window ? TouchBackend : HTML5Backend),
    [],
  );

  return (
    <DndProvider backend={dndBackend}>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-semibold text-gray-900">
                  Form Builder
                </h1>
              </div>
              <div className="flex items-center">{/* <ImportExport /> */}</div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-6">
            <aside className="w-64 flex-shrink-0">
              <ComponentPalette />
            </aside>
            <div className="flex-1">
              <FormBuilder />
            </div>
          </div>
        </main>
      </div>
    </DndProvider>
  );
};

export default App;
