interface FormattedCurrencyProps {
    value: number;
}

export function FormattedCurrency({ value }: FormattedCurrencyProps) {
    return (
        <>
            {new Intl.NumberFormat('en-US',{
                style: 'currency',
                currency: 'USD'
            }).format(value)}
        </>
    );
}
