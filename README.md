Remaking the Angular exercise.

Smooth start, but first issue with the FormsModule ngModel. Had some syntax issues I wasted quite some time to fix (NgModel instead of ngModel).

Weird issue : when I named my languagearray in app.component.ts languageArr I constantly got the "property not found on app.component.ts"
error. No issues after renaming the property to languageOptions. Hello Angular?

Useful tools in Angular :

#variable are known as template variables we can use in html in angular.

*ngFor : a directive used to loop over an array, eg for different select options. Basically Angular's way of ForEach, mostly used in the template 
side of things. Directives are used to manipulate the DOM.

Binding the input data to the form : We use the FormsModule for this. Import and add it to app.module.ts
Important stuff here: #formName="ngForm" -> binds all data in the form to a var formName we can use.
#inputName="ngModel" ngModel to bind the inputs to ngModel?
Important to note we need a name attribute or it wont work.

{{ formName.value | json }} -> this to check if the data is bound. Basically display the props on the form in JSON format.

DISCLAIMER : data wasnt bound to model yet. First we needed to make a Friend class, instantiate a friendModel from it in app.compontent.ts
and then do [(ngModel)]="friendModel.propertyName". Only then is our data really bound to the model.

Property binding : 1 way binding , from the component to the view,

What we want is 2 way binding! C to V and V to C

2 way binding syntax in Angular : [()], and we can use the directive ngModel,so [(ngModel)], we bind our fields to the ngModel property
we need to import since ngModel isnt a known property on Input so we need a dependency.

WARNING : forgot to change #inputname template variables to my actual property names. Because of this I was struggling with form validation.
<input  required [class.error]="firstName.invalid && firstName.touched" type="text" name="firstname" #firstName="ngModel" [(ngModel)]="friendModel.firstName"/>

is what we want

<input  required [class.error]="friendModel.firstName.invalid && firstName.touched" type="text" name="firstname" #inputName="ngModel" [(ngModel)]="friendModel.firstName"/>

is what we had. Make sure to change the #inputName so we can use the properties!

Dont use the function keyword when adding methods in the AppComponent class. Just the name.

the 'backend' side of things.
(onSubmit)="" is basically an eventlistener and fires the value (a function usually) on submit. For example console logging the friendModel data.

Services : we use services to add stuff to our server, in this case our friend

first order of business is making an addFriend services and setting up the necessary stuff
to do http requests, importing HttpClient module etc...

WARNING: import HttpClientModule, but use HttpClient when typehinting! Had some bizarre mix and it messed up everything.
Fetch: remember to add the property allFriends in the AppComponent class!
