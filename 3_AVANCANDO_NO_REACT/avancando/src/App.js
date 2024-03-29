import './App.css';

import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';

import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avançando no React</h1>
      {/* Imagem em public */}
      <div>
        <img src='/img1.jpg' alt='Paisagem' />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={City} alt='Cidade'/>
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
    </div>
  );
}

export default App;
