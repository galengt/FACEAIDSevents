this.makeEvent = function(type, description, date, amountRaised) {
	return new eventInstance(type, description, date, amountRaised);
}

function eventType(type, description) {
	this.type = type;
	this.description = description;
	this.toJson = function() {
		return JSON.stringify(this)
	};
};

function eventInstance(type, description, date, amountRaised) {
	this.type = type;
	this.description = description;
	this.date = date;
	this.amountRaised = amountRaised;
}

eventInstance.prototype = new eventType();