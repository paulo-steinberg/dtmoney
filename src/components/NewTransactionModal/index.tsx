import Modal from "react-modal";
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import {useState} from "react";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');

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

            <Container>
                <h2>Register a transaction</h2>
                <input type="text" placeholder="Title"/>
                <input type="number" placeholder="Value"/>

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

                <input type="text" placeholder="Category"/>
                <button type="submit">Submit</button>
            </Container>
        </Modal>
    );
}
