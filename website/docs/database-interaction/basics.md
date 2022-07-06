---
sidebar_position: 1
title: Basics
---

# Basics

There are a couple of core concepts in the MongoDB Database System I will cover here instead of every time we use them later, Make sure to read this in it's entirety before proceeding.

:::warning
My Implementation of MongoDB does NOT have any Null Pointer Protection by itself, make sure to check for any and all null possibilities yourself.
:::

## Database Core

The Database is always started by default, So you can use the call `DatabaseController._instance` to access the `DatabaseController` at any point that you see fit. All of the methods you will end up calling will be prefaced with `DatabaseController._instance.{Method}` just replace {Method} with the information below. Please refrain from altering the `_instance` variable.

### Selecting Databases

MongoDB supports a multi-database structure, so step one of every call is to define your database. The method for this is `GetDatabase(string name)`.<br/>
That Method returns an `IMongoDatabase`. This database is basically required for everything else in the MongoDB structure, Keep it around.

:::info
Feel Free to Call `GetDatabase()` as many times as you want, It has a cache system so it's not redundant :)
:::

### Selecting Collections

MongoDB uses Collections instead of Tables. You can use the word interchangeable and it should be understood. The method for selecting a collection is `GetCollection(IMongoDatabase database, string name)`.<br/>
That Method returns an `IMongoCollection<BsonDocument>`. This collection is where you will play with documents, Inserting, Reading, or Updating, It's all done here.

:::info
Feel Free to Call `GetCollection()` as many times as you want, It has a cache system so it's not redundant :)
:::

### Listing Databases

:::caution
This Feature is Untested and Potentially Dangerous to the Database and Bot Itself, Proceed with Caution
:::

You can list all of the databases in the cluster with `ListDatabases()` which returns a list of `BsonDocument` that have all of the database information. Modifying any of this data can result in a loss of that database and potentially the cluster. Proceed with Caution.

## Full Implementation Example

```cs
public static void SelectADatabase() {
    IMongoDatabase database = DatabaseController._instance.GetDatabase("test");
    IMongoCollection<BsonDocument> collection = DatabaseController._instance.GetCollection(database, "base");

    foreach(BsonDocument doc in DatabaseController._instance.ListDatabases()) {
        Console.WriteLine(doc);
    }
}