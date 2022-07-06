---
sidebar_position: 3
title: Creating Data
---

# Creating Data

Creating Data is extrememly painless for this. I managed to simplify it quite a bit.

## Generating Data

To Generate your data in a format that can be inserted into the database we need to make it out of the 3 core classes for the Database. *Once more, Here's the chart*

| Collection | C# Class |
| ---------- | -------- |
| Guilds | Cap.lib.classes.Guild |
| Users | Cap.lib.classes.User |
| Xp | Cap.lib.classes.XP |

To input this data we need to do something a little odd, but I promise it will make sense in a moment.

:::info
For the sake of this documentation, I will only be doing the Cap.lib.classes.User class. The others work in roughly the same way, just different variables
:::

### Creating the Class

Class creation is the same as always `User user = new User()` note the missing semi-colon. This is where we hit a little snag with C# that allows me to save serialization time. To continue on in the creation we have to modify this data a little, not through a constructor and the parenthesis however, through brackets! Your initial statement should now look like this `User user = new User() {};` Now just fill in the Variables in the Brackets and you have a filled in class! *Example Below*

```cs
user as SocketGuildUser

List<Role> roleArray = new List<Role>();
foreach (var role in user.Roles)
{
    roleArray.Add(new Role() { CatchAll = null, id = (long)role.Id, name = role.Name});
}

User userdata = new User() { _id = new BsonObjectId(new ObjectId()), CatchAll = null, discriminator = user.Discriminator, name = user.DisplayName, roles = roleArray.ToArray(), joinedAt = user.JoinedAt.ToString()!, isModerator = user.Roles.Contains(IGuild.GetRole(12345678910111213)), userId = (long)user.Id};
```

## Inputting Data

:::warning
Updating Data is COMPLETELY DIFFERENT. Do not attempt to update a document with this method.
:::

The method to input data is `CreateDocumentInCollection(IMongoCollection<BsonDocument> collection, BsonDocument doc)`. Now you may notice that something isn't quite right here... And you'd be correct. The data we made is of the User class, Not the BsonDocument class. This is a simple fix, All we need is a little finesse.

### Generating a Blank Document

First off we need a blank document, To make one, just instantiate a BsonDocument. `BsonDocument document = new BsonDocument();`

### Writing to this Document

Now we need to convert the `userdata` to a BsonDocument *Hopefully the one we just made* Luckily theres a method for that.
`BsonSerializer.Serialize(new BsonDocumentWriter(BsonDocument document), Type data);`

### Inserting the Data into the Database

Now that we have converted the User class into a BsonDocument, We can insert the data with the method above. Once that's run, Boom, It's in your database!

## Full Example

```cs
user as SocketGuildUser

IMongoDatabase database = DatabaseController._instance.GetDatabase("test");
IMongoCollection<BsonDocument> collection = DatabaseController._instance.GetCollection(database, "base");

List<Role> roleArray = new List<Role>();
foreach (var role in user.Roles)
{
    roleArray.Add(new Role() { CatchAll = null, id = (long)role.Id, name = role.Name});
}

User userdata = new User() { _id = new BsonObjectId(new ObjectId()), CatchAll = null, discriminator = user.Discriminator, name = user.DisplayName, roles = roleArray.ToArray(), joinedAt = user.JoinedAt.ToString()!, isModerator = user.Roles.Contains(IGuild.GetRole(12345678910111213)), userId = (long)user.Id};

BsonDocument doc = new BsonDocument();

BsonSerializer.Serialize(new BsonDocumentWriter(doc), userdata);

DatabaseController._instance.CreateDocumentInCollection(collection, doc);
```