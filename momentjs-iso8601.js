(function(){
	var moment = (typeof require === 'undefined') ? this.moment : require('moment');
	var iso8601 = /^P(?:([0-9]+W)|([0-9]+Y)?([0-9]+M)?([0-9]+D)?(?:T([0-9]+H)?([0-9]+M)?([0-9]+S)?([0-9]+Z)?)?)$/;
	moment.duration.fromISOString = function(text){
		var matches = text.match(iso8601);
		if (matches === null) {
			throw '"' + text + '" is not a valid ISO 8601 duration';
		}
		return moment.duration({
			weeks: parseInt(matches[1], 10),
			years: parseInt(matches[2], 10),
			months: parseInt(matches[3], 10),
			days: parseInt(matches[4], 10),
			hours: parseInt(matches[5], 10),
			minutes: parseInt(matches[6], 10),
			seconds: parseInt(matches[7], 10),
			milliseconds: parseInt(matches[8], 10)
		});
	};
	moment.duration.fn.toReadableString = function(string){
		return string.replace('H', this.hours()).replace('m', this.minutes())
	};
}(this));