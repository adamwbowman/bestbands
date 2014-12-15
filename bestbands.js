Bands = new Meteor.Collection("Bands");



if (Meteor.isClient) {

	Template.mobile.helpers({
		band: function () {
			return Bands.find({}).fetch();
		}
	});

	Template.mobile.events({
		'click .card': function () {
			Bands.update(this._id, {$inc: {score: 1}});
		}
	});



	Template.admin.helpers({
		band: function () {
			return Bands.find({}).fetch();
		},
		multiply: function () {
			return (this.score * 10);
		}
	});

}



if (Meteor.isServer) {

}