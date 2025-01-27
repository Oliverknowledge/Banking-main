import { Configuration, PlaidApi, PlaidEnvironments } from  'plaid';

const configuration = new Configuration(
    {
        basePath:   PlaidEnvironments.sandbox,
        baseOptions: 
        {
            headers: {
                'PlAID-CLIENT-ID':  process.env.PlAID_CLIENT_ID,
                'PLAID-SECRET': process.env.PLAID_SECRET,
            }
        }
    }
);

export const plaidClient = new PlaidApi(configuration);