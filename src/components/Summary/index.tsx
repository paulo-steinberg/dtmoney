import React, { useContext } from "react";
import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import {TransactionsContext} from "../../TransactionsContext";
import { FormattedCurrency } from "../FormattedCurrency";

export function Summary() {
    const {transactions} = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
       deposits: 0,
       withdraws: 0,
       total: 0,
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Entries</p>
                    <img src={incomeImg} alt="Entries"/>
                </header>
                <strong>
                    <FormattedCurrency value={summary.deposits} />
                </strong>
            </div>
            <div>
                <header>
                    <p>Exits</p>
                    <img src={outcomeImg} alt="Entries"/>
                </header>
                <strong>
                    - <FormattedCurrency value={summary.withdraws} />
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entries"/>
                </header>
                <strong>
                    <FormattedCurrency value={summary.total} />
                </strong>
            </div>
        </Container>
    );
}
