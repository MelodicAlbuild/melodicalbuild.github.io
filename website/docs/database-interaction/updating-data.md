---
sidebar_position: 4
title: Updating Data
---

# Updating Data

Updating Data is Almost Easier than Creating Data

## BsonDocument Updates

We return to the builders! Updates are done through the same builder `Builders<BsonDocument>.Update.Set("field name", value)`.

## Applying a Single Update

If you are only trying to apply one update, It's very simple, The method `UpdateDocumentInCollection(IMongoCollection<BsonDocument> collection, FilterDefinition<BsonDocument> filter, UpdateDefinition<BsonDocument> update)` allows you to update a document that matches that filter with the [update data](#bsondocument-updates) you made before.

## Applying Many Updates

Let's say you want to update multiple fields at once. It's slightly more complicated. I'll put it in a list first.

1. Make a List of UpdateDefinitions
2. Add each individual UpdateDefinition you want to make to the List
3. Using the Update Method, Create an UpdateDefinition that uses the Combine method base

Ok sounds complex right? It's not I promise. Lets start by making that list, Said list should be of type `List<UpdateDefinition<BsonDocument>>` Then let's add a few fields with `List<>.Add(UpdateDefinition<BsonDocument>)`, Finally let's combine them all together with a `Builders<BsonDocument>.Update.Combine(List<>)`. Once you do that you can use that same Update function from applying a single update, just use that final update method instead.

## Full Examples

### Single Update
```cs
collection as IMongoCollection<BsonDocument>
user as SocketGuildUser

DatabaseController._instance.UpdateDocumentInCollection(collection, Builders<BsonDocument>.Filter.Eq("userId", user.Id), Builders<BsonDocument>.Update.Set("username", "Clown"));
```

### Multi Update
```cs
collection as IMongoCollection<BsonDocument>
user as SocketGuildUser

List<UpdateDefinition<BsonDocument>> updateList = new List<UpdateDefinition<BsonDocument>>();
updateList.Add(Builders<BsonDocument>.Update.Set("username", "Clown"));
updateList.Add(Builders<BsonDocument>.Update.Set("discriminator", "1238"));
DatabaseController._instance.UpdateDocumentInCollection(collection, Builders<BsonDocument>.Filter.Eq("userId", user.Id), Builders<BsonDocument>.Update.Combine(updateList));
```