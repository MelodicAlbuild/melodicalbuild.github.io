---
title: Inheritance
---

# Inheritance

Inheriting Classes and Interfaces is heavily simplified in C# versus many other languages... *Looking at you Java*

## How to Inherit

Inheriting is pretty easy, Just add a `:` after your class name, then put the name of the class/interface you want to inherit.
For example, `MyClass : IClass` this is the basic syntax for inheriting an interface. A full class example is available below.

```cs
public class MyClass : IClass {
    private string name;

    public MyClass(string name) {
        this.name = name;
    }

    public string GetName() {
        return name;
    }

    public string ChangeName(string name) {
        this.name = name;
        return GetName();
    }
}
```