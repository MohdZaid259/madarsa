/**
 * A component to display a quote with optional Arabic text
 * @param {Object} props - Component props
 * @param {string} props.text - The quote text
 * @param {string} props.source - The source of the quote
 * @param {string} [props.arabicText] - Optional Arabic text of the quote
 */
export default function QuoteCard({ text, source, arabicText }) {
  return (
    <div className="bg-beige-100 p-6 rounded-lg border-l-4 border-green-600 my-8">
      {arabicText && (
        <p dir="rtl" className="font-amiri text-2xl md:text-3xl mb-4 text-right leading-relaxed notranslate">
          {arabicText}
        </p>
      )}
      <p className="font-amiri text-xl md:text-2xl italic mb-2">{text}</p>
      <p className="text-right font-bold">— {source}</p>
    </div>
  )
}

