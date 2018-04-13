# Ark Platform for an IoT powered Local Currency

## Problem:
Many rural communities in America have been underinvested in our modern age. Even urban areas such as Detroit MI, and Scranton PA, have been left behind as their local economies struggle to reach a critical mass from which to grow. This underinvestment has left millions of citizens in a state of economic stagnation with little opportunity for growth.

## Big Picture Solution:
Cryptocurrencies allow us to implement new economic models to empower local communities and spark regional economies. With Ark.io and their Blockchain solutions we implemented a location-specific currency with unique economic models. Using this currency, experiments can be run on a regional scale before being more widely implemented. All without an increase in government debt and with the security of blockchains.

## To Utopia!:
By implementing local currencies in economically depressed areas, we can incentivize investment in the local community, and thus provide more citizens with economic opportunities. As the local economy improves, the currency becomes more valuable, which further spurs growth. The positive feedback could help raise standards of living in areas currently is a state of stagnation.

## Technical Details
** LocalARKCoin (LAC) ** LAC is based off of a fork of the ARK cryptocurrency, with its primary features being its relation to geographical location. Only a specific region can use the currency without fees, and any fees collected are sent back to the region that is being helped economically. The fees are dynamically raised based on the distance from the geographic region in question. All of these rules are implemented within the logic of the blockchain and so cannot by bypassed by individual actors.

** Point of Sale Terminal ** Our proof of concept point of sale terminal consists of the Adafruit Huzzah ESP32 micro-controller board, which has integrated WiFi to connect to the ARK API to verify transactions. The ESP32 connects to a GPS board which allows verification of the location of the transaction, and a NFC breakout board that allows contactless payment with mobile phone cryptocurrency wallets.

** Mobile Wallet App ** In development is a mobile wallet for our local currency which would allow any interested citizen to enter the local cryptocurrency economy. Initiating transactions with other individuals will be simple, and contactless payments allow easy purchases with participating vendors.
