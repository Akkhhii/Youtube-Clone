import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.jsx'
import FeedContextProvider from './contexts/FeedContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <FeedContextProvider>
        <App />
      </FeedContextProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>,
)
