# gamedeals api
Free public API that is used to access steam games that are on sale

This data was sourced from 

https://www.cheapshark.com


GET ENDPOINTS

Request with no parameters:

localhost:3000/games

-Returns entire database of game deals-

URL Parameter Queries


http://localhost:3000/games?steamRatingPercent=10

steamRatingPercent : To search by steam ratings above paramter

http://localhost:3000/games?internalName=DIVINEDIVINITY

internalName : Search specific game by title