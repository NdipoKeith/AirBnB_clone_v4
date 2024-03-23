# AirBnB Clone - The Console
The console is the first segment of the AirBnB project at Holberton School that will collectively cover fundamental concepts of higher level programming. The goal of AirBnB project is to eventually deploy our server a simple copy of the AirBnB Website(HBnB). A command interpreter is created in this segment to manage objects for the AirBnB(HBnB) website.

#### Functionalities of this command interpreter:
* Create a new object (ex: a new User or a new Place)
* Retrieve an object from a file, a database etc...
* Do operations on objects (count, compute stats, etc...)
* Update attributes of an object
* Destroy an object

## Table of Content
* [Environment](#environment)
* [Installation](#installation)
* [File Descriptions](#file-descriptions)
* [Usage](#usage)
* [Examples of use](#examples-of-use)
* [APIs](#APIs)
* [Front-End](#Front-End)
* [Bugs](#bugs)
* [Authors](#authors)
* [License](#license)

## Environment
This project is interpreted/tested on Ubuntu 14.04 LTS using python3 (version 3.4.3)

## Installation
* Clone this repository: `git clone "https://github.com/alexaorrico/AirBnB_clone.git"`
* Access AirBnb directory: `cd AirBnB_clone`
* Run hbnb(interactively): `./console` and enter command
* Run hbnb(non-interactively): `echo "<command>" | ./console.py`

## File Descriptions
[console.py](console.py) - the console contains the entry point of the command interpreter. 
List of commands this console current supports:
* `EOF` - exits console 
* `quit` - exits console
* `<emptyline>` - overwrites default emptyline method and does nothing
* `create` - Creates a new instance of`BaseModel`, saves it (to the JSON file) and prints the id
* `destroy` - Deletes an instance based on the class name and id (save the change into the JSON file). 
* `show` - Prints the string representation of an instance based on the class name and id.
* `all` - Prints all string representation of all instances based or not on the class name. 
* `update` - Updates an instance based on the class name and id by adding or updating attribute (save the change into the JSON file). 

#### `models/` directory contains classes used for this project:
[base_model.py](/models/base_model.py) - The BaseModel class from which future classes will be derived
* `def __init__(self, *args, **kwargs)` - Initialization of the base model
* `def __str__(self)` - String representation of the BaseModel class
* `def save(self)` - Updates the attribute `updated_at` with the current datetime
* `def to_dict(self)` - returns a dictionary containing all keys/values of the instance

Classes inherited from Base Model:
* [amenity.py](/models/amenity.py)
* [city.py](/models/city.py)
* [place.py](/models/place.py)
* [review.py](/models/review.py)
* [state.py](/models/state.py)
* [user.py](/models/user.py)

#### `/models/engine` directory contains File Storage class that handles JASON serialization and deserialization :
[file_storage.py](/models/engine/file_storage.py) - serializes instances to a JSON file & deserializes back to instances
* `def all(self)` - returns the dictionary __objects
* `def new(self, obj)` - sets in __objects the obj with key <obj class name>.id
* `def save(self)` - serializes __objects to the JSON file (path: __file_path)
* ` def reload(self)` -  deserializes the JSON file to __objects

#### `/tests` directory contains all unit test cases for this project:
[/test_models/test_base_model.py](/tests/test_models/test_base_model.py) - Contains the TestBaseModel and TestBaseModelDocs classes
TestBaseModelDocs class:
* `def setUpClass(cls)`- Set up for the doc tests
* `def test_pep8_conformance_base_model(self)` - Test that models/base_model.py conforms to PEP8
* `def test_pep8_conformance_test_base_model(self)` - Test that tests/test_models/test_base_model.py conforms to PEP8
* `def test_bm_module_docstring(self)` - Test for the base_model.py module docstring
* `def test_bm_class_docstring(self)` - Test for the BaseModel class docstring
* `def test_bm_func_docstrings(self)` - Test for the presence of docstrings in BaseModel methods

TestBaseModel class:
* `def test_is_base_model(self)` - Test that the instatiation of a BaseModel works
* `def test_created_at_instantiation(self)` - Test created_at is a pub. instance attribute of type datetime
* `def test_updated_at_instantiation(self)` - Test updated_at is a pub. instance attribute of type datetime
* `def test_diff_datetime_objs(self)` - Test that two BaseModel instances have different datetime objects

[/test_models/test_amenity.py](/tests/test_models/test_amenity.py) - Contains the TestAmenityDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_amenity(self)` - Test that models/amenity.py conforms to PEP8
* `def test_pep8_conformance_test_amenity(self)` - Test that tests/test_models/test_amenity.py conforms to PEP8
* `def test_amenity_module_docstring(self)` - Test for the amenity.py module docstring
* `def test_amenity_class_docstring(self)` - Test for the Amenity class docstring

[/test_models/test_city.py](/tests/test_models/test_city.py) - Contains the TestCityDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_city(self)` - Test that models/city.py conforms to PEP8
* `def test_pep8_conformance_test_city(self)` - Test that tests/test_models/test_city.py conforms to PEP8
* `def test_city_module_docstring(self)` - Test for the city.py module docstring
* `def test_city_class_docstring(self)` - Test for the City class docstring

[/test_models/test_file_storage.py](/tests/test_models/test_file_storage.py) - Contains the TestFileStorageDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_file_storage(self)` - Test that models/file_storage.py conforms to PEP8
* `def test_pep8_conformance_test_file_storage(self)` - Test that tests/test_models/test_file_storage.py conforms to PEP8
* `def test_file_storage_module_docstring(self)` - Test for the file_storage.py module docstring
* `def test_file_storage_class_docstring(self)` - Test for the FileStorage class docstring

[/test_models/test_place.py](/tests/test_models/test_place.py) - Contains the TestPlaceDoc class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_place(self)` - Test that models/place.py conforms to PEP8.
* `def test_pep8_conformance_test_place(self)` - Test that tests/test_models/test_place.py conforms to PEP8.
* `def test_place_module_docstring(self)` - Test for the place.py module docstring
* `def test_place_class_docstring(self)` - Test for the Place class docstring

[/test_models/test_review.py](/tests/test_models/test_review.py) - Contains the TestReviewDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_review(self)` - Test that models/review.py conforms to PEP8
* `def test_pep8_conformance_test_review(self)` - Test that tests/test_models/test_review.py conforms to PEP8
* `def test_review_module_docstring(self)` - Test for the review.py module docstring
* `def test_review_class_docstring(self)` - Test for the Review class docstring

[/test_models/state.py](/tests/test_models/test_state.py) - Contains the TestStateDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_state(self)` - Test that models/state.py conforms to PEP8
* `def test_pep8_conformance_test_state(self)` - Test that tests/test_models/test_state.py conforms to PEP8
* `def test_state_module_docstring(self)` - Test for the state.py module docstring
* `def test_state_class_docstring(self)` - Test for the State class docstring

[/test_models/user.py](/tests/test_models/test_user.py) - Contains the TestUserDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_user(self)` - Test that models/user.py conforms to PEP8
* `def test_pep8_conformance_test_user(self)` - Test that tests/test_models/test_user.py conforms to PEP8
* `def test_user_module_docstring(self)` - Test for the user.py module docstring
* `def test_user_class_docstring(self)` - Test for the User class docstring

## Examples of use
```
vagrantAirBnB_clone$./console.py
(hbnb) help

Documented commands (type help <topic>):
========================================
EOF  all  create  destroy  help  quit  show  update

(hbnb) all MyModel
** class doesn't exist **
(hbnb) create BaseModel
7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) all BaseModel
[[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}]
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}
(hbnb) destroy BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
** no instance found **
(hbnb) quit
```


## ****APIs****

This web application uses RESTful APIs. The REST APIs adhere to principles of REST, Representational State Transfer, a widely used architecture for web services. The REST APIs rely on the HTTP methos=ds GET, POST, PUT, and DELETE for interacting with resources. Resources, in this case, represent data in the backend of the web-application. 


[/api](/api) - The directory contains the API:
THe directory houses the RESTFUL API endpoints that power the backend functionality of the AirBnB_clone application. It provides a structured and scalable interface for web applocation to interact with the underlying database layer.

[/views](/api/views) - The directory contains the views of the flask web-app.
The views handle incoming requests, process data, and generate responses. THe views are decorated with @app.route decorator.

*******APi ENDPOINTS*******.

[/users/](/api/v1/views/users.py) - The endpoint for accessing the user data for the web application.
         *  There are various HTTP methods that can be operated on the following endpoint, ie:
           - GET, to retrieve the list of all the user objects
           - POST HTTP method to create a new user

[/users/user_id/](/api/vi/views/users.py) - The endpoint is for accessing specific user data. It has folloeing HTTP methods available to it:
            - GET, to retrieve data about a specific user.
            - DELETE, to delete the user object
            - PUT, to update a users info.

[/states](/api/v1/views/states.py) - This API endpoint is used to access the state objects available. It has following HTTP methods available;
            -   GET, a method used to retrieve the list of all state objects.
            -   POST, a method used to create a new state object.

[/states/state_id](/api/v1/views/states.py) - This endpoint is used to access individual state object by using the id. It has the following HTTP methods available to it;
            -   GET, a method used to retrieve the individual specific state .
            -   DELETE, a method used to delete an individual specific state from the database
            -   PUT, a method used to update the individual specific state.

[/states/state_id/cities](/api/v1/views/cities.py) - This endpoint is used to access city objects available in the database. It has the following HTTP methods available to it;
            -   Get, Retrieves a list of all city objects  of a specific state.
            -   POST, a method used to create a new city object.

[/cities/ciy_id](/api/v1/views/cities.py) - This endpoint is used to retrieve the data for a specific city, identified by id. The HTTP methods available to the endpoints are:
            -   GET, to retrieve a specific city based on id.
            -   DELETE, to delete a specific city based on id.
            -   PUT, to update a city info based on id.

[/cities/city_id/places](/api/v1/views/places.py) - This nedpoint is used to access place oblects within a specific city. The HTTP methods available for this endpoint arel
            -   GET, to retrieve the list of all the place objects in of a city.
            -   POST, used to create a new places object.

[/places/place_id](/api/v1/views/places.py) - This endpoint is used to access specific places using their id. The HTTP methods available for the following endpoint are;
            -   GET, to retrieve data about a specific place by id.
            -   DELETE, to delete data about a specific place identifying it by id.
            -   PUT, to update data about a specific place.

[/places/place_id/amenities](/api/v1/views/places_amenities.py) - This endpoint is used to handle the api actions for amenities of a place. It has the following HTTP methods available to it;
            -   GET, used to retrieve the list of all amenity objects of a place.

[/places/place_id/amenities/amenity_id](/api/v1/views/places_amenities.py) - This endpoint is used to handle the API actions for a specific amenity of a place identified by an id. It has the following HTTP methods to it;
            -   GET, to retrieve an amenity of a place.
            -   DELETE, to delete an amenity object of a place.
            -   PUT, used to update an amenity object of a place.
            -   POST, used to create an amenity object of a place.

[/places/place_id/reviews](/api/v1/views/places_reviews.py) - This endpoint is used to handle the API actions for reviews. It has the following HTTP methods to it;
            -   GET, to retrieve the list of all revies of a specific place
            -   POST, to create a new review for a place.

[/reviews/review_id/](/api/v1/views/places_reviews.py) - This endpoint is used to handle the API actions for a specific review. It has the following HTTP methods to it;
            -   GET, used to retrieve a review of a place by id.
            -   DELETE, used to delete a review of a place.
            -   PUT, used to update the review of a place.

[/status](/api/v1/views/index.py) - This API endpoint is used to handle the response of the API in general. It returns {"status": "OK"} when the API is working. It has just HTTP method GET available to it.

[/stats/](/api/v1/views/index.py) - This API endpoint is used to retrieve the number of various objects by type. The only HTTP method available to it is the GET method.


## Front-End

This area provides an overview of the front-end code of the Airbnb CLone pplication. The front-end is built with HTML, CSS, and jQuery to display data retrieved from a separate RESTful API.

[FRONT-END](/web_dynamic)

* The folder below takes the basic structure of a Flask web-app.
```
             web_dynamic/
                        ├── 100-hbnb.py
                        ├── templates/
                        │   └── 100-hnh.html
                        └── static
                            │── images
                            │       └── .png ***folder contains images used***
                            │── scripts
                            │       └── .js ***javascript files***
                            └── styles
                                    └── .css ***CSS files used for styling***
```
 ***Technology Stack***

[HTML](web_dynamic/templates): Provides the basic structure and the contents of the web page.

[CSS](web_dynamic/static/styles): Defines the visual styling of the application

[jQuery](web_dynamic/static/sripts): A JavaScript used for simple DOM manipulation and asynchronous data fetching.

***Functionality***

- The web-application utilizes jQuery ajax capability to send request to the API endpoints for retrieving data.\
- For example a GET HTTP method on a certain endpoint, 0.0.0.0:5000/states/cities/cities_id/places, retrieves data about places in a certain state and a specific city.\
- The data retrieval from the API is used to populate HTML elements on the web page.\
- The front-end contains a button feature that enables to filter properties by amenities.\
- The front-end is responsive and adapts to different screen sizes.

## Bugs
No known bugs at this time. 

## Authors
Alexa Orrico - [Github](https://github.com/alexaorrico) / [Twitter](https://twitter.com/alexa_orrico)  
Jennifer Huang - [Github](https://github.com/jhuang10123) / [Twitter](https://twitter.com/earthtojhuang)  
Jhoan Zamora - [Github](https://github.com/jzamora5) / [Twitter](https://twitter.com/JhoanZamora10)\
David Ovalle - [Github](https://github.com/Nukemenonai) / [Twitter](https://twitter.com/disartDave)\
David Njagi - [Github](https://github.com/DAVENJAGI)\
Keith Ndipo - [Github](https://github.com/NdipoKeith)

## DEPLOYMENT
THE WEBSITE IS NOT CURRENTLY DEPLOYED !!

## License
Public Domain. No copy write protection. 
