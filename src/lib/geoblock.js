export const ALLOWED_COUNTRIES = ['IN', 'CA', 'ZA']; // India, Canada, South Africa

export async function checkCountryAccess(request) {
  try {
    if (process.env.NODE_ENV === 'development') {
      const testCountry = process.env.TEST_COUNTRY || 'IN';
      console.log(`🧪 TESTING MODE: Simulating country ${testCountry}`);
      const isAllowed = ALLOWED_COUNTRIES.includes(testCountry);
      console.log(`🧪 Result: ${isAllowed ? 'ALLOWED' : 'BLOCKED'} for ${testCountry}`);
      return isAllowed;
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               request.ip ||
               '127.0.0.1';

    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,countryCode,country`, {
      timeout: 5000
    });
    
    if (!response.ok) throw new Error('API failed');
    
    const data = await response.json();
    
    if (data.status === 'success') {
      console.log(`🌍 Visitor from: ${data.country} (${data.countryCode})`);
      return ALLOWED_COUNTRIES.includes(data.countryCode);
    }
    
    console.log('⚠️ Geolocation API failed, allowing access');
    return true;
    
  } catch (error) {
    console.error('Geo-check error:', error);
    return true;
  }
}

export function isAdminRoute(pathname) {
  return pathname.startsWith('/admin') || 
         pathname.startsWith('/api') ||
         pathname === '/blocked';
}