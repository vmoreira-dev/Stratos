export function normalize(values: number[]) {
  const min = Math.min(...values);
  const max = Math.max(...values);

  return values.map(v => {
    if (max === min) return 0.5; // flat forecast safety
    return (v - min) / (max - min);
  });
}

export function exaggerate(norm: number[], floor = 0.25, range = 0.5) {
  return norm.map(v => floor + v * range);
}
