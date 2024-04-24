import { TodoList } from "./components/TodoList.js";
import { ROUTE_ALL_TODOS } from "./constant/routes.js";
import { createCustomElement } from "./lib/dom.js";
import { fetchData } from "./lib/fetch.js";

/**
 *  1 - templates
 *  2 - Localstorage (sessionStorage/cookies) => stockage pendant le traiterment
 *  3 - customEvent
 *  4 - animate() => ~ keyframes
 *  5 - intersectionObserver => API
 *  6 - vite.js => javascript
 */

try {
  const todoListTab = await fetchData({ route: ROUTE_ALL_TODOS });

  // const getLocalStorageTodos = localStorage.getItem('todos-list');
  // const todoListTab = JSON.parse(getLocalStorageTodos);
  // console.log(getLocalStorageTodos);
  console.log(todoListTab);
  const todoList = document.querySelector("#todolist");
  const list = new TodoList(todoListTab);
  list.appendTo(todoList);
} catch (error) {
  const alertFetch = createCustomElement({
    tagName: "div",
    attributes: {
      class: "alert alert-danger m-2",
      role: "alert",
    },
  });
  alertFetch.innerText = "Impossible de charger la  liste";
  document.body.prepend(alertFetch);
  console.log(error);
}
