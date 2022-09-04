import Form from './Form';
import Header from './Header';
import Clock from './Clock';

function App() {
  return (
    <div>
      <Header />
      <div className="">
        <h1 className="text-center">My Note App</h1>
        <div>
          <Clock />
        </div>
        <hr />
        <Form />
      </div>
    </div>
  );
}

export default App;
