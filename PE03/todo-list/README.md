# ToDo List Application
## Input
Users interact with the application through a text input field where they enter task descriptions. The application accepts user input via keyboard entry into the input field. Users can then click the "Add Task" button to submit their task, or use the "Delete" button next to any existing task to remove it. The input field accepts any non-empty string as a valid task description.

## Process
The application processes tasks using React's state management with both useState and useReducer hooks. When a task is added, the app validates that the input is not empty, then dispatches an ADD_TASK action to the task reducer, which appends the new task to the tasks array. When a delete button is clicked, a DELETE_TASK action is dispatched, filtering out the task by its index. The useEffect hook monitors task changes, logging updates to the console for tracking.

## Output
The application displays all tasks in an unordered list format, with each task rendered as a list item using the TodoList component. Each task shows the task description alongside a "Delete" button for removal. After adding a task, the input field automatically clears, providing visual feedback to the user that their submission was successful. The dynamic rendering ensures the task list updates automatically whenever tasks are added or deleted.