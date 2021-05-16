# How to run

- `npm install`
- `npm start`

# What's inside

- A menu that can navigate to:
  - A Home page
  - An About page
  - A Login page with username ("abc") and password ("123")
- A footer
- All components are designed with reusability consideration.

# Testing

- Run `npm test` for unit tests
- Table below lists all 17 test cases:

|   Unit  |   Test Case               |
|---------|---------------------------|
| Home    |   renders without crashing |
|         |  matches snapshot           |
| Menu    |   reders without crashing    |
|         |   matches snapshot            |
|About    |   renders without crashing |
|         |   displays the title "About Us" correctly|
|         |   matches snapshot        |
|Login    |   renders without crashing|
|         |   matches snapshot        |
|         |   form can be submitted     |
| Welcome |   renders without crashing  |
|         |   renders welcome page correcly|
| Cruise |   renders without crashing|
|         |  Display the elements correctly:<br>- The titles of columns are correct<br>- The third item of the first column is "Software"<br>- The fourth item of the fourth column is "Partnership"|
|         |   matches snapshots | 
| App     |   renders homepage |
|         |   matches snapshot|
