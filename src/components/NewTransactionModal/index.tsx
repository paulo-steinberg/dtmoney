import Modal from "react-modal";
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import {FormEvent, useState} from "react";
import {api} from "../../services/api";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handlCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {title, value, category, type};

        //api.post('transactions', data);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button className="react-modal-close" type="button" onClick={onRequestClose}>
                <img src={closeImg} alt="Close Modal"/>
            </button>

            <Container onSubmit={handlCreateNewTransaction}>
                <h2>Register a transaction</h2>
                <input type="text" placeholder="Title" value={title} onChange={event => setTitle(event.target.value)}/>
                <input type="number" placeholder="Value" value={value} onChange={event => setValue(Number(event.target.value))}/>

                <TransactionTypeContainer>
                    <RadioBox
                    type="button"
                    onClick={() => setType('deposit')}
                    isActive={type === 'deposit'}
                    activeColor="green"
                    >
                        <img src={incomeImg} alt="Income"/>
                        <span>Entry</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Outcome"/>
                        <span>Exit</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input type="text" placeholder="Category" value={category} onChange={event => setCategory(event.target.value)}/>
                <button type="submit">Submit</button>
            </Container>
        </Modal>
    );
}
