### create some collections in MongoDB

1. database GoSportBase
2. create access to database for all IP
3. user: testtesttest, password: Test1234Test
4. database includes 4 collections:

   - events: all events for current city (or can be better to include name of city in collection???);
   - profiles: includes users info and actual info about its events;
   - cities: info about selected city;
   - places: info about places and its events;

### create some server on localhost 5000 with controllers

1. cityController - request still only via Postman:
   - implement 4 methods:
     - create - create new City;
     - getAll - get all registered cities;
     - update - update selected city info;
     - detOne - get selected city info;
2. userController - request info about users:

- implement 4 methods:
  - create - create new profile;
  - getInfo - get info registered user;
  - update - update current profile info;

3. eventController - request info about events for selected city:
   **time_end** and **time_start** schould be in format "18:00" and only with ":00" at the end, **time_end**=**time_start**+2

- implement 4 methods:
  - create - create new event;
  - getAll - get all existed events;
  - update - add or delete user from event;
  - detOne - get selected event info;
