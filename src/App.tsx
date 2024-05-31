import './App.css';
import Blank from './components/blank/Blank';
import Header from './components/header/Header';
import PromptInput from "./components/promptInput/PromptInput";
import Center from "./components/Center/Center";

function App() {
  return (
  <>
    <Header />
    <div className="App">
      <Center>
      <Blank>
        фывфыв
      </Blank>
      <PromptInput/>
    </Center>
    </div>
  </>
  );
}

export default App;
