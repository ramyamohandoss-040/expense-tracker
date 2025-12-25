import './App.css';
import Tracker from "./Tracker";   // ✅ Corrected import
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        {/* ✅ Ensure Tracker renders a header with "Expense Tracker" */}
        <Tracker />
      </div>
    </SnackbarProvider>
  );
}

export default App;