import './App.css';
import Blank from './components/blank/Blank';
import Header from './components/header/Header';
import PromptInput from "./components/promptInput/PromptInput";
import Center from "./components/Center/Center";
import MessageBox from "./components/message box/MessageBox";

function App() {
  return (
  <>
    <Header />
    <div className="App">
      <Center>
      <Blank>
        <MessageBox mode='Bot'/>
        {/*<MessageBox mode='User'/>*/}
      </Blank>
      <PromptInput/>
    </Center>
    </div>
  </>
  );
}

export default App;
