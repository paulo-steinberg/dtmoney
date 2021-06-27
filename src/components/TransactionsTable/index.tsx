import {Container} from "./styles";
import {useContext} from "react";
import {TransactionsContext} from "../../TransactionsContext";
import { FormattedCurrency } from "../FormattedCurrency";

export function TransactionsTable() {
    const { transactions } = useContext(TransactionsContext);

    return (
        <Container>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Value</th>
                    <th>Category</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {transactions && transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>
                            <FormattedCurrency value={transaction.amount} />
                        </td>
                        <td>{transaction.category}</td>
                        <td>{new Intl.DateTimeFormat('en-CA').format(new Date(transaction.createdAt))}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Container>
    );
}
