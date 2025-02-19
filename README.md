# MongoDB $inc Operator Error: Negative Quantity Decrement

This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries to decrement a field. The issue arises when attempting to decrement a field below zero, which can lead to unexpected behavior and potentially data inconsistency.

## Problem Description:

The provided JavaScript code uses `db.collection('myCollection').updateOne` with the `$inc` operator to decrement the `quantity` field. The problem occurs when the `quantity` is already zero or negative. Instead of gracefully handling this scenario, the operation executes without preventing the negative quantity, leading to a potential loss of data integrity.

## Solution:

The solution involves adding a conditional check before executing the update operation. If the quantity is less than the decrement value, the update is aborted or modified to prevent negative values.
