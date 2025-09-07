function normalize(value: any) {
  if (value === undefined || value === null || value === "") return 0;

  // try to cast numeric strings to numbers
  if (typeof value === "string" && !isNaN(Number(value))) {
    return Number(value);
  }

  return value;
}

export function getChangedFields<T extends object>(original: T, updated: T): Partial<T> {
  const changes: Partial<T> = {};

  for (const key in updated) {
    const origVal = (original as any)[key];
    const updatedVal = (updated as any)[key];

    if (
      typeof updatedVal === "object" &&
      updatedVal !== null &&
      !Array.isArray(updatedVal)
    ) {
      const nestedChanges = getChangedFields(origVal || {}, updatedVal || {});
      if (Object.keys(nestedChanges).length > 0) {
        (changes as any)[key] = nestedChanges;
      }
    } else {
      const normOrig = normalize(origVal);
      const normUpdated = normalize(updatedVal);

      if (normOrig !== normUpdated) {
        (changes as any)[key] = updatedVal;
      }
    }
  }

  return changes;
}
