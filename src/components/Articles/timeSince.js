
function timeSince(previous) {
    const current = Date.now();
    const elapsed = current - previous;

    const minutes = elapsed/60;
    const hours = minutes/60;
    
    if (hours < 1){
        return "Less than an hour ago"
    } else {
        return `${Math.floor(hours)} hours ago`
    }
}
