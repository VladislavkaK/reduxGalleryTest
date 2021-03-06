export function makeYearPhotos(photos, selectedYear) {
    let createdYear,
      yearPhotos = [];
  
    photos.forEach(item => {
      createdYear = new Date(item.date * 1000).getFullYear();
      if (createdYear === selectedYear) {
        yearPhotos.push(item);
      }
    });
  
    yearPhotos.sort((a, b) => b.likes.count - a.likes.count);
  
    return yearPhotos;
  }