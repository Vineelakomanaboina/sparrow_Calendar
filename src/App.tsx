import React from 'react';
import Calendar from './components/Calendar/Calendar';
import { Box } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm">
        <div className="flex items-center gap-4 p-6 border-b">
          <Box className="w-6 h-6 text-gray-700" />
          <span className="text-sm text-gray-500">:</span>
        </div>
        <main>
          <Calendar />
        </main>
      </div>
    </div>
  );
}

export default App;