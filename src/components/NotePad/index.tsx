export default function NotePad() {
  return (
    <section className="bg-[#1F1F1F] text-[#ADADAD] rounded-t-[32px] px-8 py-6 w-[500px] drop-shadow-lg">
      <form>
        <label id="note" className="block text-xl font-bold mb-6">
          Note
        </label>
        <textarea
          name="note"
          id="note"
          placeholder="Start typing, scribble your thoughts..."
          className="bg-transparent w-full"
        ></textarea>
      </form>
    </section>
  );
}
