// This module handles local logic for the Career Coach feature.
// External API integrations have been removed to ensure privacy and local stability.

export const getCoachResponse = (query) => {
  const lowerQuery = query.toLowerCase();
  if (lowerQuery.includes('cv') || lowerQuery.includes('resume')) return 'CV';
  if (lowerQuery.includes('interview')) return 'Interview';
  if (lowerQuery.includes('company') || lowerQuery.includes('where')) return 'Companies';
  return 'Default';
};
