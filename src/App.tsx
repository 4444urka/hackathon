import "./App.css";
import Blank from "./components/blank/Blank";
import Center from "./components/Center/Center";
import Header from "./components/header/Header";
import MessageBox from "./components/message box/MessageBox";
import PromptInput from "./components/promptInput/PromptInput";
import { useAppSelector } from "./hooks/redux-hooks";

function App() {  
  const messages = useAppSelector(
    (state) => state.responseHistory
  ).responseHistory;
  console.log(messages);
  return (
    <>
      <Header />
      <div className="App">
        <Center>
          <Blank>
            {[...messages].reverse().map((message) => (
              <>
                {message[0] === "User" ? (
                  <MessageBox mode="User">{message[1]}</MessageBox>
                ) : (
                  <MessageBox mode="Bot">{message[1]}</MessageBox>
                )}
              </>
            ))}
            <MessageBox mode="Bot">Привет! Я Q&A бот от Тинькофф. Задайте мне вопрос.</MessageBox>
          </Blank>
          <PromptInput />
        </Center>
      </div>
    </>
  );
}

export default App;
