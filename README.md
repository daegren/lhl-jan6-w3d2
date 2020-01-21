# CRUD

## Resource

Dogs

## Create

### GET /dogs/new

Shows a form to collect information to create a new resource (dog)

### POST /dogs

Takes in a form body and creates a dog in our database

## Read

### GET /dogs

Index route, displays all dogs

### GET /dogs/:id

Show route, display info for a single dog

## Update

### GET /dogs/:id/edit

Show a form preloaded with the data from our database

### PUT/PATCH /dogs/:id

Reads info from the form body and updates the resource in our database

## Delete

### DELETE /dogs/:id

Deletes the given resource from our database
