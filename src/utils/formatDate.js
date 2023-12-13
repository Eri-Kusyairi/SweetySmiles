export const formatDate = createdAt => {
    if (createdAt) {
<<<<<<< HEAD
      const createdAtDate = new Date(createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000);
=======
      const createdAtDate = new Date(createdAt);
>>>>>>> 72216da27aa111b3f397de55c22243be0eaa477f
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const year = createdAtDate.getFullYear();
      const month = months[createdAtDate.getMonth()];
      const day = createdAtDate.getDate();
      return `${month} ${day}, ${year}`;
    } else {
      return '';
    }
  };