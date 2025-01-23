import { Provider } from "react-redux";
import { store } from "./store/store";
import Index from "./pages/Index";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom styles for toasts
const toastStyles = {
  background: '#f8f9fa',
  color: '#1a1a1a',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  fontSize: '14px',
  padding: '16px',
};

// Custom CSS for success icon and border
const successIconStyles = `
.Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
  color: #22c55e !important;
}
.Toastify__toast--success {
  border-left: 4px solid #22c55e !important;
}
`;

function App() {
  return (
    <Provider store={store}>
      <style>{successIconStyles}</style>
      <Index />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastStyle={toastStyles}
      />
    </Provider>
  );
}

export default App;