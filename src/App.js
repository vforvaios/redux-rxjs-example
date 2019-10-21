import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import ButtonsComponent from './ButtonsComponent'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ButtonsComponent />
      </div>
    </Provider>
  );
}

export default App;
