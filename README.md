# Persian-Calendar
A javascript class for persian calendar

'Shamsi' work same as 'Date'

# Methods
getDate()
Returns the day of the month (1–31) for the specified date according to local time.

getDay()
Returns the day of the week (0–6) for the specified date according to local time.

getFullYear()
Returns the year (4 digits for 4-digit years) of the specified date according to local time.

getHours()
Returns the hour (0–23) in the specified date according to local time.

getMilliseconds()
Returns the milliseconds (0–999) in the specified date according to local time.

getMinutes()
Returns the minutes (0–59) in the specified date according to local time.

getMonth()
Returns the month (0–11) in the specified date according to local time.

getSeconds()
Returns the seconds (0–59) in the specified date according to local time.

getTime()
Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times.)

getTimezoneOffset()
Returns the time-zone offset in minutes for the current locale.

getUTCDate()
Returns the day (date) of the month (1–31) in the specified date according to universal time.

getUTCDay()
Returns the day of the week (0–6) in the specified date according to universal time.

getUTCFullYear()
Returns the year (4 digits for 4-digit years) in the specified date according to universal time.

getUTCHours()
Returns the hours (0–23) in the specified date according to universal time.

getUTCMilliseconds()
Returns the milliseconds (0–999) in the specified date according to universal time.

getUTCMinutes()
Returns the minutes (0–59) in the specified date according to universal time.

getUTCMonth()
Returns the month (0–11) in the specified date according to universal time.

getUTCSeconds()
Returns the seconds (0–59) in the specified date according to universal time.

getYear()
Returns the year (usually 2–3 digits) in the specified date according to local time. Use getFullYear() instead.

setDate()
Sets the day of the month for a specified date according to local time.

setFullYear()
Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.

setHours()
Sets the hours for a specified date according to local time.

setMilliseconds()
Sets the milliseconds for a specified date according to local time.

setMinutes()
Sets the minutes for a specified date according to local time.

setMonth()
Sets the month for a specified date according to local time.

setSeconds()
Sets the seconds for a specified date according to local time.

setTime()
Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC. Use negative numbers for times prior.

setUTCDate()
Sets the day of the month for a specified date according to universal time.

setUTCFullYear()
Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time.

setUTCHours()
Sets the hour for a specified date according to universal time.

setUTCMilliseconds()
Sets the milliseconds for a specified date according to universal time.

setUTCMinutes()
Sets the minutes for a specified date according to universal time.

setUTCMonth()
Sets the month for a specified date according to universal time.

setUTCSeconds()
Sets the seconds for a specified date according to universal time.

setYear()
Sets the year (usually 2–3 digits) for a specified date according to local time. Use setFullYear() instead.

toDateString()
Returns the "date" portion of the Date as a human-readable string like 'Thu Apr 12 2018'.

toISOString()
Converts a date to a string following the ISO 8601 Extended Format.

toJSON()
Returns a string representing the Date using toISOString(). Intended for use by JSON.stringify().

toGMTString()
Returns a string representing the Date based on the GMT (UTC) time zone. Use toUTCString() instead.

toLocaleDateString()
Returns a string with a locality sensitive representation of the date portion of this date based on system settings.

toLocaleString()
Returns a string with a locality-sensitive representation of this date. Overrides the Object.prototype.toLocaleString() method.

toLocaleTimeString()
Returns a string with a locality-sensitive representation of the time portion of this date, based on system settings.

toString()
Returns a string representing the specified Date object. Overrides the Object.prototype.toString() method.

toTimeString()
Returns the "time" portion of the Date as a human-readable string.

toUTCString()
Converts a date to a string using the UTC timezone.

valueOf()
Returns the primitive value of a Date object. Overrides the Object.prototype.valueOf() method.
/////////////////////////////////////////////////////

format letters

d - The day of the month (from 01 to 31)

D - A textual representation of a day (three letters)

j - The day of the month without leading zeros (1 to 31)

l (lowercase 'L') - A full textual representation of a day

N - The ISO-8601 numeric representation of a day (1 for Monday, 7 for Sunday)

S - The Persian textual the day of the month

w - A numeric representation of the day (0 for Saturday, 6 for Friday)

z - The day of the year (from 1 through 366)

F - A full textual representation of a month (Farvardin through Isfand)

m - A numeric representation of a month (from 01 to 12)

M - A short textual representation of a month (three letters)

n - A numeric representation of a month, without leading zeros (0 to 11)

t - The number of days in the given month

L - Whether it's a leap year

Y - A four digit representation of a year

y - A two digit representation of a year

a - Lowercase am or pm

A - Uppercase AM or PM

g - 12-hour format of an hour (1 to 12)

G - 24-hour format of an hour (0 to 23)

h - 12-hour format of an hour (01 to 12)

H - 24-hour format of an hour (00 to 23)

i - Minutes with leading zeros (00 to 59)

s - Seconds, with leading zeros (00 to 59)

u - Microseconds with leading zeros (00 to 1000)

# Examples
```
d = new Shamsi('2018-01-01');
d.format('Y-m-d')
```
```
d = new Shamsi();
d.getDate()
```
