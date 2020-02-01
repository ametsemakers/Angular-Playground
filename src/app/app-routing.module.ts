import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectiveAngularComponent } from './directive-angular/directive-angular.component';
import { TypageAngularComponent } from './typage-angular/typage-angular.component';
import { ExpressionComponent } from './expression-component/expression.component';
import { ConnectionApiComponent } from './connection-api/connection-api.component';
import { TextColorComponent } from './text-color/text-color.component';
import { ShoppingParentComponent } from './shopping-parent/shopping-parent.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserViewComponent } from './user-view/user-view.component';
import { TableTestComponent } from './table-test/table-test.component';


const routes: Routes = [
  { path: 'todo-list', component: TodoListComponent },
  { path: 'directive-angular', component: DirectiveAngularComponent },
  { path: 'typage-angular', component: TypageAngularComponent },
  { path: 'expression-component', component: ExpressionComponent },
  { path: 'connection-api', component: ConnectionApiComponent },
  { path: 'text-color', component: TextColorComponent },
  { path: 'shopping-parent', component: ShoppingParentComponent },
  { path: 'user-view', component: UserViewComponent },
  { path: 'table-test', component: TableTestComponent },
  { path: '**', redirectTo: 'directive-angular' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
