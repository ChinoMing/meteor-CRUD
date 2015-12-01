Data = new Mongo.Collection("tasks");

if (Meteor.isClient) {
    Template.body.helpers({
        hellos: function () {
            return Data.find({});
        }
    });

    Template.body.events({
        'submit .new-task': function (event) {
            event.preventDefault();

            var text = event.target.text.value;

            Data.insert({
                text: text
            });

            event.target.text.value = "";
        },
        'submit .edit': function (event) {
            event.preventDefault();

            var text = event.target.exampleEdit.value;
            
            Data.update(this._id, {
                $set: {
                    text: text
                }
            });
            
            event.target.exampleEdit.value = "";
        },
        'click .delete': function () {
            Data.remove(this._id);
        }
    });
}