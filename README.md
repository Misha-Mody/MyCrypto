# MyCrypto

An application that will serve as a directory of cryptocurrency exchanges.
The data is fetched from the coin gecko api.
The Main Directory page displays a table containing the top Crypto Coins ranked by Market Capital.
The View Coin page displays further information for that particular coin.

# Installation

1. Clone the repository
2. Move to the folder named "MyCryto"
3. `npm install`
4. `npm start`
5. goto `http://localhost:3000/` to view the project

# Testing

1. Run `npm test`

# Important Files

1. [Gecko Coin Library](https://github.com/Misha-Mody/MyCrypto/blob/main/src/library/GeckoCoinLibrary.js)
   A library to make api calls to get the list of coins.

2.[Coin Info Library](https://github.com/Misha-Mody/MyCrypto/blob/main/src/library/CoinInfoLibrary.js)
A library to make api calls to get data regarding a particular coin.

3. [Main Directory Page](https://github.com/Misha-Mody/MyCrypto/blob/main/src/pages/MainDirectory.js)
   Displays the list of top 10 coins (sorted in ascensing order by market cap value) with their high level information using React-Tables.

4. [View Coin Page](https://github.com/Misha-Mody/MyCrypto/blob/main/src/pages/ViewCoin.js)
   Displays a coin with all its information in detail including market details, price details, etc.

# Functionalities

1. User can sort list of coins in the table
2. User can click a coin to view more details
3. User can select a currency to view the value of the coin
4. All the stats and data changes according to the currency selected
5. User can calculate the total price of buying the coin in the currency of their choosing
6. User can click the home link to route back to the main page
