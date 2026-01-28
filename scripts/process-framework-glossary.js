const fs = require('fs');
const path = require('path');

// Read the CSV file
const csvPath = path.join(__dirname, '..', 'Glossary - Framework_Glossary.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');

// Parse CSV - handle quoted fields with commas inside
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        // Escaped quote
        current += '"';
        i++;
      } else {
        // Toggle quote mode
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);

  return result;
}

// Generate slug from term
function generateSlug(term) {
  return term
    .toLowerCase()
    .replace(/[()]/g, '') // Remove parentheses
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Determine category based on rules
function determineCategory(type, domain, sensitivityLevel) {
  // Type "Pattern & Dynamic" -> category "pattern"
  if (type === 'Pattern & Dynamic') {
    return 'pattern';
  }

  // Type "Framework & Model" -> category "frameworks"
  if (type === 'Framework & Model') {
    return 'frameworks';
  }

  // Default types that go to "frameworks" regardless of domain:
  // "Practice & Skill", "Data & Research Method", "Product Artifact", "Metric & Measurement"
  const frameworkTypes = [
    'Practice & Skill',
    'Data & Research Method',
    'Product Artifact',
    'Metric & Measurement'
  ];
  if (frameworkTypes.includes(type)) {
    return 'frameworks';
  }

  // For "Trait & Disposition", "State & Experience", "Identity & Attraction", "Identity & Orientation"
  // use "desire" if domain is "Desire & Arousal" or "Identity & Attraction", otherwise "pattern"
  if (type === 'Trait & Disposition' || type === 'State & Experience' || type === 'Identity & Attraction' || type === 'Identity & Orientation') {
    if (domain === 'Desire & Arousal' || domain === 'Identity & Attraction') {
      return 'desire';
    }
    // Check for sensitive categories for these types
    if (domain === 'Fantasy, Kink & Exploration' && sensitivityLevel === 'Highly Sensitive') {
      return 'sensitive';
    }
    return 'pattern';
  }

  // Domain "Fantasy, Kink & Exploration" with sensitivityLevel "Highly Sensitive" -> category "sensitive"
  if (domain === 'Fantasy, Kink & Exploration' && sensitivityLevel === 'Highly Sensitive') {
    return 'sensitive';
  }

  // Domain "Consent & Boundaries" -> "sensitive" if Highly Sensitive, otherwise "frameworks"
  if (domain === 'Consent & Boundaries') {
    return sensitivityLevel === 'Highly Sensitive' ? 'sensitive' : 'frameworks';
  }

  // "Need & Preference", "Expectation & Norm" -> check domain-based rules
  // Domain "Desire & Arousal" -> category "desire"
  if (domain === 'Desire & Arousal') {
    return 'desire';
  }

  // Default: "frameworks"
  return 'frameworks';
}

// Parse semicolon-separated values into array
function parseSemicolonList(value) {
  if (!value || value.trim() === '') {
    return [];
  }
  return value
    .split(';')
    .map(item => item.trim())
    .filter(item => item.length > 0);
}

// Parse the CSV
const lines = csvContent.split('\n');
const header = parseCSVLine(lines[0]);

// Verify header columns
console.log('// Header columns:', header);

const terms = [];

for (let i = 1; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  const fields = parseCSVLine(line);

  if (fields.length < 11) {
    console.error(`// Skipping line ${i + 1}: insufficient fields (${fields.length})`);
    continue;
  }

  const [
    id,
    term,
    type,
    definition,
    extendedNotes,
    examples,
    domain,
    sensitivityLevel,
    misinterpretations,
    relatedTerms,
    tags
  ] = fields;

  // Calculate new ID starting from 101
  const newId = 100 + parseInt(id, 10);

  const termObj = {
    id: newId,
    term: term,
    slug: generateSlug(term),
    type: type,
    category: determineCategory(type, domain, sensitivityLevel),
    definition: definition,
    extendedNotes: extendedNotes,
    examples: parseSemicolonList(examples),
    domain: domain,
    sensitivityLevel: sensitivityLevel,
    misinterpretations: parseSemicolonList(misinterpretations),
    relatedTerms: parseSemicolonList(relatedTerms),
    tags: parseSemicolonList(tags)
  };

  terms.push(termObj);
}

console.log(`// Processed ${terms.length} terms\n`);

// Output as JavaScript array
console.log('// Add these terms to glossaryTerms array in lib/glossary-data.ts');
console.log('// ============================================================\n');

terms.forEach((term, index) => {
  const json = JSON.stringify(term, null, 2);
  // Add comma between items
  if (index < terms.length - 1) {
    console.log(json + ',');
  } else {
    console.log(json);
  }
});
