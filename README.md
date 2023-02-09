### create some collections in MongoDB

1. database GoSportBase
2. create access to database for all IP
3. user: testtesttest, password: Test1234Test
4. database includes 4 collections:

   - **events**: all events for current city (or can be better to include name of city in collection???);
     events is an object the next structure:
     {
     "\_id": {
     "$oid": "63e136fc2e844b20ca500de7"
     }, - generated automatically mohgoDB
     "kind": "basketball",
     "date": "08.02.2023",
     "id_place": "placeID", - instead placeID will be ID selected for game place
     "time_start": "18:00", - base period 1 game equal 2 hours
     "time_end": "20:00",
     "place_name": "Ground1",
     "rest_players": 5,
     "players": [ - here will be ID of players, who registers in this game
     "Player1",
     "Player2",
     "Player3"
     ]
     };
   - **profiles**: includes users info and actual info about its events in the next structure:
     {
     "\_id": {
     "$oid": "63e13e9c2e844b20ca500df1" - generated mongo DB via creating object
     },
     "coach": true, - if true user can be a coach
     "player": false, - if false user cannot be a player
     "events": [
     "eventID1", - here will be IDs of events where user registered
     "eventID2"
     ],
     "nickName": "IvanIvan", - it's unique parameter
     "personalData": {
     "weight": 90,
     "height": 185,
     "first_name": "Ivan",
     "last_name": "Ivanov",
     "games": [
     "basketball",
     "volleyball"
     ]
     },
     "urlsToImg": {
     "avatar": "../../urlToAvatar",
     "background": "../urlToBG"
     }
     }
     ;
   - **cities**: info about selected city in the next structure
     {
     "\_id": {
     "$oid": "63e24d7b8e879040eb3ca0a1"
     },
     "kind_sport": {
     "basketball": [ - here will be IDs of places, where can play such kind of sports - it's info for map visualization
     "placeID1",
     "placeID2",
     "placeID3"
     ],
     "volley": [
     "placeID4",
     "placeID2",
     "placeID1"
     ],
     "tennis": [
     "placeID4",
     "placeID2",
     "placeID1"
     ],
     "football": []
     },
     "coordinates": {
     "longitude": "22.22", - info for map about coordinates this city
     "latitude": "11.11"
     },
     "name": "gdansk", - unique parameter
     }
     ;

   - **places**: info about places and its events in the next structure:
     {
     "\_id": {
     "$oid": "63e139512e844b20ca500ded"
     },
     "name": "Ground12", - unique parameter of naming of sportground
     "address": "adress1",
     "events": [
     "eventID1", - all events IDs for this ground
     "eventID2"
     ],
     "coordinates": {
     "latitude": "11.11", - for map info about location this ground
     "longitude": "22.22"
     },
     "kinds": [
     "basketball", - kinds of sport, what yo can play here in.
     "football",
     "volleyball"
     ]
     } ;

### create some server on localhost 5000 with controllers

All method create request and response in JSON format.

1. cityController - request still only via Postman:
   - implement 4 methods:
     - create - create new City;
       url to create request: [http://localhost:5000/api/cities](http://localhost:5000/api/cities) METHOD=POST, after checking of existing such object, if it doesn't exists, new object will be created;
     - getAll - get all registered cities
       url to getAll request: [http://localhost:5000/api/cities](http://localhost:5000/api/cities) METHOD=GET;
     - update - update selected city info - url to update request: [http://localhost:5000/api/cities/id](http://localhost:5000/api/cities/id), METHOD=PUT - because method=put you need to fill all object field even if you want to change object partial;
     - getOne - get selected city info url to get request: [http://localhost:5000/api/cities/id](http://localhost:5000/api/cities/id) METHOD=GET, id - string format from mongoDB;
2. userController - request info about users:

- implement 3 methods:
  - create - create new profile
    url to create request: [http://localhost:5000/api/profiles](http://localhost:5000/api/profiles) METHOD=POST, after checking of existing such object, if it doesn't exists, new object will be created;
  - getInfo - get info registered user - get current user info url to get request: [http://localhost:5000/api/profiles/id](http://localhost:5000/api/profiles/id) METHOD=GET, id - string format from mongoDB;
  - update - update current profile info - url to update request: [http://localhost:5000/api/profiles/id](http://localhost:5000/api/profiles/id), METHOD=PUT - because method=put you need to fill all object field even if you want to change object partial;

3. eventController - request info about events for selected city:
   **time_end** and **time_start** schould be in format "18:00" and only with ":00" at the end, **time_end**=**time_start**+2

- implement 4 methods:

  - create - create new event - url to create request: [http://localhost:5000/api/events](http://localhost:5000/api/events) METHOD=POST, after checking of existing such object, if it doesn't exists, new object will be created;
  - getAll - get all existed events - url to getAll request: [http://localhost:5000/api/events](http://localhost:5000/api/events) METHOD=GET;;
  - update - add or delete user from event - update selected event info - url to update request: [http://localhost:5000/api/events/id](http://localhost:5000/api/events/id), METHOD=PUT - because method=put you need to fill all object field even if you want to change object partial;
  - getOne - get selected event info - url to get request: [http://localhost:5000/api/events/id](http://localhost:5000/api/events/id) METHOD=GET, id - string format from mongoDB;

  4.  placeController - request data about place in city;

  - getAll - get info about all existed places - url to getAll request: [http://localhost:5000/api/places](http://localhost:5000/api/places) METHOD=GET;;
  - update - update selected place info - url to update request: [http://localhost:5000/api/places/id](http://localhost:5000/api/places/id), METHOD=PUT - because method=put you need to fill all object field even if you want to change object partial;
  - getOne - get selected event info - url to get request: [http://localhost:5000/api/places/id](http://localhost:5000/api/places/id) METHOD=GET, id - string format from mongoDB;
