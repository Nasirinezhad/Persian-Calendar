// getFullYear()	    Get the year as a four digit number (yyyy)
// getYearIsLeap()	    Get the year is a leap year or no (boolean)
// getMonth()	        Get the month as a number (0-11)
// getMonthName()	    Get the month name as a string (in persian)
// getMonthDays()	    Get the total of month days as a number (29, 30, 31)
// getDate()    	    Get the day as a number (1-31)
// getDateName()    	Get the Persian textual the day of the month (in persian)
// getHours()   	    Get the hour (0-23)
// getMinutes()	        Get the minute (0-59)
// getSeconds()	        Get the second (0-59)
// getMilliseconds()	Get the millisecond (0-999)
// getTime()	        Get the time (milliseconds since 1 Farvardin , 1396)
// getDay()	            Get the weekday as a number (0-6)
// getDayName()	        Get the weekday name as a string (in persian)
// getDayShortName()	Get the weekday short name as a string (in persian)
// format()             Get the time in custom format
// /////////////////////////////////////////////////////
// format letters
////////////////
// d - The day of the month (from 01 to 31)
// D - A textual representation of a day (three letters)
// j - The day of the month without leading zeros (1 to 31)
// l (lowercase 'L') - A full textual representation of a day
// N - The ISO-8601 numeric representation of a day (1 for Monday, 7 for Sunday)
// S - The Persian textual the day of the month
// w - A numeric representation of the day (0 for Saturday, 6 for Friday)
// z - The day of the year (from 1 through 366)
// F - A full textual representation of a month (Farvardin through Isfand)
// m - A numeric representation of a month (from 01 to 12)
// M - A short textual representation of a month (three letters)
// n - A numeric representation of a month, without leading zeros (0 to 11)
// t - The number of days in the given month
// L - Whether it's a leap year
// Y - A four digit representation of a year
// y - A two digit representation of a year
// a - Lowercase am or pm
// A - Uppercase AM or PM
// g - 12-hour format of an hour (1 to 12)
// G - 24-hour format of an hour (0 to 23)
// h - 12-hour format of an hour (01 to 12)
// H - 24-hour format of an hour (00 to 23)
// i - Minutes with leading zeros (00 to 59)
// s - Seconds, with leading zeros (00 to 59)
// u - Microseconds with leading zeros (00 to 1000)

class Shamsi {
    constructor(year, month, day, hours, minutes, seconds, milliseconds){
        if(typeof year == 'number'){
            if (typeof month == 'number') {
                this.GDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);
            }else{
                this.GDate = Date(year);
            }
        }
        if(typeof year == 'string'){
            this.GDate = new Date(year);
        }
        if (typeof this.GDate == 'undefined' || !this.GDate) {
            this.GDate = new Date();
        }
        this.PTimeStamp = this.GDate.getTime() - 1490041861000;
        this.calculatTime (this.PTimeStamp);
    }

    calculatTime (t) {
        //let t = this.PTimeStamp;
        this.milliseconds = t%1000;
        t = (t-this.milliseconds)/1000;
        this.seconds = t%60;
        t = (t-this.seconds)/60;
        this.minutes = t%60;
        t = (t-this.minutes)/60;
        this.hours = t%24;
        t = (t-this.hours)/24;
        this.day = (3 + t)%7;
        let ty = Math.floor(t/365);
        let tl = Math.floor(ty/4);// total of leap years
        t -= tl;
        this.dayofyear = t%365 + 1;
        this.year = 1396+Math.floor(t/365);
        if (this.dayofyear > 186) {
            this.month = 6 + Math.floor((this.dayofyear - 186)/30);
            this.date = this.dayofyear - (6 + this.month*30);
        }else{
            this.month = Math.floor(this.dayofyear/31);
            this.date = this.dayofyear - (this.month*31);
        }
        this.hours++;
        this.minutes++;
        this.seconds++;
        this.milliseconds++;
    }

    getFullYear(){
        return this.year;
    }
    getYearIsLeap(){
        return (this.year%4 == 3);
    }
    getMonth(){
        return this.month;
    }
    getMonthName(){
        let names = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];
        return names[this.month];
    }
    getMonthDays(){
        if(this.month < 6){
            return 31;
        }else if(this.month == 11){
            return (this.year%4 == 3 ? 30:29)
        }else{
            return 30;
        }
    }
    getDate(){
        return this.date;
    }
    getDateName(){
        let names = {
            '1': 'یکم',
            '2': 'دوم',
            '3': 'سوم',
            '4': 'چهارم',
            '5': 'پنجم',
            '6': 'ششم',
            '7': 'هفتم',
            '8': 'هشتم',
            '9': 'نهم',
            '10': 'دهم',
            '11': 'یازدهم',
            '12': 'دوازدهم',
            '13': 'سیزدهم',
            '14': 'چهاردهم',
            '15': 'پانزدهم',
            '16': 'شانزدهم',
            '17': 'هفدهم',
            '18': 'هجدهم',
            '19': 'نوزدهم',
            '20': 'بیست',
            '30': 'سی'
        };
        if (this.date == 1) {
            return 'اول';
        }else if (this.date > 19) {
            let r = this.date%10;
            return names[this.date-r] + (r > 0 ? ' و '+names[r] : 'م');
        }else {
            return names[this.date];
        }
    }
    getHours(){
        return this.hours;
    }
    getMinutes(){
        return this.minutes;
    }
    getSeconds(){
        return this.seconds;
    }
    getMilliseconds(){
        return this.milliseconds;
    }
    getTime(){
        return this.PTimeStamp;
    }
    getDay(){
        return this.day;
    }
    getDayName(){
        let names = ['شنبه','یک شنبه','دوشنبه','سه شنبه','چهارشنبه','پنج شنبه','جمعه'];
        return names[this.day];
    }
    getDayShortName(){
        let names = ['شنبه','یک','دو','سه','چهار','پنج','جمعه'];
        return names[this.day];
    }

    format(str) {
        let result = '';
        for (let i in str) {
            if (str.hasOwnProperty(i)) {
                switch (str[i]) {
                    case 'd':
                        result += (this.date < 10 ? '0'+this.date : this.date);
                        break;
                    case 'D':
                        result += this.getDayShortName();
                        break;
                    case 'j':
                        result += this.date;
                        break;
                    case 'l':
                        result += this.getDaytName();
                        break;
                    case 'N':
                        result += (this.day-2)%7 +1;
                        break;
                    case 'S':
                        result += this.getDateName();
                        break;
                    case 'w':
                        result += this.day;
                        break;
                    case 'z':
                        result += this.dayofyear;
                        break;
                    case 'F':
                        result += this.getMonthName();
                        break;
                    case 'M':
                        result += this.getMonthName().slice(0,3);
                        break;
                    case 'm':
                        result += (this.month < 9 ? '0'+(this.month+1) : this.month+1);
                        break;
                    case 'n':
                        result += this.month;
                        break;
                    case 't':
                        result += this.getMonthDays();
                        break;
                    case 'L':
                        result += this.getYearIsLeap();
                        break;
                    case 'Y':
                        result += this.getFullYear();
                        break;
                    case 'y':
                        result += this.getFullYear().slice(2);
                        break;
                    case 'a':
                        result += (this.hours < 12 ? 'am' : 'pm');
                        break;
                    case 'A':
                        result += (this.hours < 12 ? 'AM' : 'PM');
                        break;
                    case 'a':
                        result += (this.hours < 12 ? 'am' : 'pm');
                        break;
                    case 'g':
                        result += (this.hours%12 ? this.hours%12 : '12');
                        break;
                    case 'G':
                        result += this.hours;
                        break;
                    case 'h':
                        h = (this.hours%12 ? this.hours%12 : 12);
                        result += (h < 10 ? '0'+h : h);
                        break;
                    case 'H':
                        result += (this.hours < 10 ? '0'+this.hours : this.hours);
                        break;
                    case 'i':
                        result += (this.minutes < 10 ? '0'+this.minutes : this.minutes);
                        break;
                    case 's':
                        result += (this.seconds < 10 ? '0'+this.seconds : this.seconds);
                        break;
                    case 'u':
                        result += (this.milliseconds < 10 ? '0'+this.milliseconds : this.milliseconds);
                        break;
                    default:
                        result += str[i];
                        break;
                }
            }
        }
        return result;
    }
}