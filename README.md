# Form Engine

Dynamic form generator built with JavaScript.

## Overview

This project generates HTML forms dynamically based on a JSON schema. It separates structure (data) from rendering (UI), simulating real-world frontend architecture.

## Features

- Dynamic form rendering from JSON
- Required field validation
- DOM manipulation
- Form submission handling
- Data extraction as JavaScript object

## Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)

## How it works

1. JSON defines the form structure
2. JavaScript reads the schema
3. Inputs are created dynamically
4. Validation runs on submit
5. Data is collected and transformed

## Example Schema

```json
[
  {
    "type": "text",
    "label": "Name",
    "name": "name",
    "required": true
  }
]
```
