class DaysWeather{
    month: string;
    date: string;
    year: string;
    weekDay: string;
    lowTemp: string;
    highTemp: string;
    condition: string;
    image: string;
    constructor(date: string, month: string, year: string, weekDay: string, low: string, high: string, condition: string, image: string) {
        this.date = date;
        this.month = month;
        this.year = year;
        this.weekDay = weekDay;
        this.lowTemp = low;
        this.highTemp = high;
        this.condition = condition;
        this.image = image;
    } 

}