# Task-02

**Hide hire me li and change the button placeholder value**

![project-01-task-02-dom](./task2Output.png)

**Solution:**

```
const value = document.getElementsByTagName("li");
value[2].innerText = "Projects";


document.querySelector("input").placeholder = "Search My Project";
```
