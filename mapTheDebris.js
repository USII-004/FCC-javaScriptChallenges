// According to Kepler's Third Law, the orbital period  T
// of two point masses orbiting each other in a circular or 
// elliptic orbit is:

// T=2π√a^3/μ
 
// a is the orbit's semi-major axis
// μ = GM is the standard gravitational parameter
// G is the gravitational constant,
// M is the mass of the more massive body.

// Return a new array that transforms the elements' 
// average altitude into their orbital periods (in seconds).

// The array will contain objects in the format 
// {name: 'name', avgAlt: avgAlt}.

// The values should be rounded to the nearest whole number. 
// The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the 
// GM value of earth is 398600.4418 km3s-2.


function orbitalPeriod(arr) {
  const GM = 398600.4418; 
  // Gravitational constant times Earth's mass (in km³/s²)
  const earthRadius = 6367.4447; 
  // Earth's radius in kilometers
  
  // Function to calculate orbital period for a given altitude
  const calculateOrbitalPeriod = (avgAlt) => {
    const semiMajorAxis = avgAlt + earthRadius; 
    // Calculate semi-major axis
    const orbitalPeriodInSeconds = 2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / GM); 
    // Calculate orbital period
    return Math.round(orbitalPeriodInSeconds); 
    // Round to nearest whole number
  };
  
  // Transform average altitude into orbital periods for each object in the array
  return arr.map(obj => {
    const { name, avgAlt } = obj;
    const orbitalPeriod = calculateOrbitalPeriod(avgAlt);
    return { name, orbitalPeriod };
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
