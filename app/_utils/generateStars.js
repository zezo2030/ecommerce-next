/**
 * Function to generate horizontal stars based on decimal rating (0-5)
 * @param {number} rating - The rating value between 0 and 5
 * @returns {JSX.Element} - Star rating component
 */
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {/* Full stars */}
      {Array.from({ length: fullStars }, (_, i) => (
        <span key={`full-${i}`} className="text-yellow-400 text-lg">
          ★
        </span>
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <span className="text-yellow-400 text-lg relative">
          <span className="absolute inset-0">☆</span>
          <span className="overflow-hidden inline-block w-1/2">★</span>
        </span>
      )}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <span key={`empty-${i}`} className="text-gray-300 text-lg">
          ☆
        </span>
      ))}
    </div>
  );
}

export default generateStars;
