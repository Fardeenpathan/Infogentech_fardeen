// Country code mapping utilities for blog filtering
export const countryMapping = {
  // Primary markets
  'US': { country: 'us', region: 'north-america' },
  'IN': { country: 'in', region: 'asia' },
  
  // North America
  'CA': { country: 'ca', region: 'north-america' },
  
  // Europe  
  'UK': { country: 'uk', region: 'europe' },
  'GB': { country: 'uk', region: 'europe' }, // Alternative UK code
  'DE': { country: 'de', region: 'europe' },
  'FR': { country: 'fr', region: 'europe' },
  'ES': { country: 'es', region: 'europe' },
  'IT': { country: 'it', region: 'europe' },
  
  // Asia-Pacific
  'AU': { country: 'au', region: 'oceania' },
  'JP': { country: 'jp', region: 'asia' },
  'SG': { country: 'global', region: 'asia' }, // Singapore maps to global for now
  'NZ': { country: 'global', region: 'oceania' }, // New Zealand maps to global for now
  
  // South America
  'BR': { country: 'br', region: 'south-america' },
  
  // Default/Fallback
  'GLOBAL': { country: 'global', region: 'global' }
};

/**
 * Get country and region for blog API filtering based on detected country code
 * @param {string} countryCode - ISO country code (e.g., 'US', 'IN', 'UK')
 * @param {string} routeType - 'us' for US routes, 'in' for India routes
 * @returns {object} - { country, region } for API filtering
 */
export const getBlogFilterParams = (countryCode, routeType = 'in') => {
  if (!countryCode) {
    return routeType === 'us' 
      ? { country: 'us', region: 'north-america' }
      : { country: 'in', region: 'asia' };
  }

  const mapping = countryMapping[countryCode.toUpperCase()];
  
  if (mapping) {
    return mapping;
  }
  
  // Fallback based on route type
  if (routeType === 'us') {
    return { country: 'global', region: 'global' }; // Show global content for unmapped countries on US routes
  } else {
    return { country: 'in', region: 'asia' }; // Default to India for main site
  }
};

/**
 * Determine if current route is US-based
 * @param {string} pathname - Current pathname
 * @returns {boolean} - true if US route
 */
export const isUSRoute = (pathname) => {
  return pathname && pathname.startsWith('/us');
};

/**
 * Get route type based on pathname
 * @param {string} pathname - Current pathname  
 * @returns {string} - 'us' or 'in'
 */
export const getRouteType = (pathname) => {
  return isUSRoute(pathname) ? 'us' : 'in';
};

/**
 * Build blog API URL with country/region filtering
 * @param {string} baseUrl - Base API URL
 * @param {object} params - Existing URL parameters
 * @param {string} countryCode - Detected country code
 * @param {string} routeType - 'us' or 'in'
 * @returns {object} - Updated URLSearchParams with country/region
 */
export const addCountryFilters = (params, countryCode, routeType) => {
  const { country, region } = getBlogFilterParams(countryCode, routeType);
  
  // Add country filter - this will fetch blogs for specific country + global fallbacks
  if (country !== 'global') {
    params.append('country', `${country},global`);
  } else {
    params.append('country', 'global');
  }
  
  // Add region filter as secondary filter
  if (region !== 'global') {
    params.append('region', `${region},global`);
  }
  
  return params;
};