api.inspectionsupport.net
=========================
Documentation for the ISN API - [api.inspectionsupport.net]


Updating Swagger
----------------
+ Clone the swagger-ui project [https://github.com/swagger-api/swagger-ui] to another location (not on this repo)
```
git clone https://github.com/swagger-api/swagger-ui.git
```
+ Copy the "dist" folder from the swagger-ui project over to this project in the "public" folder


Testing via Docker
------------------
```
docker-compose up
```

Next, browse to [http://api.lan:8989/]


Local Testing
-------------
To increase sanity disable cache on your browser.  The JSON files tend to find their way into a cache jail on a local host.


Pushing a Generic CRUD into an Object
-------------------------------------
Make sure you are running BASH >= 4.X

```
echo $SHELL
```

Create the object with:

```
OBJECT_DESCRIPTION="Escrow Officer"
OBJECT_NAME_SINGULAR=EscrowOfficer
OBJECT_NAME_PLURAL=EscrowOfficers
OBJECT_TAG=escrowofficers

cp public/swagger/models/Generic.json public/swagger/models/${OBJECT_NAME_SINGULAR}.json
sed -i -- "s/TAG/${OBJECT_TAG}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}.json
sed -i -- "s/OBJECT_DESCRIPTION_LOWER/${OBJECT_DESCRIPTION,,}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}.json
sed -i -- "s/LOWER_SINGULAR/${OBJECT_NAME_SINGULAR,,}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}.json
sed -i -- "s/LOWER_PLURAL/${OBJECT_NAME_PLURAL,,}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}.json
sed -i -- "s/UPPER_SINGULAR/${OBJECT_NAME_SINGULAR^^}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}.json
sed -i -- "s/UPPER_PLURAL/${OBJECT_NAME_PLURAL^^}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}.json
sed -i -- "s/OBJECT_NAME_SINGULAR/${OBJECT_NAME_SINGULAR}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}.json
rm "public/swagger/models/${OBJECT_NAME_SINGULAR}.json--"

cp public/swagger/models/GenericEntry.json public/swagger/models/${OBJECT_NAME_SINGULAR}Entry.json
sed -i -- "s/TAG/${OBJECT_TAG}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}Entry.json
sed -i -- "s/OBJECT_DESCRIPTION_LOWER/${OBJECT_DESCRIPTION,,}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}Entry.json
sed -i -- "s/LOWER_SINGULAR/${OBJECT_NAME_SINGULAR,,}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}Entry.json
sed -i -- "s/LOWER_PLURAL/${OBJECT_NAME_PLURAL,,}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}Entry.json
sed -i -- "s/UPPER_SINGULAR/${OBJECT_NAME_SINGULAR^^}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}Entry.json
sed -i -- "s/UPPER_PLURAL/${OBJECT_NAME_PLURAL^^}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}Entry.json
sed -i -- "s/OBJECT_NAME_SINGULAR/${OBJECT_NAME_SINGULAR}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}Entry.json
rm "public/swagger/models/${OBJECT_NAME_SINGULAR}Entry.json--"

cp public/swagger/models/GenericResponse.json public/swagger/models/${OBJECT_NAME_SINGULAR}Response.json
sed -i -- "s/TAG/${OBJECT_TAG}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}Response.json
sed -i -- "s/OBJECT_DESCRIPTION_LOWER/${OBJECT_DESCRIPTION,,}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}Response.json
sed -i -- "s/LOWER_SINGULAR/${OBJECT_NAME_SINGULAR,,}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}Response.json
sed -i -- "s/LOWER_PLURAL/${OBJECT_NAME_PLURAL,,}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}Response.json
sed -i -- "s/UPPER_SINGULAR/${OBJECT_NAME_SINGULAR^^}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}Response.json
sed -i -- "s/UPPER_PLURAL/${OBJECT_NAME_PLURAL^^}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}Response.json
sed -i -- "s/OBJECT_NAME_SINGULAR/${OBJECT_NAME_SINGULAR}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}Response.json
rm "public/swagger/models/${OBJECT_NAME_SINGULAR}Response.json--"

cp public/swagger/models/GenericsResponse.json public/swagger/models/${OBJECT_NAME_SINGULAR}sResponse.json
sed -i -- "s/TAG/${OBJECT_TAG}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}sResponse.json
sed -i -- "s/OBJECT_DESCRIPTION_LOWER/${OBJECT_DESCRIPTION,,}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}sResponse.json
sed -i -- "s/LOWER_SINGULAR/${OBJECT_NAME_SINGULAR,,}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}sResponse.json
sed -i -- "s/LOWER_PLURAL/${OBJECT_NAME_PLURAL,,}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}sResponse.json
sed -i -- "s/UPPER_SINGULAR/${OBJECT_NAME_SINGULAR^^}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}sResponse.json
sed -i -- "s/UPPER_PLURAL/${OBJECT_NAME_PLURAL^^}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}sResponse.json
sed -i -- "s/OBJECT_NAME_SINGULAR/${OBJECT_NAME_SINGULAR}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}sResponse.json
rm "public/swagger/models/${OBJECT_NAME_SINGULAR}sResponse.json--"

cp public/swagger/models/GenericsSearchResponse.json public/swagger/models/${OBJECT_NAME_SINGULAR}sSearchResponse.json
sed -i -- "s/TAG/${OBJECT_TAG}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}sSearchResponse.json
sed -i -- "s/OBJECT_DESCRIPTION_LOWER/${OBJECT_DESCRIPTION,,}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}sSearchResponse.json
sed -i -- "s/LOWER_SINGULAR/${OBJECT_NAME_SINGULAR,,}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}sSearchResponse.json
sed -i -- "s/LOWER_PLURAL/${OBJECT_NAME_PLURAL,,}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}sSearchResponse.json
sed -i -- "s/UPPER_SINGULAR/${OBJECT_NAME_SINGULAR^^}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}sSearchResponse.json
sed -i -- "s/UPPER_PLURAL/${OBJECT_NAME_PLURAL^^}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}sSearchResponse.json
sed -i -- "s/OBJECT_NAME_SINGULAR/${OBJECT_NAME_SINGULAR}/g" public/swagger/models/${OBJECT_NAME_SINGULAR}sSearchResponse.json
rm "public/swagger/models/${OBJECT_NAME_SINGULAR}sSearchResponse.json--"

cp public/swagger/paths/generic.json public/swagger/paths/${OBJECT_NAME_SINGULAR,,}.json
sed -i -- "s/TAG/${OBJECT_TAG}/g" public/swagger/paths/${OBJECT_NAME_SINGULAR,,}.json
sed -i -- "s/OBJECT_DESCRIPTION_LOWER/${OBJECT_DESCRIPTION,,}/g" public/swagger/paths/${OBJECT_NAME_SINGULAR,,}.json
sed -i -- "s/LOWER_SINGULAR/${OBJECT_NAME_SINGULAR,,}/g" public/swagger/paths/${OBJECT_NAME_SINGULAR,,}.json
sed -i -- "s/LOWER_PLURAL/${OBJECT_NAME_PLURAL,,}/g" public/swagger/paths/${OBJECT_NAME_SINGULAR,,}.json
sed -i -- "s/UPPER_SINGULAR/${OBJECT_NAME_SINGULAR^^}/g" public/swagger/paths/${OBJECT_NAME_SINGULAR,,}.json
sed -i -- "s/UPPER_PLURAL/${OBJECT_NAME_PLURAL^^}/g" public/swagger/paths/${OBJECT_NAME_SINGULAR,,}.json
sed -i -- "s/OBJECT_NAME_SINGULAR/${OBJECT_NAME_SINGULAR}/g" public/swagger/paths/${OBJECT_NAME_SINGULAR,,}.json
rm "public/swagger/paths/${OBJECT_NAME_SINGULAR,,}.json--"

cp public/swagger/paths/generics.json public/swagger/paths/${OBJECT_NAME_PLURAL,,}.json
sed -i -- "s/TAG/${OBJECT_TAG}/g" public/swagger/paths/${OBJECT_NAME_PLURAL,,}.json
sed -i -- "s/OBJECT_DESCRIPTION_LOWER/${OBJECT_DESCRIPTION,,}/g" public/swagger/paths/${OBJECT_NAME_PLURAL,,}.json
sed -i -- "s/LOWER_SINGULAR/${OBJECT_NAME_SINGULAR,,}/g" public/swagger/paths/${OBJECT_NAME_PLURAL,,}.json
sed -i -- "s/LOWER_PLURAL/${OBJECT_NAME_PLURAL,,}/g" public/swagger/paths/${OBJECT_NAME_PLURAL,,}.json
sed -i -- "s/UPPER_SINGULAR/${OBJECT_NAME_SINGULAR^^}/g" public/swagger/paths/${OBJECT_NAME_PLURAL,,}.json
sed -i -- "s/UPPER_PLURAL/${OBJECT_NAME_PLURAL^^}/g" public/swagger/paths/${OBJECT_NAME_PLURAL,,}.json
sed -i -- "s/OBJECT_NAME_SINGULAR/${OBJECT_NAME_SINGULAR}/g" public/swagger/paths/${OBJECT_NAME_PLURAL,,}.json
rm "public/swagger/paths/${OBJECT_NAME_PLURAL,,}.json--"

```
