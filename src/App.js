import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Content from './components/content/Content';

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
