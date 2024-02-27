const retry = (count, callback) => {
    return (...args) => {
      return new Promise(async (resolve, reject) => {
        let retryCount = count;
        let catchedError;
        while (retryCount >= 0) {
          try {
            const cbRes = await callback(...args);
            resolve(cbRes);
          } catch (e) {
            catchedError = e;
          }
  
          retryCount--;
        }
        reject(catchedError);
      });
    };
  };
  
  const timeout = (delay, callback) => {
    return async (...args) => {
      const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => reject('timeout'), delay);
      });
      const cbPromise = new Promise(async (resolve, reject) => {
        try {
          const cbRes = await callback(...args);
          resolve(cbRes);
        } catch (e) {
          reject(e);
        }
      });
  
      try {
        const raceResult = await Promise.race([timeoutPromise, cbPromise]);
        return raceResult;
      } catch (e) {
        throw new Error(e);
      }
    };
  };