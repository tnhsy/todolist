new Vue ({
	el:"#app",
	data: {
        newTodo: "", // the content you write in add input
		completed: Boolean, // toggle the task is complete or not
		content:"", // for getting the todo's content
		editMood: false, // toggle edit
		todoList: [
			{
				task: 'This is an example todo',
				completed: false,
				editMood: false,
			},
			{
				task: 'Have fun here',
				completed: false,
				editMood: false,
			}
		]
	},
	
	methods: {
		addTodo: function() {
			if(this.newTodo) { // only when newTodo inputbox is not empty
				this.todoList.unshift({task: this.newTodo, completed: false, editMood: false}); // push() will add to the last, unshift() will add to the first
                this.newTodo = ''; // remove the content in the newTodo inputbox
			}
		},
		removeTodo: function(todo) {
			this.todoList.splice(this.todoList.indexOf(todo), 1); //use splice(index,len,[item]) to add/delete/replace items in the array, len=1 means only remove 1 item
		},
		completeTodo: function(todo) {
			todo.completed = !todo.completed; // toggle the complete css for *this item*
		},
		editTodo: function(index) {
			this.content = this.todoList[index].task; // get the content of *this item*
			this.todoList[index].editMood = true; // click edit button, toggle on the editMood for *this item*
		},
		editTodoSave: function(index) {
			this.todoList[index].task = this.content; // change *this item*'s content to the new one
			this.todoList[index].editMood = false; // press enter, leave the editMood
		}
	}
});