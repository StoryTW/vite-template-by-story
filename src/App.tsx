import reactLogo from '@/assets/images/react.svg';
import ReactLogo from '@/assets/images/react.svg?react';

import viteLogo from '/vite.svg';

function App() {
  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>

        <ReactLogo/>
      </div>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
