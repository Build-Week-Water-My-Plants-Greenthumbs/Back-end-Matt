# Water My Plants v1.0.0

Backend Project for ptpt-watermyplants-6 <br />
Deployed Link is https://water-plants-matt.herokuapp.com/

- [Auth](#auth)
	- [Logs a User In](#logs-a-user-in)
	- [Registers a New User](#registers-a-new-user)
	

- [Plants](#plants)
	- [Deletes Plant based on provided Id](#deletes-plant-based-on-provided-id)
	- [Returns all Plants](#returns-all-plants)
	- [Returns a Plant](#returns-a-plant)
	- [Adds New Plant](#adds-new-plant)
	- [Updates Plant with provided Id](#updates-plant-with-provided-id)
	
- [User](#user)
	- [Updates a User](#updates-a-user)

# Auth

## Logs a User In

<p>Logs a User In</p>

	POST /api/auth/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>Username of the User</p>							|
| password			| String			|  <p>Password of the User</p>							|

### Success Response

Success-Response:

```
{
"message": "Welcome back Don!",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzE2MTI3MjcsImV4cCI6MTU3MTY5OTEyN30.FKIekAwXBPHRAf6ImjKHM_rKN9GrqLHcXMrpD4RpIB0",
"loggedUser": {
        "userId": 1,
        "username": "Don",
        "phone": "123-456-7890"
    }
}

```
### Error Response

Username-Or-Password-Incorrect-Response

```
{
     "message": "invalid credentials."
}
```

## Registers a New User

<p>Registers a New User</p>

	POST /api/auth/register


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>The New Users username *Required</p>							|
| password			| String			|  <p>The New Users password *Required</p>							|
| phone			| String			|  <p>The New Users phone number</p>							|


### Success Response

Success-Response:

```
{
    "userId": 1,
    "username": "Don",
    "phone": "123-456-7899"
}
```
### Error Response

Username-Already-Taken

```
{
     "message": "username taken"
}
```

# Plants

## Deletes Plant based on provided Id



	DELETE /api/plants/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| integer			|  <p>The ID is passed in the URL</p>							|

## Returns all Plants



	GET /api/plants


### Success Response

Success-Response:

```
[{
        name: "Peperomia Rosso",
        nickname: "Rosalia",
        plantId: 1,
        species: "Peperomia caperata rosso",
        light: "direct",
        image: "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
        frequency: 2,
        description: "Rosalia is a stunner with glossy green leaves accompanied by bright red undersplantIdes. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut."
    },
    {
        name: "String of Dolphins",
        nickname: "Flipper",
        plantId: 2,
        species: "Senecio peregrinus",
        light: "direct",
        image: "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_DOLPHINS-1_800x.png?v=1587613674",
        frequency: 2,
        description: "Flipper's trailing stems are full of glossy succulent leaves, reminiscent to a pod of breaching dolphins. Flipper hails from South Africa, so he thrives in warm environments with lots of sun. This dolphin doesn't need too much water to thrive, making him low maintenance and easy to love."
    },
    {
        name: "Snake Plant",
        nickname: "Severus",
        plantId: 3,
        species: "Sansevieria zeylanica",
        light: "direct",
        image: "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SANSEVIERIA_ZEYLANICA-1_800x.png?v=1587146468",
        frequency: 2,
        description: "One of the most popular and hardy of houseplants, he's virtually indestructible and adaptable to almost any condition. Whether you throw full, direct sunlight at him or shove him in the low-light corner of your apartment, he'll grow. And to top it off, he'll go weeks without water if he must."
    },
    {
        name: "ZZ Plant",
        nickname: "Dusty Gibbons",
        plantId: 4,
        species: "Zamioculcas zamiifolia",
        light: "direct",
        image: "https://cdn.shopify.com/s/files/1/2781/9558/products/6__ZZ-1_800x.png?v=1587411408",
        frequency: 2,
        description: "He's able to go without water for weeks on end and can survive in almost any light condition. As wildly successful as he is, he stays true to his roots and can often be seen basking in the streets of Brooklyn reminiscing about the good ole' days over at Plant-A-Fella Records."
    },
    {
        name: "Jade Plant",
        nickname: "Jade",
        plantId: 5,
        species: "Crassula ovata",
        light: "direct",
        image: "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_JADE-1_800x.png?v=1587153094",
        frequency: 2,
        description: "Originally from South Africa, Jade loves sun-drenched beaches, the occasional surf, and sandy soils. Too much water too often doesn't sit well with her, so maybe offer her a beer? (Please don't give your plants beer)."
    },
    {
        name: "Rabbit Foot Fern",
        nickname: "Fortuna",
        plantId: 6,
        species: "Davallia fejeensis",
        light: "indirect",
        image: "https://cdn.shopify.com/s/files/1/2781/9558/products/FERN_RABBITSFOOT-1_800x.png?v=1587152433",
        frequency: 4,
        description: "Fortuna is a beautiful, resilient fern with furry rhizomes that resemble that of a rabbit’s foot. If luck hasn't been on your splantIde when raising plants, Fortuna may be the one to finally break that streak."
    },
    {
        name: "Peace Lily",
        nickname: "Lilian",
        plantId: 7,
        species: "Spathiphyllum wallisii",
        light: "low",
        image: "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SPATH_PEACELILY-1_800x.png?v=1587653193",
        frequency: 6,
        description: "Don't let the 'peace' part fool you, she's here to grab your attention by the horns with her lush leaves, pearly white blooms, and air filtering prowess. She might need more attention than others, but like they say, nothing good comes easy."
    },
    {
        name: "Staghorn Fern",
        nickname: "Fernando",
        plantId: 8,
        species: "Platycerium bifurcatum",
        light: "indirect",
        image: "https://cdn.shopify.com/s/files/1/2781/9558/products/FERN_STAGHORN-11_800x.png?v=1587427931",
        frequency: 2,
        description: "There are dozens of species of staghorn ferns, and until recently, they were quite rare. Now though--thanks to Fernando's species native to Australia, Platycerium bifurcatum, that is relatively easy to care for and propagate--they’re increasingly popular house plants. "
    }
```

## Returns a Plant


	GET /api/plants/:id


### Success Response

Success-Response:

```
{
    name: "Peperomia Rosso",
    nickname: "Rosalia",
    plantId: 1,
    species: "Peperomia caperata rosso",
    light: "direct",
    image: "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
    frequency: 2,
    description: "Rosalia is a stunner with glossy green leaves accompanied by bright red undersplantIdes. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut."
}
```
## Adds New Plant



	POST /api/plants


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| String			|  <p>The name of the plant *Required</p>							|
| nickname			| String			|  <p>The nickname of the plant *Required</p>							|
| species			| String			|  <p>The species of the plant *Required</p>							|
| frequency			| Integer			|  <p>The watering frequency of the plant *Required</p>							|
| lastWatered       | Timestamp         | <p>The last time plant was watered, defaults to current time</p>    |1
| light			| String			|  <p>The light preference of the plant</p>							|
| image			| String			|  <p>The image url of the plant</p>							|
| description			| String			|  <p>The description of the plant</p>							|

### Success Response

Success-Response:

```
{
    "plantId": 1,
    "name": "Peperomia Rosso",
    "species": "Peperomia caperata rosso",
    "nickname": "Rosalia",
    "frequency": "2",
    "image": "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
    "light": "direct",
    "lastWatered": "2021-08-24 10:52:38",
    "description": "Rosalia is a stunner with glossy green leaves accompanied by bright red undersplantIdes. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut."
}
```
### Error Response

Unauthorized-Response:

```
{
    "message": "Invalid Token!"
}
```

Invalid-Plant:

```
{
    "message": "please complete all required fields"
}
```
## Updates Plant with provided Id



	PUT /api/plants/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| plantId | Integer   | <p>The id of the plant, generated automatically by the database, passed in the url</p> |
| name			| String			|  <p>The name of the plant *Required</p>							|
| nicknamae			| String			|  <p>The nickname of the plant *Required</p>							|
| species			| String			|  <p>The species of the plant *Required</p>							|
| frequency			| Integer			|  <p>The watering frequency of the plant *required</p>							|
| lastWatered       | Timestamp         | <p>The last time plant was watered, defaults to current time</p>    |1
| light			| String			|  <p>The light preference of the plant</p>							|
| image			| String			|  <p>The image url of the plant</p>							|
| description			| String			|  <p>The description of the plant</p>							|

### Success Response

Success-Response:

```
{
    "plantId": 1,
    "name": "Updated Peperomia Rosso",
    "species": "Peperomia caperata rosso",
    "nickname": "Rosalia",
    "frequency": "2",
    "image": "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
    "light": "direct",
    "lastWatered": "2021-08-24 10:52:38",
    "description": "Rosalia is a stunner with glossy green leaves accompanied by bright red undersplantIdes. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut."
}
```
### Error Response

Unauthorized-Response:

```
{
    "message": "Invalid Token!"
}
```

Invalid-Plant:

```
{
    "message": "please complete all required fields"
}
```
# User

## Updates a User

<p>Updates a user with the id passed in the URL</p>

	PUT /api/users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>The Updated Users username</p>							|
| password			| String			|  <p>The Updated Users password</p>							|
| phone			| String			|  <p>The Updated Users phone number</p>							|

### Success Response

Success-Response:

```
{
    "userId": 1,
    "username": "Don",
    "password": "$2a$08$dg9YIrK9xV08553InnyM9ua9r6QHvgB2m34QLO.io8qvQtCRzcy/O",
    "phone": "123-456-7899"
}
```
### Error Response

Unauthorized-Response:

```
{
    "message": "Invalid Token!"
}
```
