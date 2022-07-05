---
sidebar_position: 1
title: Create an Event
---

# Event Basics

Events are made very easy in Captain 2.0. Opening up the Captain folder, Look for the `src/Events` folder. It will be the container for any Discord based events we may need to use.

The barebones event `Ready.cs` is available as well, However an example event is also available at the bottom of this mini guide.

## Creating an Event

Event creation is relatively painless. I included a mini step list below you can follow.

1. Create a file with the format: `{Event Name}.cs` in the folder `src/Events`
2. Taking the file class, Inherit the `IEvent` interface. *For basics of inheritance, check out this* [page](../snippits/inheritance.md)
3. Add all of the contained interface methods *Visual Studio and Rider both have autofill to put these in yourself*
4. Add the following line to the Init method `client.{Event} += OnEvent;`. *Replace {Event} with the Discord Event Name*
5. Edit the `OnEvent()` method to include the functionality you want to happen when the event occurs. Make sure that the `return Task.CompletedTask;` line, is the final line in the function.

## Modifying Functions

Some events take in certain arguments for the `OnEvent()` Method. Make sure you change it to gain the added information some events will provide to you.

:::caution
You can not change the Init function or add any parameters that are not for that event specifically or the function will break.
:::

## Disabling Events

There is an enabled attribute you can add to a function that allows you to disable an event completely. If you place the `[DisableEvent]` on the Event class, that event will not be loaded. The baseline example below does include the disable event attribute, however if you remove it, it will return itself to running.

```cs
using Cap.lib.Attributes;
using Cap.lib.Interfaces;
using Discord.WebSocket;

namespace Cap.Events;

[DisableEvent]
public class Ready : IEvent
{
    public void Init(DiscordSocketClient client)
    {
        client.Ready += OnEvent;
    }

    public Task OnEvent()
    {
        Console.WriteLine("Hi");

        return Task.CompletedTask;
    }
}
```