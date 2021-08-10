Remaking the Angular exercise.

Smooth start, but first issue with the FormsModule ngModel. Had some syntax issues I wasted quite some time to fix (NgModel instead of ngModel).

Weird issue : when I named my languagearray in app.component.ts languageArr I constantly got the "property not found on app.component.ts"
error. No issues after renaming the property to languageOptions. Hello Angular?

Useful tools in Angular :

*ngFor : a directive used to loop over an array, eg for different select options. Basically Angular's way of ForEach, mostly used in the template 
side of things.

Binding the input data to the form : We use the FormsModule for this. Import and add it to app.module.ts
Important stuff here: #formName="ngForm" -> binds all data in the form to a var formName we can use.
#inputName="ngModel" ngModel to bind the inputs to ngModel?
Important to note we need a name attribute or it wont work.

{{ formName.value | json }} -> this to check if the data is bound.
