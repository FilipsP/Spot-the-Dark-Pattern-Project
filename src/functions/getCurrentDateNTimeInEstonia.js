export const getCurrentDateNTimeInEstonia = () => {
    const today = new Date();

    const date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear() ;

    let minutes = today.getMinutes()
    let hours = today.getHours()
    if (minutes<10){
        minutes = "0" + minutes
    }
    if (hours<10){
        hours = "0" + hours
    }

    const time = hours + ":" + minutes;

    return date + ' ' + time;

}