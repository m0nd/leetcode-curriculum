function slice<T>(arr: readonly T[], start: number, size: number): T[] {
  const res: T[] = [];

  for (let i = start; res.length < size && i < arr.length; ++i) {
    res.push(arr[i]);
  }

  return res;
}

function chunk<T>(arr: readonly T[], size: number): T[][] {
  const res: T[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    res.push(slice(arr, i, size));
  }

  return res;
}