import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpressionComponent } from './expression-component/expression.component';
import { DirectiveAngularComponent } from './directive-angular/directive-angular.component';
import { TypageAngularComponent } from './typage-angular/typage-angular.component';
import { ConnectionApiComponent } from './connection-api/connection-api.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TextColorComponent } from './text-color/text-color.component';
import { ShoppingParentComponent } from './shopping-parent/shopping-parent.component';
import { ShoppingChildComponent } from './shopping-parent/shopping-child/shopping-child.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserTableComponent } from './user-view/user-table/user-table.component';
import { UserDetailComponent } from './user-view/user-detail/user-detail.component';
import { UserRowComponent } from './user-view/user-table/user-row/user-row.component';
import { TableTestComponent } from './table-test/table-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageService } from './shared/services/local-storage.service';
import { SortByAgePipe } from './user-view/pipes/sort-by-age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExpressionComponent,
    DirectiveAngularComponent,
    TypageAngularComponent,
    ConnectionApiComponent,
    NavigationComponent,
    TextColorComponent,
    ShoppingParentComponent,
    ShoppingChildComponent,
    TodoListComponent,
    UserViewComponent,
    UserTableComponent,
    UserDetailComponent,
    UserRowComponent,
    TableTestComponent,
    SortByAgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
