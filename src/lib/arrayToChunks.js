const arrayToChunks = (array, chunkSize) => {
  if (array.length === 0) return array;

  const chunks = [];
  let currentChunk = [];
  chunks.push(currentChunk);
  let remainingChunkCapacity = chunkSize;

  array.forEach((item, index) => {
    if (remainingChunkCapacity === 0) {
      // start new chunk
      currentChunk = [];
      chunks.push(currentChunk);
      remainingChunkCapacity = chunkSize;
    }

    // add item to current chunk
    currentChunk.push(item);
    remainingChunkCapacity -= 1;
  });

  return chunks;
};

export default arrayToChunks;
