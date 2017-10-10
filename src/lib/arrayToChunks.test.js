import arrayToChunks from './arrayToChunks';

describe('arrayToChunks', () => {
  it('chunks an array into chunks of 2', () => {
    expect(arrayToChunks([1, 2, 3, 4, 5, 6, 7, 8], 2)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8]]);
  });

  it('chunks an array into chunks of 3', () => {
    expect(arrayToChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });

  it('chunks an array into chunks of 4', () => {
    expect(arrayToChunks([1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([[1, 2, 3, 4], [5, 6, 7, 8]]);
  });

  it('works when the array is not evenly divisible by the chunk size', () => {
    expect(arrayToChunks([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('returns an empty array if the array is empty', () => {
    expect(arrayToChunks([], 2)).toEqual([]);
  });

  it('returns an incomplete chunk if the array size is smaller than chunk size', () => {
    expect(arrayToChunks([1, 2, 3], 4)).toEqual([[1, 2, 3]]);
  });
});
