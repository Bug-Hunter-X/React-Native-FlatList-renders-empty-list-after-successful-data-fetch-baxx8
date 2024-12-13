# React Native FlatList Empty List Bug

This repository demonstrates a bug where a React Native FlatList component renders an empty list despite successfully fetching data from a simulated network request. The issue is intermittent and not consistently reproducible.

## Bug Description

A FlatList is used to display a list of items.  A network request (simulated with a timeout) fetches the data.  The Loading state displays correctly, but after data is received, the FlatList is empty. This is inconsistent; sometimes it works as expected.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run the app on a simulator or device.
4. Observe the intermittent failure of the FlatList to display the fetched data.

## Solution

The solution involves ensuring that the state updates trigger a re-render of the FlatList.