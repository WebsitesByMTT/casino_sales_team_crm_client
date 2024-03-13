
export const getDateStamp = () => {
    var currentDate = new Date();

    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Months are zero-based
    var year = currentDate.getFullYear();

    // Add leading zeros if needed
    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;

    // Format the date as "dd-mm-yyyy"
    var formattedDate = day + '-' + month + '-' + year;

    return formattedDate
}

export const getTimeStamp = () => {
    var currentDate = new Date();

    // Get hours, minutes, and seconds
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();



    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;



    // Format the time as "HH:MM:SS"
    var formattedTime = hours + ':' + minutes + ':' + seconds;

    return formattedTime
}

