var DaysWeather = (function () {
    function DaysWeather(date, month, year, weekDay, low, high, condition, image) {
        this.date = date;
        this.month = month;
        this.year = year;
        this.weekDay = weekDay;
        this.lowTemp = low;
        this.highTemp = high;
        this.condition = condition;
        this.image = image;
    }
    return DaysWeather;
})();
