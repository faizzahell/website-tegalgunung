import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routers/routes';

const App = () => {
  return (
    <Router>

      {/* <Routes future={{ v7_startTransition: true }} > */}
      
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
