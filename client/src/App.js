import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Header from './components/Header';
import CourseDetails from './pages/CourseDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses">
          <Route index element={<Courses />} />
          <Route path=":courseId" element={<CourseDetails />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
