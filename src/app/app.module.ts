import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { HomeComponent } from './components/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { TrimPipe } from './Pipes/custom-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Headers } from './interceptors/headers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop'; 
import { ListComponent } from './components/list.component';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { DraggableComponent } from './components/draggable/draggable.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RxjsComponent } from './rxjs\'/rxjs/rxjs.component';
import { ChangeColorDirective } from './directive/change-color';
import { MulitfileComponent } from './components/mulitfile/mulitfile.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DynamicformComponent } from './components/dynamicform/dynamicform.component';
import { MultiformComponent } from './components/multiform/multiform.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormFields } from './directive/form-fields-directive';
import { MyFormComponent } from './components/form/form.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { MatIconModule } from '@angular/material/icon';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { KanbanboardComponent } from './components/kanbanboard/kanbanboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    HomeComponent,
    TrimPipe,
    ListComponent,
    DraggableComponent,
    FormValidationComponent,
    RxjsComponent,
    ChangeColorDirective,
    MulitfileComponent,
    SpinnerComponent,
    DynamicformComponent,
    MultiformComponent,
    FormFields,
    MyFormComponent,
    FormReactiveComponent,
    KanbanboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    AgChartsAngularModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbDropdownModule,
    MatIconModule,
    NgbCollapseModule,
    NgbAccordionModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:Headers,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
