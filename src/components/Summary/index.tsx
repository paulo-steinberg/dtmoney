import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entries</p>
                    <img src={incomeImg} alt="Entries"/>
                </header>
                <strong>$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Exits</p>
                    <img src={outcomeImg} alt="Entries"/>
                </header>
                <strong>- $500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entries"/>
                </header>
                <strong>$500,00</strong>
            </div>
        </Container>
    );
}
