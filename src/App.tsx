import "./App.css";
import Blank from "./components/blank/Blank";
import Header from "./components/header/Header";
import PromptInput from "./components/promptInput/PromptInput";
import Center from "./components/Center/Center";
import MessageBox from "./components/message box/MessageBox";
import { useAppSelector } from "./hooks/redux-hooks";


function App() {
  const messages = useAppSelector(state => state.responseHistory).responseHistory;
  console.log(messages);
  return (
    <>
      <Header />
      <div className="App">
        <Center>
          <Blank>
            {/* <MessageBox mode="Bot">
              <p>
                <strong>Общая информация </strong>
              </p>
              <p>
                Для оформления кредита в Тинькофф нужно зайти в
                личный кабинет ИП, нажать на "Добавить продукт" и выбрать
                "Оформить кредит". Затем следует заполнение формы заявки, указание
                желаемой суммы, срока и ежемесячного дохода. После подачи заявки
                банк рассматривает ее в течение 1-2 дней, после чего может
                потребоваться телефонная связь для уточнения условий кредита.
                Возможна встреча с представителем банка для дополнительных
                разъяснений.
              </p>
              <p><strong>Способы оплаты кредита</strong> </p>
              <p>
                Если кредит оформлен на
                индивидуального предпринимателя (ИП), ежемесячные платежи будут
                автоматически списываться с его расчетного счета. Если средств на
                этом счете недостаточно, платежи будут списываться со счета
                физического лица. При недостаточности средств на обоих счетах банк
                может списать доступную сумму и начислить штраф.
              </p>
              <strong>
                <p>Оформление кредита в интернет-магазине </p>
              </strong>
              <p>
                Для оформления кредита в
                интернет-магазине необходимо нажать на соответствующую кнопку.
              </p>
              <p><strong>Оборотный кредит при наличии других кредитов</strong></p> 
              <p>
                Компании можно
                предоставить оборотный кредит даже если она уже имеет другой
                кредит. Однако, в зависимости от конкретной ситуации, условия
                существующих продуктов могут быть пересмотрены, например, лимит
                овердрафта может быть снижен.
              </p>
              <strong>
                <p>Ресурсы </p>
              </strong>
              <a href="https://www.tinkoff.ru/business/help/loans/cashloan/about/how-to-get-cag/?card=get-cag">
              https://www.tinkoff.ru/business/help/loans/cashloan/about/how-to-get-cag/?card=get-cag
              </a>
              <a href="https://www.tinkoff.ru/business/help/loans/cashloan/about/payoff-cag/?card=how-to-pay-cag">https://www.tinkoff.ru/business/help/loans/cashloan/about/payoff-cag/?card=how-to-pay-cag</a>
              <a href="https://www.tinkoff.ru/business/help/sales/loans/pos-loan/get-pos-loan/?card=q2">https://www.tinkoff.ru/business/help/sales/loans/pos-loan/get-pos-loan/?card=q2</a>
              <a href="https://www.tinkoff.ru/business/help/loans/turnover/get-turnover/terms/?card=q5">https://www.tinkoff.ru/business/help/loans/turnover/get-turnover/terms/?card=q5</a>
            </MessageBox>
            <MessageBox mode="User">Как оформить кредит?</MessageBox> */}
            {/*<MessageBox mode='User'/>*/}
              {[...messages].reverse().map((message, index) => (
    <>
        {message[0] === "User" ? (
            <MessageBox mode="User">{message[1]}</MessageBox>
        ) : (
            <MessageBox mode="Bot">{message[1]}</MessageBox>
        )}
    </>
))}
            </Blank>
          <PromptInput />
        </Center>
      </div>
    </>
  );
}

export default App;
