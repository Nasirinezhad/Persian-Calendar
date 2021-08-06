const MonthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
const WeekDays = ['شنبه', 'یک شنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه'];

class Shamsi extends Date {
    constructor(year, month, day, hours, minutes, seconds, milliseconds) {
        if (typeof year === 'number') {
            if (typeof month === 'number') {
                let ts = Shamsi.#parse(year, month, day, hours, minutes, seconds, milliseconds)
                if(ts.next().value){
                    super(ts.next());

                    let obj = ts.next().value
                    this.year = obj.year
                    this.isLeap = obj.isLeap
                    this.month = obj.month
                    this.dayofyear = obj.dayofyear
                    this.day = obj.day
                    this.date = obj.date
                    this.hours = obj.hours
                    this.minutes = obj.minutes
                    this.seconds = obj.seconds
                    this.milliseconds = obj.milliseconds
                    this.PTimeStamp = obj.PTimeStamp
                }
            } else {
                super(year + 38349000000);
                this.PTimeStamp = year; //timestamp since 1350/1/1 00:00
                this.calculatTime(this.PTimeStamp)
            }
        }else {
            super();
            this.PTimeStamp = super.getTime() - 38349000000; //timestamp since 1350/1/1 00:00
            this.calculatTime(this.PTimeStamp)
        }
        
    }
    static* #parse(year, month, day, hours, minutes, seconds, milliseconds)
    {

        year = Number(year)
        month = Number(month) || 0
        day = Number(day) || 0
        hours = Number(hours) || 0
        minutes = Number(minutes) || 0
        seconds = Number(seconds) || 0
        milliseconds = Number(milliseconds) || 0

        if(month < 1 || month > 12 || day < 1 || day > 31 || hours < 0 || hours > 24 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59 || milliseconds < 0 || milliseconds > 999)
            yield false;

        let isLeap = year % 4 === (2 + (year > 1370));

        if(month == 12 && day > (29 + isLeap))
            yield false;
        if(month > 6 && day > 30)
            yield false;
        let tl = Math.floor(year / 4) - (year > 1370 && isLeap ? 1:0);// total of leap years
        let dayofyear = (month-1)*30 + (month < 7 ? (month-1) : 6) + day
    
        yield true;

        let timestamp = (((((year - 1350) * 365 + dayofyear + tl - 338) * 24 + hours) * 60 + minutes) * 60 + seconds) * 1000 + milliseconds
        yield timestamp + 38349000000;

        yield {
            year: year,
            isLeap: isLeap,
            month: month-1,
            dayofyear: dayofyear,
            day: (dayofyear + tl) % 7,
            date: day,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            milliseconds: milliseconds,
            PTimeStamp: timestamp
        }
    }

    static convert(year, month, day, hours, minutes, seconds, milliseconds) {
        let GDate = null;
        if (typeof year === 'number') {
            if (typeof month === 'number') {
                GDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);
            } else {
                GDate = Date(year)
            }
        }else{
            GDate = new Date(year)
        }
        return new Shamsi(GDate.getTime() - 38349000000)
    }
    convert() {
        return new Date(this.PTimeStamp + 38349000000)
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