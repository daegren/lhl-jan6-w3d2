# CRUD

CRUD is an acronym which identifies the most common actions performed on entities. These actions are:

- Create
- Read
- Update
- Delete

An __entity__/__resource__ is a logical piece of data on which we are operating, this could be a `tweets`, `users`, `dogs`, `invoices`, `products` or any other piece of data that our app is concerned about.

## Resource

The resource we're working with here are `dogs`, i.e. information about `dogs` specifically their names.

The resource name will precede all of the routes in our application. In short you can follow this guide to build out routes for a given resource:

- Create
  - `GET /resource_name/new` - New Form
  - `POST /resource_name` - Creates the resource in our data store
- Read
  - `GET /resource_name` - Listing of a resource (show all, might be paginated)
  - `GET /resource_name/:id` - Show a single instance of the resource, `:id` here is a placeholder for the id of the instance of the entity we're looking for
- Update
  - `GET /resource_name/:id/edit` - Edit form, preloaded with data from our data store
  - `PUT/POST /resource_name/:id` - Handles updating the appropriate element in the data store
- Delete
  - `DELETE /resource_name/:id` - Handles the deletion of an element
    > N.B. The idea of deletion here is not the same as deleting an element from the data store. This could also mean something such as "archiving" where we just won't display this instance anymore in the list or show views, but we still keep the data in our store.

## Example Application


### Create

#### `GET /dogs/new`

Shows a form to collect information to create a new resource (dog)

#### `POST /dogs`

Takes in a form body and creates a dog in our database

### Read

#### `GET /dogs`

Index route, displays all dogs

#### `GET /dogs/:id`

Show route, display info for a single dog

### Update

#### `GET /dogs/:id/edit`

Show a form preloaded with the data from our database

#### `PUT/PATCH /dogs/:id`

Reads info from the form body and updates the resource in our database

### Delete

#### `DELETE /dogs/:id`

Deletes the given resource from our database
