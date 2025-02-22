export function convertMinutes(minutes){
    const hours = Math.floor(minutes / 60);
    const remaningMinutes = minutes%60;
    return `${hours}h ${remaningMinutes}m`
}