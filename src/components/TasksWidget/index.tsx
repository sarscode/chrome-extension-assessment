export default function TasksWidget() {
  return (
    <section className="bg-[#1F1F1F] text-[#ADADAD] rounded-t-[32px] px-8 py-6 w-[460px] drop-shadow-lg">
      <form>
        <label id="task" className="block text-xl font-bold mb-6">
          Tasks
        </label>
        <textarea
          name="task"
          id="task"
          placeholder="Start typing, scribble your thoughts..."
          className="bg-transparent w-full"
        ></textarea>
      </form>
    </section>
  );
}
