import {Container} from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                <th>Title</th>
                <th>Value</th>
                <th>Category</th>
                <th>Date</th>
                </thead>
                <tbody>
                <tr>
                    <td>Website development</td>
                    <td className="deposit">$1300,00</td>
                    <td>Development</td>
                    <td>2020-06-25</td>
                </tr>
                <tr>
                    <td>Rent</td>
                    <td className="withdraw">- $1100,00</td>
                    <td>Home</td>
                    <td>2020-06-17</td>
                </tr>
                </tbody>
            </table>
        </Container>
    );
}
