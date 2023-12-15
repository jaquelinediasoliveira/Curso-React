import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Challenge from './components/Challenge';

import './App.css';
import Events from './components/Events';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      {/* Tag básica do componente */}
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
