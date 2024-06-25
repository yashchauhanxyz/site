const originalDate = new Date(member.fee_paid_date);
    const year = originalDate.getFullYear();
    const month = ('0' + (originalDate.getMonth() + 1)).slice(-2); // Month is zero-based, so we add 1 and pad with '0' if necessary
    const day = ('0' + originalDate.getDate()).slice(-2); // Pad with '0' if necessary
    const formattedDateString = `${year}-${month}-${day}`;