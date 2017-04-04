---
title: Implementing Data Structures in C
tags:
- documentation
- c
- cs 107
slug: implementing-data-structures-in-c
---

Building off of my previous post, {% post_link reflections-as-a-cs-107-course-assistant "Reflections as a CS107 Course Assistant" %}, I thought it would be instructive for me to write some of my own data structures from "scratch" using C. As part of the CS 107 curriculum, students are expected to implement a dynamically-sized vector and a map (using an underlying hash table implementation). These two data structures are called CVector and CMap. While I won't be implementing those data structures (for obvious reasons), I am planning on implementing the following:

### Data Structures to Implement

- Doubly Linked List (modeled off [Pintos]()'s linked list interface)
- Stacks
- Queues
- Priority queue
- Binary Tree/BST
- Heap

Let's begin by going over how to write a Makefile

## Writing a Makefile

So interestingly enough, I had never written a `Makefile` before now. The `Makefile`s have always been provided by my assignments and I thought it would be instructive to go over the basic components of a `Makefile` and see how I can apply them to my own project. 

### The Basics

Simply put, a `Makefile` consists of a series of _rules_ which consists of three parts:

1. the _target_: The target 
2. _prerequisites_:
3. a _recipe_:



### Creating a C library (code archive)



### References

1. [Make guide](https://web.stanford.edu/class/archive/cs/cs107/cs107.1174/guide_make.html) provided on the CS 107 website
2. Managing Projects with GNU Make, 3rd Edition
3. [GNU Make](https://www.gnu.org/software/make/manual/make.html)

## Use of `void *`

As in the class CS 107, I'll be using a `void *` approach to provide a "generic" data structure interface. I elected to use this approach (rather than some trick with the preprocessor or to use a macro helper function) primarily because I am familiar with writing generic interfaces. Additionally, I would say that it's worth understanding how `void *`'s can be used within the context of generic interfaces as well as generic functions (think of `qsort` or `bsearch`).

As for another possible implementation, I'll think about trying to the "generic" interface with the use of a macro helper function (much like how Pintos achieves generic data structures).

It is also worth going over caveats behind using a `void *` approach.

### What's wrong with `void *`'s?

1. A lack of type safety when using `void *`'s

2. 

### References

## General References

1. GNU reference for ["variable-length" arrays](https://gcc.gnu.org/onlinedocs/gcc/Zero-Length.html) (really zero-length arrays)


