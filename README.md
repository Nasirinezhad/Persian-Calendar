# Persian-Calendar
A javascript class for persian calendar
'Shamsi' work same as 'Date'

# Methods
calculatTime(Timestamp)	    This method calculat persian date

getFullYear()	    Get the year as a four digit number (yyyy)

getYearIsLeap()	    Get the year is a leap year or no (boolean)

getMonth()	        Get the month as a number (0-11)

getMonthName()	    Get the month name as a string (in persian)

getMonthDays()	    Get the total of month days as a number (29, 30, 31)

getDate()    	    Get the day as a number (1-31)

getDateName()    	Get the Persian textual the day of the month (in persian)

getHours()   	    Get the hour (0-23)

getMinutes()	        Get the minute (0-59)

getSeconds()	        Get the second (0-59)

getMilliseconds()	Get the millisecond (0-999)

getTime()	        Get the time (milliseconds since 1 Farvardin , 1396)

getDay()	            Get the weekday as a number (0-6)

getDayName()	        Get the weekday name as a string (in persian)

getDayShortName()	Get the weekday short name as a string (in persian)

format()             Get the date in a custom format

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
```d = new Shamsi('2018-01-01');
d.format('Y-m-d')```
