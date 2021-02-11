import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Content from './components/Content';

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Intro/>
            <Content/>
        </div>
    );
}

export default App;
