import ToDoApp from './ToDoApp.js'
import {ToDoFactory} from "./ToDoFactory";
import TodoHtmlCreator from "./TodoHtmlCreator";
import ToDoRepository from "./ToDoRepository";
const faker = require('faker');

const todoApp = new ToDoApp(new ToDoFactory(faker), new TodoHtmlCreator(), new ToDoRepository());
todoApp.render();
