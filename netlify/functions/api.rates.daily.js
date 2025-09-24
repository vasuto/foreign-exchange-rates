export async function handler(event, context) {
  try {
    const response = await fetch(
      'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'
    );
    const text = await response.text();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
      body: text,
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: 'Error fetching CNB data',
    };
  }
}
