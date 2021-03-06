import {GlobalStyle} from'./styles/global';
import {Header} from "./components/Header";
import {Dashboard} from "./components/Dashboard";
import Modal from "react-modal";
import {useEffect, useState} from "react";
import {NewTransactionModal} from "./components/NewTransactionModal";
import {TransactionsProvider} from './hooks/useTransactions';
import {api} from "./services/api";

Modal.setAppElement('#root')

export  function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }

  return (
    <TransactionsProvider>
      <GlobalStyle/>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
    </TransactionsProvider>
  );
}
