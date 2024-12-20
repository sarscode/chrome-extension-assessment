export default function NotePad() {
  return (
    <section className="bg-[#1F1F1F] text-[#ADADAD] rounded-t-[32px] px-8 py-6 w-[500px] h-[200px] drop-shadow-lg flex flex-col">
      <form>
        <label id="note" className="block text-xl font-bold mb-6">
          Note
        </label>
        <textarea
          name="note"
          id="note"
          placeholder="Start typing, scribble your thoughts..."
          className="bg-transparent w-full placeholder:tracking-wide focus:outline-none h-full appearance-none resize-none"
        ></textarea>
      </form>
    </section>
  );
}
