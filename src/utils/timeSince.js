function timeSince(previous) {
    const current = Date.now();
    const elapsed = current / 1000 - previous;

    const minutes = elapsed / 60;
    const hours = minutes / 60;
    const days = Math.round(hours / 24);

    if (days < 1) {
      return "Less than a day ago";
    } else if (days === 1) {
      return "1 day ago"
    } else if (days > 1 && days < 14){
      return `${days} days ago`;
    } else if (days >= 14 && days < 21){
      return `2 weeks ago`;
    } else if (days >= 21 && days < 31){
      return `3 weeks ago`;
    } else if (days >=31 && days < 60){
      return "1 month ago";
    } else {
      return `${Math.round(days/30)} months ago`
    }
  }

  export default timeSince;