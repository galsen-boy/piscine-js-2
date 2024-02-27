//   const obj = { d: 10, t: 2, Δv: 100 }
  
  const getAcceleration = (obj) => {
    if (obj.hasOwnProperty('f') && obj.hasOwnProperty('m')) {
        return obj.f / obj.m
    } else if (obj.hasOwnProperty('Δv') && obj.hasOwnProperty('Δt')) {
        return obj.Δv / obj.Δt
    } else if (obj.hasOwnProperty('t') && obj.hasOwnProperty('d')) {
        return 2*obj.d/(obj.t)**2

    } else {
        return "impossible"
    }
  }

//   console.log(getAcceleration(obj));