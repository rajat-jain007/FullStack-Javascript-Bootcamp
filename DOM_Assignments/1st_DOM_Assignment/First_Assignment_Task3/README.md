# Task-03

**Get back placeholder value(search) and footer icon and hide the li value(hire me)**

![task-03-img](./task3Output.png)

**Solution:**

```
const value = document.getElementsByTagName("li");
value[2].innerText = "Projects";

const value2 = document.getElementsByTagName("span");
value2[2].innerText = "an Employee";
value2[3].innerText = "iNeuron Intelligence Pvt Ltd";
```
