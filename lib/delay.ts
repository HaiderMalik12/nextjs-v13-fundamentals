export const delay = (time: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), time);
    });
  };
  