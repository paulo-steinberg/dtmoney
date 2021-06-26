import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderPros {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderPros) {
    return (
        <Container>
            <Content>
                <img src={logo} alt="dt money"/>
                <button type="button" onClick={onOpenNewTransactionModal}>New Transaction</button>
            </Content>
        </Container>
    );
}
