# nbaplayers_api
Free public API that is used to access NBA team stats

GET ENDPOINTS

Request with no parameters:

localhost:3000/teams

-Returns entire database of teams-

localhost:3000/players

-Return entire database of players-



Search player by last name:

localhost:3000/players/"player's last name"

EX:

http://localhost:3000/players/Ansley

Return:

[{"team":{"id":22,"abbreviation":"ORL","city":"Orlando","conference":"East","division":"Southeast","full_name":"Orlando Magic","name":"Magic"},"_id":"63518d38fdb0a39117ae4269","id":497,"first_name":"Michael","height_feet":null,"height_inches":null,"last_name":"Ansley","position":"","weight_pounds":null,"__v":0}]


