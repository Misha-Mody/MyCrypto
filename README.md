# MyCrypto

An application that will serve as a directory of cryptocurrency exchanges.
The data is fetched from the coin gecko api.
The Main Directory page displays a table containing the top Crypto Coins ranked by Market Capital.
The View Coin page displays further information for that particular coin.

# Installation

1. Clone the repository
2. Move to the folder named "MyCryto"
3. `npm install --legacy-peer-deps`
4. `npm start`
5. goto `http://localhost:3000/` to view the project

# Important Files

1. Gecko Coin Library(https://github.com/Misha-Mody/MyCrypto/blob/main/src/library/GeckoCoinLibrary.js)
   A library to make api calls to get the list of coins.

2. Main Directory Page(https://github.com/Misha-Mody/MyCrypto/blob/main/src/pages/MainDirectory.js)
   Displays the list of coins using React-Tables
