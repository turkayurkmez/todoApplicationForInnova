import { Component } from '@angular/core';

import { TodoItem } from './models/todoItem.model';
import { todoItems } from './models/todoItems.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yapılacaklar Listesi';
  user = 'Türkay Ürkmez';
  //! Dikkat: todoItems bir constant'dır (./models/todoItems.mock)
  todoItems: TodoItem[] = todoItems;
  showAllTasks: boolean = true;

  filter(){
    this.showAllTasks = !this.showAllTasks;
    if (this.showAllTasks) {
      this.todoItems = todoItems;
    }
    else{
      this.todoItems = this.todoItems.filter(x=>!x.isDone);
    }
  
  }

  getButtonText(){
    return this.showAllTasks ? "Sadece yapılacakları göster":"Tümünü Göster";
  }

  addNewAction(action:string){
      console.log(action);
      this.todoItems.push(new TodoItem(action,false));
  }
}

