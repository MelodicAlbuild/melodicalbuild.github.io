---
sidebar_position: 5
title: Deleting Data
---

# Deleting Data

There really isn't much to say here sadly, It implements many concepts we've already covered.

## Deleting Documents

To delete a document the method is `DeleteDocumentInCollection(IMongoCollection<BsonDocument> collection, FilterDefinition<BsonDocument> filter)`. This method deletes only the FIRST document found that matches the filter, not all of them.

## Full Example

```cs
collection as IMongoCollection<BsonDocument>
user as SocketGuildUser

DatabaseController._instance.DeleteDocumentInCollection(collection, Builders<BsonDocument>.Filter.Eq("userId", user.Id));
```