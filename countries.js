// Simple country list for the signup dropdown (name only — good enough for a profile field)

const COUNTRIES = [

  'India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France',

  'Italy', 'Spain', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Ireland',

  'Switzerland', 'Austria', 'Belgium', 'Portugal', 'Poland', 'Greece', 'Russia', 'Turkey',

  'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Israel', 'South Africa', 'Nigeria',

  'Egypt', 'Kenya', 'China', 'Japan', 'South Korea', 'Singapore', 'Malaysia', 'Indonesia',

  'Thailand', 'Vietnam', 'Philippines', 'Bangladesh', 'Pakistan', 'Sri Lanka', 'Nepal',

  'New Zealand', 'Brazil', 'Mexico', 'Argentina', 'Chile', 'Colombia', 'Peru',

]

 

export default COUNTRIES.sort((a, b) => a.localeCompare(b))