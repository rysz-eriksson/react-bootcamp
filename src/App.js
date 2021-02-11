import FuncComponent from './components/func_component';
import ClassComponent from './components/class_component';
import PureComponent from './components/pure_component';
import CreateElemFuncComp from './components/create_elem_func';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <h2>Creating an app using different coponents:</h2>
      <FuncComponent />
      <ClassComponent />
      <PureComponent />
      <CreateElemFuncComp />
      <div id="container"></div>
    </div>
  );
}

export default App;
