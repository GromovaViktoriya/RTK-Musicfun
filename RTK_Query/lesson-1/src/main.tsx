import {createRoot} from 'react-dom/client'
import './index.css'
import App from './app/ui/App.tsx'
import {BrowserRouter} from "react-router";
import {store} from "@/app/model/store.ts";
import {Provider} from "react-redux";

//Чтобы в компонентах можно было обращаться к store, нужно обернуть приложение Provider'ом с переданным
// ему store в файле main.tsx:

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
  </BrowserRouter>,
)
