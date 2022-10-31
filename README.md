# gamedeals api
Free public API that is used to access steam games that are on sale

This data was sourced from 

https://www.cheapshark.com


GET ENDPOINTS

Request with no parameters:

https://steamdealersapi-production.up.railway.app/games

-Returns entire database of game deals-

URL Parameter Queries


https://steamdealersapi-production.up.railway.app/games?steamRatingPercent=10

steamRatingPercent : To search by steam ratings above paramter



https://steamdealersapi-production.up.railway.app/games?internalName=DIVINEDIVINITY

internalName : Search specific game by title


https://steamdealersapi-production.up.railway.app/dealRating=8

dealRating : Search by deal rating, how good of a deal you are getting
