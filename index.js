const MonthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
const WeekDays = ['شنبه', 'یک شنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه'];

class Shamsi extends Date {
    constructor(year, month, day, hours, minutes, seconds, milliseconds) {
        if (typeof year === 'number') {
            if (typeof month === 'number') {
                
                this.from(year, month, day, hours, minutes, seconds, milliseconds)
            } else {
                this.PTimeStamp = year - 38349000000;
            }
        }
        if (typeof year === 'string') {
            this.GDate = new Date(year);
            this.PTimeStamp = this.GDate.getTime() - 38349000000;
        }
        if (typeof this.GDate === 'undefined' || !this.GDate) {
            this.GDate = new Date();
            this.PTimeStamp = this.GDate.getTime() - 38349000000;
        }
        

        
        this.isLeap = isLeap
        this.day = (this.dayofyear) % 7
    }
    convert(year, month, day, hours, minutes, seconds, milliseconds) {
        if (typeof year === 'number') {
            if (typeof month === 'number') {
                this.GDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);
                this.PTimeStamp = this.GDate.getTime() - 38349000000; //since 1350/1/1 00:00
            } else {
                this.GDate = Date(year);
                this.PTimeStamp = year - 38349000000;
            }
        }
        if (typeof year === 'string') {
            this.GDate = new Date(year);
            this.PTimeStamp = this.GDate.getTime() - 38349000000;
        }
        if (typeof this.GDate === 'undefined' || !this.GDate) {
            this.GDate = new Date();
            this.PTimeStamp = this.GDate.getTime() - 38349000000;
        }
        this.calculatTime(this.PTimeStamp);
    }
    calculatTime(t) {
        //let t = this.PTimeStamp;
        this.milliseconds = t % 1000;
        t = (t - this.milliseconds) / 1000;
        this.seconds = t % 60;
        t = (t - this.seconds) / 60;
        this.minutes = t % 60;
        t = (t - this.minutes) / 60;
        this.hours = t % 24;
        t = (t - this.hours) / 24;
        this.day = (1 + t) % 7;
        let ty = Math.floor(t / 365);
        let tl = Math.floor((ty-(ty > 20 ? 1: 0)) / 4);// total of leap years
        t -= tl;
        this.dayofyear = t % 365;
        this.year = 1350 + Math.floor(t / 365);
        this.isLeap = this.year % 4 === (2 + this.year > 1370)
        if (this.dayofyear > 186) {
            this.month = 6 + Math.floor((this.dayofyear - 187) / 30);
            this.date = this.dayofyear - (6 + this.month * 30);
        } else {
            this.month = Math.floor((this.dayofyear-1) / 31);
            this.date = this.dayofyear - (this.month * 31);
            this.hours++ // summer clock
        }
    }
    from(year, month, day, hours, minutes, seconds, milliseconds)
    {
        year = Number(year)
        month = Number(month)
        day = Number(day)
        hours = Number(hours)
        minutes = Number(minutes)
        seconds = Number(seconds)
        milliseconds = Number(milliseconds)
        if(month < 1 || month > 12 || day < 1 || day > 31 || hours < 0 || hours > 24 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59 || milliseconds < 0 || milliseconds > 999)
            return false;

        let isLeap = year % 4 === (2 + (year > 1370));
        let tl = year + Math.floor(year / 4) - (year > 1370 && isLeap ? 1:0);// total of leap years

        if(month == 12 && day > (29 + isLeap))
            return false;
        if(month > 6 && day > 30)
            return false;

        this.year = year;
        this.isLeap = isLeap
        this.month = month-1;
        this.dayofyear = this.month*30 + (this.month < 6 ? this.month : 6) + day
        this.day = (this.dayofyear+ tl) % 7
        this.date = day
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.milliseconds = milliseconds;
        return true;
    }

    getFullYear() {
        return this.year;
    }
    getYearIsLeap() {
        return this.isLeap;
    }
    getMonth() {
        return this.month;
    }
    getMonthName() {
        return this.MonthNames[this.month];
    }
    getMonthDays() {
        return this.MonthDays(this.month, this.month)
    }
    prevMonthDays() {
        if(this.month == 12)
            return this.MonthDays(1, this.month-1)
        return this.MonthDays(this.month, this.month)
    }
    MonthDays(m, y) {
        let isLeap = y % 4 === (2 + (y > 1370))
        if (m < 6) {
            return 31;
        } else if (m === 11) {
            return (isLeap ? 30 : 29)
        } else {
            return 30;
        }
    }
    getDate() {
        return this.date;
    }
    getDateName() {
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
        if (this.date === 1) {
            return 'اول';
        } else if (this.date > 19) {
            let r = this.date % 10;
            return names[this.date - r] + (r > 0 ? ' و ' + names[r] : 'م');
        } else {
            return names[this.date];
        }
    }
    getHours() {
        return this.hours;
    }
    getMinutes() {
        return this.minutes;
    }
    getSeconds() {
        return this.seconds;
    }
    getMilliseconds() {
        return this.milliseconds;
    }
    getTime() {
        return this.PTimeStamp;
    }
    getDay() {
        return this.day;
    }
    getDayName() {
        return this.WeekDays[this.day];
    }
    getDayShortName() {
        return this.WeekDays[this.day].slice(0,1);
    }

    format(str) {
        let result = '';
        for (let i in str) {
            if (str.hasOwnProperty(i)) {
                switch (str[i]) {
                    case 'd':
                        result += (this.date < 10 ? '0' + this.date : this.date);
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
                        result += (this.day - 2) % 7 + 1;
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
                        result += this.getMonthName().slice(0, 3);
                        break;
                    case 'm':
                        result += (this.month < 9 ? '0' + (this.month + 1) : this.month + 1);
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
                        result += String(this.year).slice(2);
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
                        result += (this.hours % 12 ? this.hours % 12 : '12');
                        break;
                    case 'G':
                        result += this.hours;
                        break;
                    case 'h':
                        let h = (this.hours % 12 ? this.hours % 12 : 12);
                        result += (h < 10 ? '0' + h : h);
                        break;
                    case 'H':
                        result += (this.hours < 10 ? '0' + this.hours : this.hours);
                        break;
                    case 'i':
                        result += (this.minutes < 10 ? '0' + this.minutes : this.minutes);
                        break;
                    case 's':
                        result += (this.seconds < 10 ? '0' + this.seconds : this.seconds);
                        break;
                    case 'u':
                        result += (this.milliseconds < 10 ? '0' + this.milliseconds : this.milliseconds);
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

module.exports = { Shamsi, MonthNames, WeekDays };