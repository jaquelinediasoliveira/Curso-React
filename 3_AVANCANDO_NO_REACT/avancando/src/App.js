import './App.css';

import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';

import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {

  const cars = [
    { id: 1, brand: 'Ford', color: 'Green', newCar: true, km: 0 },
    { id: 2, brand: 'Chevrolet', color: 'Red', newCar: false, km: 1000 },
    { id: 3, brand: 'Toyota', color: 'Blue', newCar: true, km: 0 },
    { id: 4, brand: 'Honda', color: 'Yellow', newCar: false, km: 2400 },
    { id: 5, brand: 'VW', color: 'Black', newCar: false, km: 1548 }
  ]
  return (
    <div className="App">
      <h1>Avançando no React</h1>
      {/* Imagem em public */}
      <div>
        <img src='/img1.jpg' alt='Paisagem' />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={City} alt='Cidade' />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name='Jorge' />
      {/* destructuring */}
      <CarDetails id={6} brand='VW' km={1000} color='black' newCar={true} />
      {/* reaproveitando */}
      <CarDetails id={7} brand='Fiat' km={2000} color='red' newCar={false} />
      <CarDetails id={8} brand='Ford' km={4000} color='gray' newCar={true} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails id={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}
    </div>
  );
}

export default App;
