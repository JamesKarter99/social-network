import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'/>
            </header>

            <nav className='nav'>
                <div><a href='#'>Messages</a></div>
                <div><a href='#'>News</a></div>
                <div><a href='#'>Music</a></div>
                <div><a href='#'>Settings</a></div>
            </nav>

            <div className='content'>
                <div>
                    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
                </div>
                <div>
                    avatar
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            Post 1
                        </div>
                        <div>
                            Post 2
                        </div>
                        <div>
                            Post 3
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default App;
