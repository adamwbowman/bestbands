Router.route('/', function () {
	this.render('mobile', {
		// data: function () { 
		// 	return Items.findOne({_id: this.params._id}) 
		// }
	});
});
Router.route('/admin', function () {
	this.render('admin', {
		// member: function () {
		// 	console.log( Members.find({}).count() ); 
		// 	return Members.find({}).fetch(); 
		// }
	});
});