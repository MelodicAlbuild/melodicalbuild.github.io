---
sidebar_position: 2
title: Reading Data
---

# Reading Data

Reading Data out of the MongoDB Instance is pretty easy, Taking what you learned in the basics of interaction *Links to which can be found* [here](./basics.md) you can read any data you see fit out of the collection.

## BsonDocument

All of the MongoDB data is stored in a BsonDocument format. Luckily I made a lovely conversion method you can use, That I will demonstrate below. Import `Cap.lib.classes` to gain access to these implementations.

### BsonDocument Filters

Making Filters is slightly more complicated than I intended however, I will try to explain it the best I can here.

#### BsonDocument Builder

The Builder is the Core of Filters and Updates, To use the BsonDocument Builder the keywords are `Builders<BsonDocument>` and will expand from there.

### BsonDocument Filters cont.

The Builder in hand, a filter is as simple as `Builders<BsonDocument>.Filter.Eq("field name", value);` where Eq stands for Equals. There are a million other operations I don't feel like listing out but they are options. Just replace the field name with what field you want to check *The MongoDB name* and fill the value with the comparitor.

## Reading Documents

### All Documents

To read all the Documents in a collection, you're gonna need a couple of tools, However it has been heavilty simplified for you. The method `GetAllDocumentsInCollection(IMongoCollection<BsonDocument> collection)`. You can iterate over this method with the `foreach` keyword and you have every document in the collection. Keep in mind they are still serialized as `BsonDocument`s.

### A Single Document

To read a single document, There is a simple method again, `GetDocumentInCollection(IMongoCollection<BsonDocument> collection, FilterDefinition<BsonDocument> filter)` That filter is the same as the filter discussed above in [this section](#bsondocument-filters). This Method Returns a `BsonDocument` However it can be easily stripped.

#### Serialization

To pull apart the BsonDocument, We need to convert it to a C# class. Luckily I made those for you `Cap.lib.classes`. To pull a BsonDocument apart use the method `BsonSerializer.Deserialize<ClassName>(BsonDocument document);` The class name chart can be found below:

| Collection | C# Class |
| ---------- | -------- |
| Guilds | Cap.lib.classes.Guild |
| Users | Cap.lib.classes.User |
| Xp | Cap.lib.classes.XP |

Now you can interact with this data.

:::info
Keep in mind, Changing this data does not affect the database data
:::